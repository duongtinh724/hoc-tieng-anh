import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bài học tiếng Anh 30 ngày",
  description:
    "Chương trình học tiếng Anh 30 ngày — 30 phút mỗi ngày, từ số 0.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
