
# Hướng Dẫn Triển Khai (Deploy) Website

Để đưa website lên internet miễn phí và nhanh chóng nhất trong giai đoạn thử nghiệm, chúng ta sẽ sử dụng **Vercel** - nền tảng hosting tối ưu nhất cho Next.js.

## Bước 1: Đẩy mã nguồn lên GitHub
Vì bạn đang chạy dự án trên máy cá nhân, bạn cần đưa nó lên một kho lưu trữ online (GitHub) để Vercel có thể truy cập.

1.  Đăng nhập vào [GitHub](https://github.com).
2.  Tạo một **Repository** mới (đặt tên là `lecturer-website` chẳng hạn).
    *   *Lưu ý: Không cần tích chọn "Initialize with README" hay .gitignore vì ta đã có sẵn.*
3.  Quay lại terminal (hoặc VS Code) của bạn và chạy các lệnh sau để liên kết:

```bash
git remote add origin https://github.com/<USERNAME_CUA_BAN>/lecturer-website.git
git branch -M main
git push -u origin main
```
*(Thay `<USERNAME_CUA_BAN>` bằng tên tài khoản GitHub của bạn)*

## Bước 2: Triển khai trên Vercel
1.  Truy cập [Vercel.com](https://vercel.com) và đăng ký/đăng nhập bằng tài khoản GitHub của bạn.
2.  Bấm nút **"Add New..."** -> **"Project"**.
3.  Bạn sẽ thấy repository `lecturer-website` vừa tạo. Bấm nút **"Import"**.
4.  Ở màn hình cấu hình ("Configure Project"):
    *   **Framework Preset**: Next.js (Mặc định).
    *   **Environment Variables**: Bấm mở rộng phần này và thêm các biến môi trường nếu cần.
        *   Với dự án hiện tại đang dùng SQLite và mock data, bạn **tạm thời chưa cần** cấu hình database phức tạp.
        *   Thêm biến: `AUTH_SECRET` với giá trị bất kỳ (ví dụ: `secret-key-deploy-123`).
5.  Bấm **"Deploy"**.

## Lưu Ý Quan Trọng Về Database (SQLite)
Hiện tại dự án đang dùng **SQLite** (file `dev.db` nằm trên máy bạn).
*   **Vấn đề**: Khi deploy lên Vercel, hệ thống file là "read-only" (không ghi được) hoặc sẽ bị reset sau mỗi lần deploy.
*   **Hiện trạng**: Website **vẫn sẽ chạy tốt** để xem nội dung (Trang chủ, Giới thiệu, v.v...) vì chúng ta đang dùng dữ liệu tĩnh (hardcoded).
*   **Chức năng Admin**: Bạn có thể đăng nhập được, nhưng nếu bạn thử thêm/sửa bài viết, dữ liệu **sẽ không được lưu lại viễn viễn** hoặc có thể gây lỗi.
*   **Giải pháp lâu dài**: Khi bạn muốn website hoạt động chính thức (có Admin đăng bài thật), chúng ta sẽ cần chuyển Database sang **Vercel Postgres** hoặc **Neon** (đều có gói miễn phí). Việc này chỉ cần thay đổi cấu hình kết nối, không cần viết lại code.

Chúc mừng! Website của bạn sẽ chạy tại địa chỉ dạng: `https://lecturer-website.vercel.app`.
