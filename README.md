# hoc-tieng-anh

Ứng dụng học tiếng Anh 30 ngày — 30 phút mỗi ngày, tiến độ lưu trên trình duyệt.

> **AI / Agent:** Đọc [`AGENTS.md`](./AGENTS.md) và [`CURRICULUM-PLAN.md`](./CURRICULUM-PLAN.md) trước khi sửa code hoặc thêm nội dung bài học.

## Công nghệ

- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- CSS thuần (giữ giao diện bản HTML cũ)
- Dữ liệu bài học tách riêng trong `src/data/days.json`

## Cấu trúc thư mục

```
src/
├── app/                 # Layout, trang chính, CSS global
├── components/
│   ├── layout/          # Header trang
│   ├── stats/           # Thống kê, thanh tiến độ
│   ├── navigation/      # Chọn tuần / ngày
│   ├── lesson/          # Nội dung bài học
│   └── ui/              # Pill, Callout
├── data/                # days.json + helper
├── hooks/               # useLessonState (localStorage)
├── lib/                 # constants, speech
└── types/               # TypeScript types
legacy/
└── index.html           # Bản HTML gốc (tham khảo)
```

## Chạy local

Yêu cầu **Node.js >= 20.9**.

```bash
nvm use          # dùng Node 20 (xem .nvmrc)
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Deploy lên Vercel

### Cách 1: Import từ GitHub (khuyên dùng)

1. **Push code lên GitHub**
   ```bash
   git add .
   git commit -m "Migrate to Next.js"
   git push origin main
   ```

2. **Đăng nhập Vercel**
   - Vào [vercel.com](https://vercel.com) → Sign in bằng GitHub

3. **Import project**
   - **Add New** → **Project**
   - Chọn repo `hoc-tieng-anh`
   - Vercel tự nhận **Next.js** — không cần chỉnh Build Settings

4. **Deploy**
   - Bấm **Deploy**
   - Sau ~1–2 phút có URL dạng `hoc-tieng-anh.vercel.app`

5. **Auto deploy**
   - Mỗi lần push lên `main`, Vercel tự build và deploy lại

### Cách 2: Deploy bằng Vercel CLI

```bash
npm i -g vercel
vercel login
vercel          # lần đầu: hỏi link project
vercel --prod     # deploy production
```

### Cấu hình Vercel (bắt buộc kiểm tra)

| Setting | Giá trị |
|---------|---------|
| Framework Preset | **Next.js** |
| Build Command | `next build` |
| Output Directory | **để trống** (không đặt `public`) |
| Install Command | `npm install` |
| Node.js Version | 20.x |

> **Lỗi thường gặp:** `No Output Directory named "public" found`  
> Nguyên nhân: project cũ deploy HTML tĩnh, Vercel vẫn cấu hình Output Directory = `public`.  
> Cách sửa: **Settings → General → Build & Development Settings** → Framework Preset = **Next.js** → tắt override **Output Directory** (để trống) → **Redeploy**.

### Custom domain (tùy chọn)

1. Vercel Dashboard → Project → **Settings** → **Domains**
2. Thêm domain (vd. `hoctienganh.example.com`)
3. Cập nhật DNS theo hướng dẫn Vercel

### Lưu ý sau khi deploy

- **Tiến độ học** vẫn lưu `localStorage` trên từng trình duyệt/thiết bị (giống bản HTML).
- **Speech API** (nút «Nghe») cần trình duyệt hỗ trợ `speechSynthesis`.
- Bản HTML cũ nằm trong `legacy/index.html` để tham khảo.

## Scripts

| Lệnh | Mô tả |
|------|--------|
| `npm run dev` | Chạy dev server |
| `npm run build` | Build production |
| `npm run start` | Chạy bản build |
| `npm run lint` | Kiểm tra ESLint |
