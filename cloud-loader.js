// Load cloud SDKs only when the owner configures this independent deployment.
if (window.SLEEPMATE_FB_CONFIG && window.SLEEPMATE_FB_CONFIG.projectId) {
  for (const sdk of ['app', 'auth', 'firestore']) {
    document.write('<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-' + sdk + '-compat.js"><\/script>');
  }
}
