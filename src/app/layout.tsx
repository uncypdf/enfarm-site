import type { Metadata } from "next";
import "./globals.css";

  export const metadata = {
    title: "(주)엔팜 | 면역이 방역이다!",
    description:
      "H-LMP 저분자 단백질, 기능성 사료 및 축산 바이오 솔루션 전문기업",
    keywords: [
      "엔팜",
      "H-LMP",
      "저분자단백질",
      "양돈",
      "축산",
      "사료첨가제",
      "에그밀",
      "PRRS",
      "PED",
    ],
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
