/* Independent dashboard; existing modules remain available through switchTab. */
(() => {
  const home = document.getElementById('section-home');
  home.innerHTML = `
    <div class="nsh-hero">
      <p class="nsh-kicker">NHỊP SINH HỌC / SLEEPMATE</p>
      <h1>Bớt một chút điện thoại.<br>Thêm một chút giấc ngủ.</h1>
      <p class="nsh-muted">Một nhịp tối nhẹ nhàng hơn, bắt đầu từ hôm nay.<br>Đặt giới hạn, nhìn lại thói quen và dành thời gian cho chính mình.</p>
      <div class="nsh-actions"><button class="nsh-btn" onclick="switchTab('screen-sentinel')">Bắt đầu tối nay →</button><button class="nsh-btn secondary" onclick="switchTab('bedtime')">Hiểu thói quen của tôi</button><button class="nsh-btn secondary" onclick="switchTab('plans')"><span id="nsh-plan-badge">Gói: Học sinh · Miễn phí</span></button></div>
    </div>
    <div class="nsh-grid">
      <article class="nsh-card"><p class="nsh-kicker">GIỚI HẠN TỐI NAY</p><strong id="nsh-limit">—</strong><p class="nsh-muted">Thời gian sử dụng trong ứng dụng</p></article>
      <article class="nsh-card"><p class="nsh-kicker">GIỜ DỪNG DÙNG MÁY</p><strong id="nsh-curfew">—</strong><p class="nsh-muted">Mốc giờ bạn đã chọn cho mình</p></article>
      <article class="nsh-card"><p class="nsh-kicker">ĐÊM CỦA BẠN</p><strong>04:00 – 03:59</strong><p class="nsh-muted">Sau nửa đêm vẫn tính cùng một đêm</p></article>
      <article class="nsh-card nsh-wide"><h2>Ba bước để khép lại một ngày</h2>
        <div class="nsh-step"><time>21:30</time><div><b>Nghỉ mắt một chút</b><p>Dành 20 giây rời màn hình, hoàn tất việc học và sắp đồ cho sáng mai.</p></div></div>
        <div class="nsh-step"><time>22:00</time><div><b>Đặt điện thoại xuống</b><p>Khép lại nội dung đang xem. Cho bản thân 30 giây để quyết định nghỉ.</p></div></div>
        <div class="nsh-step"><time>22:30</time><div><b>Đến giờ ngủ</b><p>Đây là lộ trình trong tài liệu. Báo thức khi app đóng và khóa máy thật cần APK Android; web chỉ giới hạn trong trang.</p></div></div>
        <button class="nsh-btn secondary" onclick="switchTab('week')">Thiết lập lịch riêng →</button>
      </article>
      <article class="nsh-card"><h2>Góc nhỏ của bạn</h2><label for="nsh-name">Bạn muốn được gọi là gì?</label><input id="nsh-name" maxlength="40" placeholder="Tên của bạn" autocomplete="nickname"><button class="nsh-btn secondary" id="nsh-save-name" style="margin-top:12px">Lưu tên</button><p id="nsh-greeting" class="nsh-muted" style="margin-top:12px" role="status"></p></article>
    </div>
    <div class="nsh-grid">
      <article class="nsh-card"><h2>01 / Nhìn lại thói quen</h2><p class="nsh-muted">9 câu tự đánh giá, nhật ký 11 lý do chưa ngủ và 10 thẻ kiến thức.</p><div class="nsh-actions"><button class="nsh-btn secondary" onclick="switchTab('bedtime')">Khám phá →</button></div></article>
      <article class="nsh-card"><h2>02 / Thả lỏng tâm trí</h2><p class="nsh-muted">Viết ra điều còn vướng bận hoặc dành vài phút thực hành thở 4-7-8.</p><div class="nsh-actions"><button class="nsh-btn secondary" onclick="switchTab('journal')">Viết nhật ký</button><button class="nsh-btn secondary" onclick="switchTab('breath-lab')">Tập thở</button></div></article>
      <article class="nsh-card"><h2>03 / Xem tiến trình</h2><p class="nsh-muted">Thống kê từng đêm, lịch sử gần đây và báo cáo tuần từ dữ liệu của bạn.</p><div class="nsh-actions"><button class="nsh-btn secondary" onclick="switchTab('stats')">Xem thống kê →</button></div></article>
    </div>
    <div class="nsh-note nsh-muted"><b>Riêng tư ngay từ đầu.</b> Bản này hiện lưu dữ liệu trên thiết bị, không kết nối Firebase của SleepMate cũ. Tài khoản, đồng bộ nhóm và bảng điều khiển giáo viên chỉ hoạt động sau khi cấu hình máy chủ riêng. Không đo giấc ngủ sinh lý, không chẩn đoán hay điều trị mất ngủ.</div>
    <article class="nsh-card"><h2>Về dự án & hướng phát triển</h2><p class="nsh-muted">Huỳnh Phúc Khánh Lộc · Lớp 10/3 · Trường THPT Nguyễn Đình Chiểu.<br>Nhịp Sinh Học được xây dựng theo nội dung bài dự thi khởi nghiệp 2026.</p><details style="margin-top:15px"><summary class="nsh-muted" style="cursor:pointer">Gói dịch vụ & dùng thử</summary><p class="nsh-muted">Học sinh: miễn phí. Gói Thường: 29.000đ/tháng hoặc 129.000đ/năm. Gói Nghiêm túc: 79.000đ/tháng hoặc 379.000đ/năm. Gói Trường: 5.000.000đ/năm. Mở tab <b>Gói & Phí</b> để dùng thử 3 ngày và dùng máy tính chi phí. Đây là mô phỏng theo báo cáo — chưa kết nối cổng thanh toán, không tự thu tiền.</p></details><p class="nsh-muted" style="margin-top:14px">Thí điểm 8 tuần: đo ban đầu → nhắc theo cấp → đồng hành theo nhóm → đánh giá lại. Giảm 30% thời gian dùng máy sau 22:30 là mục tiêu, chưa phải kết quả đã đạt.</p></article>
  `;
  const name = document.getElementById('nsh-name');
  const greeting = document.getElementById('nsh-greeting');
  try { name.value = localStorage.getItem('nhip-sinh-hoc.profile-name') || ''; } catch (_) {}
  const greet = () => { greeting.textContent = name.value.trim() ? `Chào ${name.value.trim()}, tối nay hãy dành thời gian nghỉ nhé.` : 'Một thay đổi nhỏ mỗi tối cũng đáng ghi nhận.'; };
  greet();
  document.getElementById('nsh-save-name').addEventListener('click', () => {
    try { localStorage.setItem('nhip-sinh-hoc.profile-name', name.value.trim()); greet(); } catch (_) { greeting.textContent = 'Trình duyệt không cho phép lưu. Hãy kiểm tra bộ nhớ của thiết bị.'; }
  });
  const refresh = () => {
    if (typeof S !== 'undefined') {
      document.getElementById('nsh-limit').textContent = `${S.screenLimitMin} phút`;
      document.getElementById('nsh-curfew').textContent = S.curfew || S.curfewManual || 'Chưa đặt';
    }
  };
  document.addEventListener('DOMContentLoaded', () => { refresh(); switchTab('home'); });
  document.getElementById('tab-btn-home').addEventListener('click', refresh);
})();

