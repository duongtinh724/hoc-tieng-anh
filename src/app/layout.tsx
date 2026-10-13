import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiếng Anh Cùng Huy",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("tieng-anh-theme")==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
