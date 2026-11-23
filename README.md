# Nhịp Sinh Học — bản web độc lập

Web app riêng cho dự án **Nhịp Sinh Học / SLEEPMATE 2026**, tách hoàn toàn khỏi bản SleepMate Pro đang chạy.
Dữ liệu lưu cục bộ trên máy người dùng (localStorage với tiền tố `nhip-sinh-hoc.`), không nhập dữ liệu từ bản cũ.

## Đang chạy ở đâu

- GitHub Pages: https://klocevin-ai.github.io/nhip-sinh-hoc-web/
- Bản Firebase Hosting (site riêng): https://nhip-sinh-hoc-2026.web.app

## Có gì trong app

- Quản lý thời gian dùng máy, giới nghiêm, thức khuya, lịch tuần, hồ sơ giờ ngủ.
- Thống kê đêm, nhật ký, thẻ kiến thức, thở 4-7-8, âm thanh sóng não.
- Trợ lý quy tắc offline; tuỳ chọn nối AI online.
- PWA: cài vào màn hình chính, chạy offline.

## Tab "Gói & Phí"

| Gói | Giá | Mở khóa thêm |
|---|---|---|
| Học sinh | Miễn phí | Toàn bộ tính năng cốt lõi + trợ lý offline |
| Gói Thường | 29.000₫/tháng · 129.000₫/năm | In/lưu báo cáo tuần |
| Gói Nghiêm túc | 79.000₫/tháng · 379.000₫/năm | Trợ lý AI online + xuất dữ liệu chi tiết |
| Gói Trường | 5.000.000₫/năm | Dự kiến bảng điều khiển giáo viên |

- **Dùng thử 3 ngày**: bấm trong tab Gói & Phí, không cần thẻ, hết hạn tự về gói miễn phí.
- **Máy tính chi phí**: chọn gói, kỳ hạn, số người dùng/trường.
- **Kịch bản 5 năm**: bảng dự tính gốc trong báo cáo (50 → 190 → 460 → 800 → 1.150 triệu đồng).

## Đặt mua gói

- Điện thoại / Zalo: **0941144975**
- Email: klocevin@gmail.com
- Tác giả: Huỳnh Phúc Khánh Lộc · Lớp 10/3 · THPT Nguyễn Đình Chiểu

> Trung thực: đây là mô phỏng giá theo bài báo cáo. App **chưa kết nối cổng thanh toán** và không tự trừ tiền; chọn gói chỉ bật/tắt quyền lợi trên thiết bị.

## Chạy thử trên máy

```powershell
node server.cjs
```

Mở http://127.0.0.1:4173

## Cập nhật bản live

```powershell
git add -A
git commit -m "cap nhat noi dung"
git push
```

GitHub Pages tự build lại sau khoảng 1 phút. Nếu service worker còn giữ bản cũ, tăng `CACHE` trong `sw.js` (ví dụ `v2` → `v3`).