/* =====================================================================
   Gói & phí · dùng thử 3 ngày · tính toán chi phí · kịch bản 5 năm
   ===================================================================== */
(() => {
  'use strict';

  const PRICES = {
    'thuong': { month: 29000, year: 129000 },
    'nghiem-tuc': { month: 79000, year: 379000 },
    'truong': { year: 5000000 }
  };
  const PLAN_LABEL = { free: 'Học sinh · Miễn phí', thuong: 'Gói Thường', 'nghiem-tuc': 'Gói Nghiêm túc', truong: 'Gói Trường' };
  const TRIAL_MS = 3 * 24 * 60 * 60 * 1000; // 3 ngày
  const TRIAL_CHIP = { off: 'bg-slate-500/20 text-slate-300 border-slate-500/30', on: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' };

  const money = (n) => (Math.round(Number(n) || 0)).toLocaleString('vi-VN') + '₫';
  const rank = (k) => ({ free: 0, thuong: 1, 'nghiem-tuc': 2, truong: 3 }[k] || 0);
  const $ = (id) => document.getElementById(id);

  function effective() {
    const p = (S && S.plan) || {};
    if (p.trialEnd && Date.now() < p.trialEnd) return { key: p.trialPlan || 'free', trial: true };
    return { key: p.key || 'free', trial: false };
  }
  function entitled(level) { return rank(effective().key) >= rank(level); }

  window.NSH_ENTITLED = entitled;

  /* ---------- trạng thái dùng thử ---------- */
  let expiredNotified = false;
  function ensureTrial() {
    if (!S || !S.plan) return;
    if (S.plan.trialEnd && Date.now() >= S.plan.trialEnd) {
      S.plan.trialStart = 0; S.plan.trialEnd = 0; S.plan.trialPlan = '';
      save(true);
      if (!expiredNotified && typeof showToast === 'function') {
        expiredNotified = true;
        showToast('Hết thời gian dùng thử', 'Bạn đã trở về gói miễn phí. Không có khoản phí nào bị trừ.', 'info');
      }
    }
  }

  function startTrial(plan) {
    if (!S) return;
    const now = Date.now();
    S.plan.trialStart = now;
    S.plan.trialEnd = now + TRIAL_MS;
    S.plan.trialPlan = plan;
    if (!S.plan.since) S.plan.since = now;
    expiredNotified = false;
    save(true);
    render();
    showToast('Bắt đầu dùng thử', `Bạn đang dùng thử ${PLAN_LABEL[plan]} trong 3 ngày. Hết hạn sẽ tự về gói miễn phí, không tự thu tiền.`, 'ok');
  }

  function cancelTrial() {
    if (!S) return;
    S.plan.trialStart = 0; S.plan.trialEnd = 0; S.plan.trialPlan = '';
    save(true);
    render();
    showToast('Đã huỷ dùng thử', 'Bạn đã trở về gói đã chọn trước đó.', 'info');
  }

  function choose(plan) {
    if (!S) return;
    S.plan.key = plan;
    S.plan.since = Date.now();
    save(true);
    render();
    showToast('Đã chọn gói', `${PLAN_LABEL[plan]} đã được áp dụng trên thiết bị này.`, 'ok');
  }

  function fmtRemain(ms) {
    if (ms <= 0) return 'Hết hạn';
    const s = Math.floor(ms / 1000);
    const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return d > 0 ? `${d} ngày ${h} giờ` : `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }

  function render() {
    if (!S) return;
    ensureTrial();
    const eff = effective();

    const chip = $('plan-status-chip');
    if (chip) {
      const trial = eff.trial ? ' · ĐANG DÙNG THỬ' : '';
      chip.textContent = eff.key === 'free' && !eff.trial ? 'Gói hiện tại: Học sinh · Miễn phí' : `Gói hiện tại: ${PLAN_LABEL[eff.key]}${trial}`;
      chip.className = 'px-3 py-1.5 rounded-full text-[11px] font-bold border shrink-0 ' +
        (eff.trial ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                   : (eff.key === 'free' ? 'bg-slate-500/20 text-slate-300 border-slate-500/30' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'));
    }

    ['free', 'thuong', 'nghiem-tuc', 'truong'].forEach((k) => {
      const btn = $('plan-btn-' + k);
      if (!btn) return;
      const active = !eff.trial && eff.key === k;
      btn.className = 'w-full py-2.5 rounded-xl text-xs font-bold btn-bouncy border ' +
        (k === 'nghiem-tuc' && active
          ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white border-transparent'
          : (active ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                    : 'border-slate-700 text-slate-400 hover:text-slate-200'));
    });

    const cd = $('trial-countdown');
    const body = $('trial-body');
    if (cd && body) {
      if (eff.trial) {
        cd.textContent = 'Còn ' + fmtRemain(S.plan.trialEnd - Date.now());
        cd.className = 'px-3 py-1.5 rounded-full text-xs font-mono font-bold shrink-0 ' + TRIAL_CHIP.on;
        body.innerHTML =
          `<span class="text-xs text-slate-300">Bạn đang dùng thử <strong class="text-emerald-300">${PLAN_LABEL[S.plan.trialPlan]}</strong>. Hết hạn lúc <strong class="text-emerald-300 font-mono">${new Date(S.plan.trialEnd).toLocaleString('vi-VN')}</strong>.</span>` +
          `<button onclick="NSH_PLAN.cancelTrial()" class="py-2.5 px-4 rounded-xl bg-night-900 border border-slate-700 text-slate-300 text-xs font-bold btn-bouncy">Huỷ dùng thử</button>`;
      } else {
        cd.textContent = 'Chưa kích hoạt';
        cd.className = 'px-3 py-1.5 rounded-full text-xs font-mono font-bold shrink-0 ' + TRIAL_CHIP.off;
        body.innerHTML =
          `<button onclick="NSH_PLAN.startTrial('thuong')" class="py-2.5 px-4 rounded-xl bg-night-900 border border-sky-500/40 text-sky-300 text-xs font-bold btn-bouncy">Dùng thử gói Thường (3 ngày)</button>` +
          `<button onclick="NSH_PLAN.startTrial('nghiem-tuc')" class="py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold btn-bouncy">Dùng thử đầy đủ — Nghiêm túc (3 ngày)</button>` +
          `<span class="text-[10px] text-slate-500">Không cần thẻ · không tự thu tiền</span>`;
      }
    }

    const hint = $('ai-premium-hint');
    if (hint) hint.textContent = entitled('nghiem-tuc') ? '· đã mở khóa' : '· gói Nghiêm túc';

    const badge = $('nsh-plan-badge');
    if (badge) badge.textContent = 'Gói: ' + (eff.trial ? `${PLAN_LABEL[eff.key]} (thử)` : PLAN_LABEL[eff.key]);

    calc();
    proj();
  }

  function tick() { ensureTrial(); const cd = $('trial-countdown'); if (cd && S && S.plan && S.plan.trialEnd && Date.now() < S.plan.trialEnd) cd.textContent = 'Còn ' + fmtRemain(S.plan.trialEnd - Date.now()); }

  /* ---------- máy tính chi phí ---------- */
  function calc() {
    const planSel = $('calc-plan'), cycleSel = $('calc-cycle'), qtyEl = $('calc-qty'), qtyLabel = $('calc-qty-label'), out = $('calc-result');
    if (!planSel || !cycleSel || !qtyEl || !out) return;
    const plan = planSel.value;
    const isSchool = plan === 'truong';
    cycleSel.disabled = isSchool;
    if (isSchool) cycleSel.value = 'year';
    qtyLabel.textContent = isSchool ? '(trường)' : '(người dùng)';
    const qty = Math.max(1, Math.round(Number(qtyEl.value) || 1));

    let total, perUnitMonth, savings = 0, unitNote;
    if (isSchool) {
      const unit = PRICES.truong.year;
      total = unit * qty;
      perUnitMonth = Math.round(unit / 12);
      unitNote = 'đơn giá 5.000.000₫/năm/trường';
    } else {
      const p = PRICES[plan];
      if (cycleSel.value === 'year') {
        total = p.year * qty;
        perUnitMonth = Math.round(p.year / 12);
        savings = (p.month * 12 - p.year) * qty;
        unitNote = `đơn giá ${money(p.year)}/năm`;
      } else {
        total = p.month * qty;
        perUnitMonth = p.month;
        unitNote = `đơn giá ${money(p.month)}/tháng`;
      }
    }

    const card = (label, value, color) => `<div class="p-3.5 bg-night-950 rounded-2xl border border-slate-800">
        <span class="text-[9px] text-slate-500 uppercase font-bold block">${label}</span>
        <span class="text-sm font-mono font-bold ${color}">${value}</span>
      </div>`;
    out.innerHTML =
      card('Tổng cộng', money(total), 'text-amber-300') +
      card('Bình quân / người·tháng', money(perUnitMonth), 'text-cyan-300') +
      card('Tiết kiệm so với trả tháng', savings > 0 ? money(savings) : '—', savings > 0 ? 'text-emerald-300' : 'text-slate-500') +
      card('Đơn giá', unitNote, 'text-slate-300');
  }

  /* ---------- kịch bản 5 năm ---------- */
  const REPORT = {
    revenue: [50, 190, 460, 800, 1150],
    cost: [35, 105, 240, 400, 560],
    profit: [15, 85, 220, 400, 590],
    users: [200, 750, 1800, 3150, 4500],
    schools: [2, 8, 20, 35, 50]
  };
  const GROWTH = [1, 3.75, 9, 15.75, 22.5];

  function proj() {
    const body = $('proj-body'), note = $('proj-note');
    if (!body) return;
    const share = Number($('proj-share').value) || 0;
    const base = Math.max(1, Number($('proj-base').value) || 1);
    const isDefault = share === 70 && base === 200;

    const users = REPORT.users.slice();
    let revenue, profit;
    if (isDefault) {
      revenue = REPORT.revenue.slice(); profit = REPORT.profit.slice();
    } else {
      const avg = Math.round((share * 129000 + (100 - share) * 379000) / 10000) * 10000;
      revenue = users.map((u, i) => Math.round(u * avg / 1e6 + REPORT.schools[i] * 5));
      profit = revenue.map((r, i) => r - REPORT.cost[i]);
    }

    const row = (label, vals, cls) => `<tr>
        <td class="border border-slate-800 px-3 py-2 text-slate-300">${label}</td>
        ${vals.map((v) => `<td class="border border-slate-800 px-3 py-2 text-right font-mono ${cls || 'text-white'}">${v.toLocaleString('vi-VN')}</td>`).join('')}
      </tr>`;
    body.innerHTML =
      row('Doanh thu', revenue) +
      row('Chi phí', REPORT.cost, 'text-slate-400') +
      row('Lợi nhuận trước thuế', profit, 'text-emerald-300') +
      row('Người trả phí', users, 'text-cyan-300') +
      row('Trường/lớp hợp tác', REPORT.schools, 'text-indigo-300');

    if (note) note.innerHTML = isDefault
      ? 'Đây là bảng dự tính <strong>gốc trong bài báo cáo</strong> (đơn vị: triệu đồng), chưa phải doanh thu đã có. Giả định 70% chọn gói Thường (129.000₫/năm), 30% chọn gói Nghiêm túc (379.000₫/năm), làm tròn khoảng 200.000₫/người/năm; gói trường 5.000.000₫/năm.'
      : 'Bạn đã đổi giả định — bảng được tính lại theo tỷ lệ gói và số người bạn nhập; cột chi phí vẫn giữ theo báo cáo gốc. Đây vẫn chỉ là dự tính.';
  }

  /* ---------- xuất báo cáo / dữ liệu ---------- */
  function weekSummary() {
    const hist = (S.history || []).slice(0, 7);
    const avg = (a) => (a.length ? Math.round(a.reduce((x, y) => x + y, 0) / a.length) : 0);
    const n = hist.length;
    const goalMet = hist.filter((h) => h.goalMet).length;
    const lateAvg = avg(hist.map((h) => Number(h.lateSec) || 0));
    const activeAvg = avg(hist.map((h) => Number(h.activeSec) || 0));
    const lockouts = hist.reduce((a, h) => a + (Number(h.lockouts) || 0), 0);
    const clean = hist.filter((h) => (Number(h.lateSec) || 0) <= 60).length;
    const range = n ? `${hist[n - 1].day} → ${hist[0].day}` : '';
    return { n, goalMet, clean, lateAvg, activeAvg, lockouts, range };
  }

  function exportWeeklyReport() {
    if (!entitled('thuong')) { showToast('Cần gói Thường', 'Báo cáo tuần để gửi phụ huynh là quyền lợi của gói Thường. Mở tab “Gói & Phí” để dùng thử.', 'warn'); return; }
    const w = weekSummary();
    if (!w.n) { showToast('Chưa đủ dữ liệu', 'Báo cáo sẽ có sau đêm đầu tiên.', 'info'); return; }
    const rows = [
      ['Số đêm có dữ liệu', w.n + ' đêm'],
      ['Đêm đạt hạn mức', `${w.goalMet}/${w.n}`],
      ['Đêm dừng ngay sau 22:30', `${w.clean}/${w.n}`],
      ['Dùng máy sau 22:30 (TB)', fmtDur ? fmtDur(w.lateAvg) : (Math.round(w.lateAvg / 60) + ' phút')],
      ['Thời gian dùng (TB/đêm)', fmtDur ? fmtDur(w.activeAvg) : (Math.round(w.activeAvg / 60) + ' phút')],
      ['Số lần bị khoá', w.lockouts + ' lần']
    ];
    const html = `<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>Báo cáo tuần — Nhịp Sinh Học</title>
      <style>body{font-family:system-ui,Segoe UI,sans-serif;max-width:640px;margin:32px auto;padding:0 16px;color:#111}
      h1{font-size:20px}table{width:100%;border-collapse:collapse;margin-top:12px}td{border-bottom:1px solid #ddd;padding:8px 4px}
      .muted{color:#666;font-size:12px}</style></head><body>
      <h1>Báo cáo cuối tuần — Nhịp Sinh Học</h1><p class="muted">Khoảng thời gian: ${w.range}</p>
      <table>${rows.map(([k, v]) => `<tr><td>${k}</td><td style="text-align:right;font-weight:600">${v}</td></tr>`).join('')}</table>
      <p class="muted">Sinh bởi Nhịp Sinh Học. Số liệu đo trên thiết bị, không thay tư vấn y khoa.</p></body></html>`;
    const win = window.open('', '_blank');
    if (!win) { downloadBlob(html, 'nhip-sinh-hoc-bao-cao-tuan.html', 'text/html'); return; }
    win.document.open(); win.document.write(html); win.document.close();
    setTimeout(() => { try { win.focus(); win.print(); } catch (_) {} }, 250);
  }

  function exportDetailedData() {
    if (!entitled('nghiem-tuc')) { showToast('Cần gói Nghiêm túc', 'Xuất dữ liệu chi tiết là quyền lợi của gói Nghiêm túc. Mở tab “Gói & Phí” để dùng thử.', 'warn'); return; }
    const data = {
      app: 'Nhịp Sinh Học', exportedAt: new Date().toISOString(),
      plan: S.plan, history: S.history, usage: S.usage, sleepLog: S.sleepLog,
      lockHistory: S.lockHistory, bpScale: S.bpScale, bpDiary: S.bpDiary
    };
    downloadBlob(JSON.stringify(data, null, 2), `nhip-sinh-hoc-du-lieu-${new Date().toISOString().slice(0, 10)}.json`, 'application/json');
    showToast('Đã xuất dữ liệu', 'Tệp JSON chi tiết đã được tải về.', 'ok');
  }

  function downloadBlob(text, name, type) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type }));
    a.download = name; document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  window.NSH_PLAN = { choose, startTrial, cancelTrial, calc, proj, exportWeeklyReport, exportDetailedData, render };

  document.addEventListener('DOMContentLoaded', () => { render(); setInterval(tick, 1000); });
})();
