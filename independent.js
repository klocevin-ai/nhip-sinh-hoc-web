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

    <!-- ĐĂNG KÝ TÀI KHOẢN + GÓI NGAY TRÊN TRANG CHỦ -->
    <div class="nsh-grid" id="nsh-signup-section">
      <article class="nsh-card nsh-wide" id="nsh-signup-card">
        <p class="nsh-kicker">TÀI KHOẢN CỦA BẠN</p>
        <h2>Đăng ký để lưu tiến trình & chọn gói</h2>
        <p class="nsh-muted">Chọn bạn là <b>học sinh</b> hay <b>người tiêu dùng</b> (phụ huynh, cá nhân) để form và gói hiển thị phù hợp. Có mạng → hồ sơ lưu trên máy chủ để Admin quản lý; mất mạng → vẫn dùng được trên thiết bị. Không tự thu phí.</p>
        <div class="nsh-seg" id="nsh-audience" role="group" aria-label="Bạn là">
          <button type="button" data-aud="student" aria-pressed="true">🎓 Học sinh</button>
          <button type="button" data-aud="consumer" aria-pressed="false">👤 Người tiêu dùng</button>
        </div>
        <p class="nsh-seg-hint" id="nsh-aud-hint">Dành cho học sinh THPT: theo dõi giờ ngủ, giới nghiêm, báo cáo cho phụ huynh.</p>
        <div id="nsh-reg-error" class="nsh-alert err hidden" role="alert"></div>
        <div class="nsh-form-grid" style="margin-top:14px">
          <div class="nsh-col-2"><label for="nsh-reg-name" id="nsh-lbl-name">Họ và tên học sinh *</label><input id="nsh-reg-name" maxlength="60" placeholder="Nguyễn Văn A" autocomplete="name"></div>
          <div><label for="nsh-reg-email">Email *</label><input id="nsh-reg-email" type="email" maxlength="100" placeholder="ten@email.com" autocomplete="email"></div>
          <div><label for="nsh-reg-phone">Số điện thoại</label><input id="nsh-reg-phone" type="tel" maxlength="15" placeholder="0941144975" autocomplete="tel"></div>
          <div class="nsh-col-2" id="nsh-class-wrap"><label for="nsh-reg-class" id="nsh-lbl-class">Lớp / trường</label><input id="nsh-reg-class" maxlength="80" placeholder="10/3 — THPT Nguyễn Đình Chiểu"></div>
          <div id="nsh-student-extra"><label for="nsh-reg-goal">Mục tiêu chính</label>
            <select id="nsh-reg-goal">
              <option value="sleep-2230">Ngủ trước 22:30</option>
              <option value="cut-1h">Giảm 1 giờ dùng máy mỗi tối</option>
              <option value="study-first">Học xong mới dùng máy</option>
            </select>
          </div>
          <div id="nsh-consumer-extra" class="hidden"><label for="nsh-reg-for">Bạn dùng cho</label>
            <select id="nsh-reg-for">
              <option value="self">Bản thân</option>
              <option value="child">Con em</option>
              <option value="family">Cả gia đình</option>
            </select>
          </div>
          <div><label for="nsh-reg-pass">Mật khẩu * (tối thiểu 6 ký tự)</label><input id="nsh-reg-pass" type="password" maxlength="80" placeholder="••••••" autocomplete="new-password"></div>
          <div><label for="nsh-reg-pass2">Nhập lại mật khẩu *</label><input id="nsh-reg-pass2" type="password" maxlength="80" placeholder="••••••" autocomplete="new-password"></div>
          <div class="nsh-col-2">
            <label id="nsh-lbl-plan">Gói đăng ký</label>
            <div class="nsh-plan-pick" id="nsh-reg-plan">
              <button type="button" class="nsh-plan-opt" data-plan="free" aria-pressed="true"><b data-pname>Học sinh</b><span data-pdesc>Miễn phí</span></button>
              <button type="button" class="nsh-plan-opt" data-plan="thuong" aria-pressed="false"><b data-pname>Gói Thường</b><span data-pdesc>29.000đ/tháng · 129.000đ/năm</span></button>
              <button type="button" class="nsh-plan-opt" data-plan="nghiem-tuc" aria-pressed="false"><b data-pname>Gói Nghiêm túc</b><span data-pdesc>79.000đ/tháng · 379.000đ/năm</span></button>
              <button type="button" class="nsh-plan-opt" data-plan="truong" aria-pressed="false"><b data-pname>Gói Trường</b><span data-pdesc>5.000.000đ/năm</span></button>
            </div>
            <p class="nsh-seg-hint" id="nsh-plan-hint"></p>
          </div>
        </div>
        <div class="nsh-actions">
          <button class="nsh-btn" id="nsh-reg-submit" style="color:#fff;background:linear-gradient(120deg,#8b5cf6,#4f46e5)">Tạo tài khoản</button>
          <button class="nsh-btn secondary" id="nsh-show-login">Đã có tài khoản? Đăng nhập</button>
        </div>
        <p class="nsh-tiny" style="margin-top:12px">Mật khẩu do Firebase xác thực (hoặc được mã hoá khi lưu tạm trên thiết bị). Chọn gói không tự trừ tiền, không tự gia hạn.</p>

        <div id="nsh-login-box" class="hidden" style="margin-top:18px;padding-top:16px;border-top:1px solid #ffffff18">
          <h2>Đăng nhập</h2>
          <div id="nsh-login-error" class="nsh-alert err hidden" role="alert"></div>
          <div class="nsh-form-grid" style="margin-top:10px">
            <div><label for="nsh-login-email">Email</label><input id="nsh-login-email" type="email" autocomplete="email"></div>
            <div><label for="nsh-login-pass">Mật khẩu</label><input id="nsh-login-pass" type="password" autocomplete="current-password"></div>
          </div>
          <div class="nsh-actions"><button class="nsh-btn" id="nsh-login-submit">Đăng nhập</button><button class="nsh-btn secondary" id="nsh-show-register">Quay lại đăng ký</button></div>
        </div>
      </article>

      <article class="nsh-card nsh-wide hidden" id="nsh-account-card">
        <p class="nsh-kicker">ĐÃ ĐĂNG NHẬP</p>
        <div class="nsh-acc-head">
          <div class="nsh-avatar" id="nsh-acc-avatar">N</div>
          <div><h2 id="nsh-acc-name" style="margin:0">—</h2><p class="nsh-tiny" id="nsh-acc-email" style="margin:2px 0 0">—</p></div>
        </div>
        <div class="nsh-kv"><span>Nhóm</span><b id="nsh-acc-audience">—</b></div>
        <div class="nsh-kv"><span id="nsh-acc-detail-label">Mục tiêu</span><b id="nsh-acc-detail">—</b></div>
        <div class="nsh-kv"><span>Gói hiện tại</span><b id="nsh-acc-plan">—</b></div>
        <div class="nsh-kv"><span>Số điện thoại</span><b id="nsh-acc-phone">—</b></div>
        <div class="nsh-kv" id="nsh-acc-class-row"><span>Lớp / trường</span><b id="nsh-acc-class">—</b></div>
        <div class="nsh-kv"><span>Ngày đăng ký</span><b id="nsh-acc-since">—</b></div>
        <div class="nsh-actions">
          <button class="nsh-btn secondary" onclick="switchTab('plans')">Xem chi tiết gói & dùng thử →</button>
          <button class="nsh-btn secondary" id="nsh-logout">Đăng xuất</button>
        </div>
      </article>

      <article class="nsh-card nsh-wide">
        <p class="nsh-kicker">BẢNG GÓI</p>
        <h2>Các gói đang áp dụng</h2>
        <p class="nsh-muted">Chọn nhanh ở đây, hoặc mở tab <b>Gói &amp; Phí</b> để dùng thử 3 ngày và tính chi phí. Chọn gói không tự trừ tiền.</p>
        <div class="nsh-rows" id="nsh-home-plans">
          <div class="nsh-plan-row" data-row="free"><div><b>Học sinh</b><small>Miễn phí — đầy đủ tính năng cốt lõi</small></div><button class="nsh-pick" data-pick="free">Chọn</button></div>
          <div class="nsh-plan-row" data-row="thuong"><div><b>Gói Thường</b><small>29.000đ/tháng · 129.000đ/năm — thêm báo cáo tuần</small></div><button class="nsh-pick" data-pick="thuong">Chọn</button></div>
          <div class="nsh-plan-row" data-row="nghiem-tuc"><div><b>Gói Nghiêm túc</b><small>79.000đ/tháng · 379.000đ/năm — thêm AI online & xuất dữ liệu</small></div><button class="nsh-pick" data-pick="nghiem-tuc">Chọn</button></div>
          <div class="nsh-plan-row" data-row="truong"><div><b>Gói Trường</b><small>5.000.000đ/năm — quản lý cả lớp</small></div><button class="nsh-pick" data-pick="truong">Chọn</button></div>
        </div>
        <p class="nsh-tiny" style="margin-top:12px">Đặt mua thật: gọi/Zalo <b>094 114 4975</b> · klocevin@gmail.com</p>
      </article>
    </div>

    <div class="nsh-grid">
      <article class="nsh-card"><h2>01 / Nhìn lại thói quen</h2><p class="nsh-muted">9 câu tự đánh giá, nhật ký 11 lý do chưa ngủ và 10 thẻ kiến thức.</p><div class="nsh-actions"><button class="nsh-btn secondary" onclick="switchTab('bedtime')">Khám phá →</button></div></article>
      <article class="nsh-card"><h2>02 / Thả lỏng tâm trí</h2><p class="nsh-muted">Viết ra điều còn vướng bận hoặc dành vài phút thực hành thở 4-7-8.</p><div class="nsh-actions"><button class="nsh-btn secondary" onclick="switchTab('journal')">Viết nhật ký</button><button class="nsh-btn secondary" onclick="switchTab('breath-lab')">Tập thở</button></div></article>
      <article class="nsh-card"><h2>03 / Xem tiến trình</h2><p class="nsh-muted">Thống kê từng đêm, lịch sử gần đây và báo cáo tuần từ dữ liệu của bạn.</p><div class="nsh-actions"><button class="nsh-btn secondary" onclick="switchTab('stats')">Xem thống kê →</button></div></article>
    </div>
    <div class="nsh-note nsh-muted"><b>Riêng tư ngay từ đầu.</b> Tài khoản đăng ký trên trang chủ được lưu qua Firebase (khi có mạng); khi mất mạng app vẫn chạy với dữ liệu lưu cục bộ. Không đo giấc ngủ sinh lý, không chẩn đoán hay điều trị mất ngủ.</div>
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
  window.NSH_HOME_REFRESH = refresh;
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
    if (window.NSH_ACCOUNT && typeof NSH_ACCOUNT.syncPlan === 'function') NSH_ACCOUNT.syncPlan(plan);
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

    renderCurrentPlan(eff);
    calc();
    proj();
  }

  /* ---------- bảng gói đang dùng ---------- */
  function renderCurrentPlan(eff) {
    const body = $('current-plan-body');
    if (!body || !S) return;
    const p = S.plan || {};
    const priceText = {
      free: '0₫ (miễn phí)',
      thuong: '29.000₫/tháng · 129.000₫/năm',
      'nghiem-tuc': '79.000₫/tháng · 379.000₫/năm',
      truong: '5.000.000₫/năm'
    };
    const fmt = (ms) => ms ? new Date(ms).toLocaleString('vi-VN') : '—';
    const rows = [
      ['Tên gói', `<strong class="text-amber-300">${PLAN_LABEL[eff.key]}</strong>${eff.trial ? ' <span class="text-emerald-300">(đang dùng thử)</span>' : ''}`],
      ['Nguồn', eff.trial ? 'Dùng thử 3 ngày · không cần thẻ' : (p.key && p.key !== 'free' ? 'Đã chọn trên thiết bị (mô phỏng)' : 'Mặc định')],
      ['Thời hạn', eff.trial
        ? `Hết hạn ${fmt(p.trialEnd)} · còn <span class="font-mono text-emerald-300">${fmtRemain(p.trialEnd - Date.now())}</span>`
        : (p.since && p.key !== 'free' ? `Áp dụng từ ${fmt(p.since)}` : 'Không giới hạn')],
      ['Giá niêm yết', priceText[eff.key] || '—'],
      ['Số tiền đã trừ', '<span class="text-emerald-300 font-bold">0₫ — chưa kết nối thanh toán</span>'],
      ['Mã gói', `<span class="font-mono text-slate-400">${eff.key}</span>`]
    ];
    body.innerHTML = rows.map(([k, v]) => `<tr>
        <td class="border border-slate-800 px-3 py-2 text-slate-400">${k}</td>
        <td class="border border-slate-800 px-3 py-2">${v}</td>
      </tr>`).join('');

    const ent = $('current-plan-entitlements');
    if (ent) {
      const items = [
        ['Tính năng cốt lõi', true],
        ['Báo cáo tuần', entitled('thuong')],
        ['AI online', entitled('nghiem-tuc')],
        ['Xuất dữ liệu chi tiết', entitled('nghiem-tuc')],
        ['Quản lý trường/lớp', entitled('truong')]
      ];
      ent.innerHTML = items.map(([label, ok]) =>
        `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold border ${ok ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' : 'bg-slate-800/60 text-slate-500 border-slate-700'}">
          <i class="fa-solid ${ok ? 'fa-check' : 'fa-lock'} mr-1"></i>${label}
        </span>`).join('');
    }
  }

  function tick() {
    ensureTrial();
    const cd = $('trial-countdown');
    if (cd && S && S.plan && S.plan.trialEnd && Date.now() < S.plan.trialEnd) cd.textContent = 'Còn ' + fmtRemain(S.plan.trialEnd - Date.now());
    if (document.getElementById('section-plans') && !document.getElementById('section-plans').classList.contains('hidden')) renderCurrentPlan(effective());
  }

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

