
# 🎓 Website Giảng Viên - TS. Nguyễn Hoài Đức

Đây là mã nguồn website cá nhân chuyên nghiệp dành cho giảng viên/nhà nghiên cứu, được xây dựng với công nghệ web hiện đại. Website giúp giới thiệu bản thân, chia sẻ các khóa học, công trình nghiên cứu và kết nối với sinh viên, đối tác.

## 🚀 Tính Năng Chính

*   **Giao Diện Hiện Đại (UI/UX)**: Thiết kế theo phong cách Material Design 3, tối giản, sang trọng và tương thích hoàn toàn trên mọi thiết bị (Responsive).
*   **Đa Ngôn Ngữ (i18n)**: Hỗ trợ chuyển đổi mượt mà giữa Tiếng Việt (VI) và Tiếng Anh (EN).
*   **Hệ Thống Admin**: Quản lý nội dung (CMS) đơn giản để cập nhật bài viết, khóa học.
*   **Các Trang Nội Dung**:
    *   **Trang Chủ**: Tổng quan và điểm nhấn.
    *   **Giới Thiệu**: Tiểu sử, triết lý giảng dạy.
    *   **Giảng Dạy**: Các môn học và lĩnh vực chuyên môn.
    *   **Nghiên Cứu**: Danh sách công bố khoa học, dự án.
    *   **Khóa Học**: Lịch khai giảng offline/online.
    *   **Hợp Tác**: Mạng lưới đối tác.
    *   **Liên Hệ**: Form liên hệ và thông tin kết nối.

## 🛠 Công Nghệ Sử Dụng

*   **Frontend Framework**: [Next.js 16](https://nextjs.org) (App Router).
*   **Ngôn Ngữ**: TypeScript.
*   **Styling**: Vanilla CSS (CSS Modules) với biến toàn cục (CSS Variables) - không phụ thuộc thư viện thứ 3 nặng nề.
*   **Database**:
    *   *Development/Demo*: SQLite (File `dev.db`).
    *   *Production*: PostgreSQL (Vercel Postgres / Neon).
*   **ORM**: Prisma.
*   **Authentication**: NextAuth.js (v5 Beta) - Xác thực người dùng (Credential Provider).
*   **Deployment**: Vercel.

## 📦 Cài Đặt & Chạy Local

Để chạy dự án này trên máy tính cá nhân của bạn:

1.  **Clone dự án**:
    ```bash
    git clone https://github.com/edwardnguyen-gg/Ducnh-website.git
    cd lecturer-website
    ```

2.  **Cài đặt thư viện**:
    ```bash
    npm install
    # hoặc
    yarn install
    ```

3.  **Khởi tạo Database (SQLite)**:
    ```bash
    npx prisma generate
    npx prisma db push
    ```

4.  **Chạy server**:
    ```bash
    npm run dev
    ```

    Website sẽ chạy tại: [http://localhost:3000](http://localhost:3000)

## 🔐 Tài Khoản Admin (Mặc Định)

Để vào trang quản trị `/admin`, sử dụng tài khoản mẫu (được cấu hình trong `src/auth.ts`):

*   **Email**: `admin@lecturer.com`
*   **Password**: `admin123`

*(Lưu ý: Đây là tài khoản giả lập để chạy thử nghiệm. Khi lên production thực tế, cần kết nối Database thật và bỏ logic Mock user)*

## 🌐 Triển Khai (Deploy)

Dự án được tối ưu để triển khai trên **Vercel**.

Xem hướng dẫn chi tiết tại file: [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📁 Cấu Trúc Thư Mục

*   `src/app`: Chứa các trang (Pages) của ứng dụng (Next.js App Router).
*   `src/components`: Các thành phần giao diện tái sử dụng (Header, Footer, Cards...).
*   `src/constants`: Chứa dữ liệu tĩnh và file dịch thuật (`translations.ts`).
*   `src/contexts`: React Context (như `LanguageContext`).
*   `prisma`: Schema database và cấu hình Prisma.
*   `public`: Chứa hình ảnh, fonts, file tĩnh (cờ, logo...).

## ✍️ Tác Giả & Bản Quyền

**TS. Nguyễn Hoài Đức**
© 2025 All Rights Reserved.

---
*Dự án được phát triển với sự hỗ trợ của AI Assistant.*
