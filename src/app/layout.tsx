import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ENFARM | Livestock Biotechnology",
  description: "축산 생산성 향상을 위한 기능성 바이오 소재 솔루션 기업, 엔팜",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