/* =====================================================================
   Đăng ký / đăng nhập tài khoản + chọn gói ngay trên trang chủ
   - Tài khoản lưu cục bộ (localStorage), mật khẩu băm SHA-256 + salt.
   - Không gửi dữ liệu đi đâu; không tự thu tiền.
   ===================================================================== */
(() => {
  'use strict';

  const ACC_KEY = 'nhip-sinh-hoc.accounts';
  const SESSION_KEY = 'nhip-sinh-hoc.session';
  const PLAN_KEYS = ['free', 'thuong', 'nghiem-tuc', 'truong'];
  const PLAN_NAME = { free: 'Học sinh · Miễn phí', thuong: 'Gói Thường', 'nghiem-tuc': 'Gói Nghiêm túc', truong: 'Gói Trường' };
  const $ = (id) => document.getElementById(id);
  const vn = (s) => String(s == null ? '' : s).trim();

  let pickedPlan = 'free';
  let audience = 'student';

  const GOAL_LABEL = {
    'sleep-2230': 'Ngủ trước 22:30',
    'cut-1h': 'Giảm 1 giờ dùng máy',
    'study-first': 'Học xong mới dùng máy'
  };
  const FOR_LABEL = { self: 'Bản thân', child: 'Con em', family: 'Cả gia đình' };
  const AUD_LABEL = { student: '🎓 Học sinh', consumer: '👤 Người tiêu dùng' };

  const PLAN_TEXT = {
    student: {
      free: ['Học sinh', 'Miễn phí'],
      thuong: ['Gói Thường', '29.000đ/tháng · 129.000đ/năm'],
      'nghiem-tuc': ['Gói Nghiêm túc', '79.000đ/tháng · 379.000đ/năm'],
      truong: ['Gói Trường', '5.000.000đ/năm']
    },
    consumer: {
      free: ['Cơ bản', 'Miễn phí — tự theo dõi thói quen ngủ'],
      thuong: ['Gói Thường', '29.000đ/tháng · 129.000đ/năm — báo cáo cho 1 người'],
      'nghiem-tuc': ['Gói Nghiêm túc', '79.000đ/tháng · 379.000đ/năm — nhiều thành viên + AI online'],
      truong: ['Gói Trường', '5.000.000đ/năm — triển khai cho nhà trường']
    }
  };
  const ROW_DESC = {
    student: {
      free: 'Miễn phí — đầy đủ tính năng cốt lõi',
      thuong: '29.000đ/tháng · 129.000đ/năm — thêm báo cáo tuần',
      'nghiem-tuc': '79.000đ/tháng · 379.000đ/năm — thêm AI online & xuất dữ liệu',
      truong: '5.000.000đ/năm — quản lý cả lớp'
    },
    consumer: {
      free: 'Miễn phí — tự theo dõi thói quen ngủ',
      thuong: '29.000đ/tháng · 129.000đ/năm — báo cáo tuần gửi phụ huynh',
      'nghiem-tuc': '79.000đ/tháng · 379.000đ/năm — nhiều thành viên, AI online',
      truong: '5.000.000đ/năm — triển khai cho nhà trường'
    }
  };

  /* ---------------- lưu trữ ---------------- */
  function readAccounts() {
    try {
      const raw = localStorage.getItem(ACC_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (_) { return []; }
  }
  function writeAccounts(arr) {
    try { localStorage.setItem(ACC_KEY, JSON.stringify(arr.slice(0, 50))); return true; }
    catch (_) { return false; }
  }
  function sessionEmail() {
    try { return localStorage.getItem(SESSION_KEY) || ''; } catch (_) { return ''; }
  }
  function setSession(email) {
    try { email ? localStorage.setItem(SESSION_KEY, email) : localStorage.removeItem(SESSION_KEY); } catch (_) {}
  }
  function currentAccount() {
    const email = sessionEmail();
    if (!email) return null;
    return readAccounts().find((a) => a.email === email) || null;
  }

  /* ---------------- băm mật khẩu ---------------- */
  function randSalt() {
    const b = new Uint8Array(12);
    (window.crypto || {}).getRandomValues ? crypto.getRandomValues(b) : b.forEach((_, i) => { b[i] = (Math.random() * 256) | 0; });
    return Array.from(b).map((x) => x.toString(16).padStart(2, '0')).join('');
  }
  function fallbackHash(s) {           // chỉ dùng khi không có crypto.subtle
    let h1 = 0x811c9dc5, h2 = 0x1000193;
    for (let i = 0; i < s.length; i++) {
      h1 = (h1 ^ s.charCodeAt(i)) * 16777619 >>> 0;
      h2 = (h2 + s.charCodeAt(i) * (i + 7)) >>> 0;
    }
    return 'fb' + h1.toString(16) + h2.toString(16);
  }
  async function hashPass(pass, salt) {
    const text = salt + '::' + pass;
    try {
      if (window.crypto && crypto.subtle && crypto.subtle.digest) {
        const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
        return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
      }
    } catch (_) { /* rơi xuống hàm dự phòng */ }
    return fallbackHash(text);
  }

  /* ---------------- thông báo ---------------- */
  function showErr(id, msg) {
    const el = $(id);
    if (!el) return;
    if (msg) { el.textContent = msg; el.classList.remove('hidden'); }
    else { el.textContent = ''; el.classList.add('hidden'); }
  }
  function toast(t, b, k) {
    if (typeof window.showToast === 'function') window.showToast(t, b, k);
  }

  /* ---------------- áp dụng gói ---------------- */
  function applyPlan(key, opts) {
    if (typeof S === 'undefined' || !S) return;
    const plan = PLAN_KEYS.includes(key) ? key : 'free';
    S.plan = S.plan || {};
    const changed = S.plan.key !== plan;
    S.plan.key = plan;
    if (changed || !S.plan.since) S.plan.since = Date.now();
    if (!opts || opts.clearTrial !== false) { S.plan.trialStart = 0; S.plan.trialEnd = 0; S.plan.trialPlan = ''; }
    if (typeof save === 'function') save(true);
    render();
    if (window.NSH_PLAN && typeof NSH_PLAN.render === 'function') NSH_PLAN.render();
    if (typeof window.NSH_HOME_REFRESH === 'function') window.NSH_HOME_REFRESH();
  }

  /* ---------------- giao diện ---------------- */
  /* ---------- đổi giao diện theo nhóm đối tượng ---------- */
  function setAudience(next) {
    audience = next === 'consumer' ? 'consumer' : 'student';
    const isSt = audience === 'student';

    document.querySelectorAll('#nsh-audience button').forEach((b) => {
      b.setAttribute('aria-pressed', b.dataset.aud === audience ? 'true' : 'false');
    });
    const hint = $('nsh-aud-hint');
    if (hint) hint.textContent = isSt
      ? 'Dành cho học sinh THPT: theo dõi giờ ngủ, giới nghiêm 22:30, báo cáo gửi phụ huynh.'
      : 'Dành cho phụ huynh/cá nhân: theo dõi giờ ngủ của con hoặc của bạn, nhận báo cáo tuần.';

    if ($('nsh-lbl-name')) $('nsh-lbl-name').textContent = isSt ? 'Họ và tên học sinh *' : 'Họ và tên *';
    if ($('nsh-lbl-class')) $('nsh-lbl-class').textContent = isSt ? 'Lớp / trường' : 'Ghi chú (không bắt buộc)';
    const classEl = $('nsh-reg-class');
    if (classEl) classEl.placeholder = isSt ? '10/3 — THPT Nguyễn Đình Chiểu' : 'Ví dụ: phụ huynh học sinh 10/3';

    const stExtra = $('nsh-student-extra'), coExtra = $('nsh-consumer-extra');
    if (stExtra) stExtra.classList.toggle('hidden', !isSt);
    if (coExtra) coExtra.classList.toggle('hidden', isSt);
    if ($('nsh-lbl-plan')) $('nsh-lbl-plan').textContent = isSt ? 'Gói đăng ký' : 'Gói đăng ký (dùng cho gia đình / cá nhân)';
    if ($('nsh-plan-hint')) $('nsh-plan-hint').textContent = isSt
      ? 'Gói Trường dành cho nhà trường; phụ huynh thường chọn Gói Thường hoặc Nghiêm túc.'
      : 'Gói Trường chỉ dành cho nhà trường. Gói Thường / Nghiêm túc dùng cho phụ huynh, cá nhân.';

    document.querySelectorAll('#nsh-reg-plan .nsh-plan-opt').forEach((b) => {
      const key = b.dataset.plan;
      const pair = (PLAN_TEXT[audience] || PLAN_TEXT.student)[key] || [key, ''];
      const nameEl = b.querySelector('[data-pname]'), descEl = b.querySelector('[data-pdesc]');
      if (nameEl) nameEl.textContent = pair[0];
      if (descEl) descEl.textContent = pair[1];
      b.classList.toggle('hidden', !isSt && key === 'truong');
    });
    document.querySelectorAll('#nsh-home-plans .nsh-plan-row').forEach((row) => {
      const key = row.dataset.row;
      const small = row.querySelector('small');
      if (small) small.textContent = (ROW_DESC[audience] || ROW_DESC.student)[key] || '';
      row.classList.toggle('hidden', !isSt && key === 'truong');
    });
  }

  function markPlanButtons() {
    const logged = !!currentAccount();
    let activeKey = pickedPlan;
    if (typeof S !== 'undefined' && S && S.plan && S.plan.trialEnd && Date.now() < S.plan.trialEnd) activeKey = S.plan.trialPlan || activeKey;
    else if (logged && typeof S !== 'undefined' && S) activeKey = S.plan && S.plan.key ? S.plan.key : activeKey;
    document.querySelectorAll('#nsh-reg-plan .nsh-plan-opt').forEach((b) => {
      b.setAttribute('aria-pressed', b.dataset.plan === pickedPlan ? 'true' : 'false');
    });
    document.querySelectorAll('#nsh-home-plans .nsh-pick').forEach((b) => {
      const active = logged && b.dataset.pick === activeKey;
      b.setAttribute('data-active', active ? '1' : '0');
      b.textContent = active ? 'Đang dùng' : 'Chọn';
    });
  }

  function render() {
    const acc = currentAccount();
    const signCard = $('nsh-signup-card');
    const accCard = $('nsh-account-card');
    if (signCard) signCard.classList.toggle('hidden', !!acc);
    if (accCard) accCard.classList.toggle('hidden', !acc);

    if (acc) {
      pickedPlan = acc.plan || 'free';
      if (acc.audience) setAudience(acc.audience);
      const initial = (acc.name || 'N').trim().charAt(0).toUpperCase();
      if ($('nsh-acc-avatar')) $('nsh-acc-avatar').textContent = initial;
      if ($('nsh-acc-name')) $('nsh-acc-name').textContent = acc.name || 'Thành viên';
      if ($('nsh-acc-email')) $('nsh-acc-email').textContent = acc.email;
      let eff = acc.plan || 'free';
      let isTrial = false;
      if (typeof S !== 'undefined' && S && S.plan && S.plan.trialEnd && Date.now() < S.plan.trialEnd) {
        eff = S.plan.trialPlan || eff;
        isTrial = true;
      } else if (typeof S !== 'undefined' && S && S.plan && S.plan.key) {
        eff = S.plan.key;
      }
      const isSt = (acc.audience || 'student') === 'student';
      if ($('nsh-acc-audience')) $('nsh-acc-audience').textContent = AUD_LABEL[isSt ? 'student' : 'consumer'];
      if ($('nsh-acc-detail-label')) $('nsh-acc-detail-label').textContent = isSt ? 'Mục tiêu' : 'Dùng cho';
      if ($('nsh-acc-detail')) $('nsh-acc-detail').textContent = isSt
        ? (GOAL_LABEL[acc.goal] || '—')
        : (FOR_LABEL[acc.forWhom] || '—');
      const classRow = $('nsh-acc-class-row');
      if (classRow) classRow.classList.toggle('hidden', !isSt);
      if ($('nsh-acc-plan')) $('nsh-acc-plan').textContent = PLAN_NAME[eff] + (isTrial ? ' · đang dùng thử' : '');
      if ($('nsh-acc-phone')) $('nsh-acc-phone').textContent = acc.phone || '—';
      if ($('nsh-acc-class')) $('nsh-acc-class').textContent = acc.className || '—';
      if ($('nsh-acc-since')) $('nsh-acc-since').textContent = acc.createdAt ? new Date(acc.createdAt).toLocaleDateString('vi-VN') : '—';
    }
    markPlanButtons();
  }

  /* Gọi khi đổi gói ở tab "Gói & Phí" để trang chủ đồng bộ. */
  function cloudSavePlan(key) {
    const acc = currentAccount();
    const sm = window.SM_ACCT || {};
    if (acc && acc.cloud && typeof sm.firebaseReady === 'function' && sm.firebaseReady() && typeof sm.saveProfile === 'function') {
      sm.saveProfile({ plan: key, planLabel: PLAN_NAME[key], planSince: Date.now() });
    }
  }
  function syncPlan(key) {
    pickedPlan = PLAN_KEYS.includes(key) ? key : 'free';
    const acc = currentAccount();
    if (acc) {
      const accounts = readAccounts();
      const i = accounts.findIndex((a) => a.email === acc.email);
      if (i >= 0) { accounts[i].plan = pickedPlan; accounts[i].planSince = Date.now(); writeAccounts(accounts); }
    }
    cloudSavePlan(pickedPlan);
    render();
  }

  /* ---------------- đăng ký / đăng nhập ---------------- */
  async function register() {
    showErr('nsh-reg-error', '');
    const name = vn(($('nsh-reg-name') || {}).value);
    const email = vn(($('nsh-reg-email') || {}).value).toLowerCase();
    const phone = vn(($('nsh-reg-phone') || {}).value);
    const className = vn(($('nsh-reg-class') || {}).value);
    const goal = vn(($('nsh-reg-goal') || {}).value) || 'sleep-2230';
    const forWhom = vn(($('nsh-reg-for') || {}).value) || 'self';
    const aud = audience === 'consumer' ? 'consumer' : 'student';
    const plan = (aud === 'consumer' && pickedPlan === 'truong') ? 'thuong' : pickedPlan;
    const pass = ($('nsh-reg-pass') || {}).value || '';
    const pass2 = ($('nsh-reg-pass2') || {}).value || '';

    if (!name) return showErr('nsh-reg-error', 'Vui lòng nhập họ và tên.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return showErr('nsh-reg-error', 'Email chưa đúng định dạng.');
    if (phone && !/^[0-9+.\s-]{8,15}$/.test(phone)) return showErr('nsh-reg-error', 'Số điện thoại chưa hợp lệ.');
    if (pass.length < 6) return showErr('nsh-reg-error', 'Mật khẩu cần ít nhất 6 ký tự.');
    if (pass !== pass2) return showErr('nsh-reg-error', 'Hai mật khẩu không khớp.');

    const accounts = readAccounts();
    if (accounts.some((a) => a.email === email)) return showErr('nsh-reg-error', 'Email này đã đăng ký trên thiết bị. Hãy đăng nhập.');

    const btn = $('nsh-reg-submit');
    const busy = (on, text) => { if (btn) { btn.disabled = on; btn.textContent = on ? (text || 'Đang xử lý…') : 'Tạo tài khoản'; } };
    const sm = window.SM_ACCT || {};
    const cloud = typeof sm.firebaseReady === 'function' && sm.firebaseReady();
    busy(true);

    let acc;
    try {
      if (cloud) {
        // Tài khoản thật trên Firebase — Admin xem được ở trang quản trị.
        const fireUser = await sm.registerFirebase(name, email, pass);
        await sm.saveProfile({
          name, phone, className,
          audience: aud,
          goal: aud === 'student' ? goal : '',
          forWhom: aud === 'consumer' ? forWhom : '',
          plan,
          planLabel: PLAN_NAME[plan],
          signupAt: Date.now(),
          app: 'nhip-sinh-hoc'
        });
        acc = { email, name, phone, className, audience: aud, goal, forWhom, plan, uid: fireUser.uid, cloud: true, createdAt: Date.now() };
      } else {
        // Không có máy chủ: tài khoản lưu trên thiết bị, mật khẩu băm SHA-256.
        const salt = randSalt();
        const passHash = await hashPass(pass, salt);
        acc = { email, name, phone, className, audience: aud, goal, forWhom, plan, salt, passHash, cloud: false, createdAt: Date.now() };
      }
    } catch (e) {
      busy(false);
      const msg = (typeof sm.mapError === 'function' && sm.mapError(e)) || e.message || 'Không tạo được tài khoản. Thử lại sau.';
      showErr('nsh-reg-error', msg);
      return;
    } finally { busy(false); }

    accounts.unshift(acc);
    if (!writeAccounts(accounts)) return showErr('nsh-reg-error', 'Trình duyệt không cho lưu dữ liệu. Kiểm tra chế độ riêng tư / bộ nhớ thiết bị.');

    setSession(email);
    applyPlan(acc.plan);
    ['nsh-reg-name', 'nsh-reg-email', 'nsh-reg-phone', 'nsh-reg-class', 'nsh-reg-pass', 'nsh-reg-pass2'].forEach((id) => { const el = $(id); if (el) el.value = ''; });
    toast('Đã tạo tài khoản', `Chào ${name}! Gói ${PLAN_NAME[acc.plan]} đã áp dụng. ${cloud ? 'Hồ sơ đã lưu trên máy chủ.' : 'Tài khoản lưu trên thiết bị này.'}`, 'ok');
  }

  async function login() {
    showErr('nsh-login-error', '');
    const email = vn(($('nsh-login-email') || {}).value).toLowerCase();
    const pass = ($('nsh-login-pass') || {}).value || '';
    if (!email || !pass) return showErr('nsh-login-error', 'Nhập đủ email và mật khẩu.');

    const accounts = readAccounts();
    let acc = accounts.find((a) => a.email === email);
    const sm = window.SM_ACCT || {};
    const cloud = typeof sm.firebaseReady === 'function' && sm.firebaseReady();

    // Tài khoản cục bộ (có mật khẩu băm) kiểm tra trước — chạy được cả khi offline.
    if (acc && acc.passHash) {
      const hash = await hashPass(pass, acc.salt || '');
      if (hash !== acc.passHash) return showErr('nsh-login-error', 'Mật khẩu chưa đúng.');
      setSession(email);
      applyPlan(acc.plan || 'free');
      if ($('nsh-login-pass')) $('nsh-login-pass').value = '';
      toast('Đã đăng nhập', `Chào mừng trở lại, ${acc.name || 'bạn'}.`, 'ok');
      return;
    }

    if (cloud) {
      try {
        await sm.loginFirebase(email, pass);
        const prof = (await sm.readProfile()) || {};
        const plan = PLAN_KEYS.includes(prof.plan) ? prof.plan : ((acc && acc.plan) || 'free');
        const aud = prof.audience === 'consumer' ? 'consumer' : 'student';
        if (acc) {
          acc.plan = plan; acc.cloud = true;
          acc.audience = aud;
          if (prof.goal) acc.goal = prof.goal;
          if (prof.forWhom) acc.forWhom = prof.forWhom;
          writeAccounts(accounts);
        } else {
          acc = {
            email, name: prof.name || email.split('@')[0], phone: prof.phone || '', className: prof.className || '',
            audience: aud, goal: prof.goal || 'sleep-2230', forWhom: prof.forWhom || 'self',
            plan, cloud: true, createdAt: prof.createdAt || Date.now()
          };
          accounts.unshift(acc); writeAccounts(accounts);
        }
        setSession(email);
        applyPlan(plan);
        if ($('nsh-login-pass')) $('nsh-login-pass').value = '';
        toast('Đã đăng nhập', `Chào mừng trở lại, ${acc.name || 'bạn'}.`, 'ok');
        return;
      } catch (e) {
        const msg = (typeof sm.mapError === 'function' && sm.mapError(e)) || e.message || 'Đăng nhập chưa được.';
        return showErr('nsh-login-error', msg);
      }
    }

    if (!acc) return showErr('nsh-login-error', 'Không tìm thấy tài khoản trên thiết bị này. Hãy đăng ký trước.');
    return showErr('nsh-login-error', 'Mật khẩu chưa đúng.');
  }

  function logout() {
    setSession('');
    applyPlan('free');
    toast('Đã đăng xuất', 'Tiến trình vẫn được giữ trên thiết bị.', 'info');
  }

  /* ---------------- chọn gói ---------------- */
  function selectPlan(key) {
    if (!PLAN_KEYS.includes(key)) return;
    if (key === 'truong' && audience === 'consumer') {
      toast('Gói Trường dành cho nhà trường', 'Phụ huynh/cá nhân chọn Gói Thường hoặc Gói Nghiêm túc. Muốn triển khai cho trường, gọi 094 114 4975.', 'info');
      return;
    }
    pickedPlan = key;
    const acc = currentAccount();
    if (!acc) {
      markPlanButtons();
      showErr('nsh-reg-error', '');
      const card = $('nsh-signup-card');
      if (card && card.scrollIntoView) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const nameEl = $('nsh-reg-name');
      if (nameEl && nameEl.focus) setTimeout(() => nameEl.focus(), 350);
      toast('Đã chọn ' + PLAN_NAME[key], 'Điền thông tin để tạo tài khoản — gói sẽ được áp dụng ngay sau khi đăng ký.', 'info');
      return;
    }
    const accounts = readAccounts();
    const i = accounts.findIndex((a) => a.email === acc.email);
    if (i >= 0) { accounts[i].plan = key; accounts[i].planSince = Date.now(); writeAccounts(accounts); }
    cloudSavePlan(key);
    applyPlan(key);
    toast('Đã đổi gói', `${PLAN_NAME[key]} đã áp dụng trên thiết bị này. Không có khoản phí nào bị trừ.`, 'ok');
  }

  /* ---------------- gắn sự kiện ---------------- */
  function bind() {
    const on = (id, ev, fn) => { const el = $(id); if (el) el.addEventListener(ev, fn); };

    // Đưa khối đăng ký + bảng gói lên ngay dưới phần giới thiệu của trang chủ.
    const section = $('nsh-signup-section');
    const hero = document.querySelector('.nsh-hero');
    if (section && hero && section.previousElementSibling !== hero) hero.after(section);

    document.querySelectorAll('#nsh-reg-plan .nsh-plan-opt').forEach((b) => {
      b.addEventListener('click', () => { pickedPlan = b.dataset.plan; markPlanButtons(); showErr('nsh-reg-error', ''); });
    });
    document.querySelectorAll('#nsh-audience button').forEach((b) => {
      b.addEventListener('click', () => {
        setAudience(b.dataset.aud);
        if (audience === 'consumer' && pickedPlan === 'truong') pickedPlan = 'thuong';
        markPlanButtons();
        showErr('nsh-reg-error', '');
      });
    });
    document.querySelectorAll('#nsh-home-plans .nsh-pick').forEach((b) => {
      b.addEventListener('click', () => selectPlan(b.dataset.pick));
    });

    on('nsh-reg-submit', 'click', register);
    on('nsh-login-submit', 'click', login);
    on('nsh-logout', 'click', logout);
    on('nsh-show-login', 'click', () => {
      const box = $('nsh-login-box');
      if (box) box.classList.remove('hidden');
      showErr('nsh-reg-error', '');
      const el = $('nsh-login-email'); if (el) el.focus();
    });
    on('nsh-show-register', 'click', () => {
      const box = $('nsh-login-box');
      if (box) box.classList.add('hidden');
      showErr('nsh-login-error', '');
    });
    ['nsh-reg-pass', 'nsh-reg-pass2', 'nsh-login-pass'].forEach((id) => {
      on(id, 'keydown', (e) => { if (e.key === 'Enter') { id.startsWith('nsh-login') ? login() : register(); } });
    });

    setAudience(audience);
    render();
    const acc = currentAccount();
    if (acc) { pickedPlan = acc.plan || 'free'; applyPlan(acc.plan || 'free', { clearTrial: false }); render(); }
  }

  window.NSH_ACCOUNT = { register, login, logout, selectPlan, render, syncPlan, current: currentAccount };
  document.addEventListener('DOMContentLoaded', bind);
  if (document.readyState !== 'loading') bind();
})();
