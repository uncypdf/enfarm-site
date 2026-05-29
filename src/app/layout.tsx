import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "(주)엔팜 | 면역이 방역이다!",
  description: "주식회사 엔팜",
  icons: {

    icon: "/favicon.png",

  },
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
