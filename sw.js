const PREFIX = 'nhip-sinh-hoc-';
const CACHE = PREFIX + 'v6';
const CORE = ['./', './index.html', './admin.html', './manifest.webmanifest', './firebase-config.js?v=20261123', './cloud-loader.js', './independent.js', './independent.css', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png', './vendor/tailwind.css', './vendor/tailwind-admin.css', './vendor/fontawesome/all.min.css', './vendor/fonts/fonts.css', './vendor/fontawesome/webfonts/fa-solid-900.woff2', './vendor/fontawesome/webfonts/fa-regular-400.woff2', './vendor/fontawesome/webfonts/fa-brands-400.woff2', ...['quicksand','jetbrains-mono'].flatMap(f => ['latin','latin-ext','vietnamese'].map(l => `./vendor/fonts/${f}-400-${l}.woff2`))];
self.addEventListener('install', event => event.waitUntil((async () => {
  const cache = await caches.open(CACHE);
  await cache.addAll(CORE);
  await self.skipWaiting();
})()));
self.addEventListener('activate', event => event.waitUntil((async () => {
  for (const key of await caches.keys()) if (key.startsWith(PREFIX) && key !== CACHE) await caches.delete(key);
  await self.clients.claim();
})()));
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== location.origin || !url.href.startsWith(self.registration.scope)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (event.request.mode === 'navigate') {
      try { const res = await fetch(event.request); cache.put(event.request, res.clone()); return res; }
      catch (_) {
        // Offline: trả đúng trang đã lưu, nếu không có thì về trang chủ.
        return (await cache.match(event.request)) || (await cache.match('./index.html'));
      }
    }
    // stale-while-revalidate: trả cache ngay, cập nhật nền để lần sau có bản mới
    const hit = await cache.match(event.request);
    const revalidate = fetch(event.request).then(res => { if (res && res.ok) cache.put(event.request, res.clone()); return res; }).catch(() => hit);
    if (hit) { revalidate; return hit; }
    return revalidate;
  })());
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({type:'window'});
    for (const client of windows) if (client.url.startsWith(self.registration.scope)) return client.focus();
    return self.clients.openWindow('./index.html');
  })());
});
