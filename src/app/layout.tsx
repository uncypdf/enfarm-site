import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
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
      <body className="bg-white text-gray-900">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <a href="/">
              <Image
                src="/logo.png"
                alt="엔팜"
                width={100}
                height={34}
                priority
              />
            </a>

            <nav className="hidden items-center gap-10 text-lg font-semibold text-gray-700 md:flex">
              <a href="/about" className="hover:text-[#008000]">
                회사소개
              </a>

              <a href="/technology" className="hover:text-[#008000]">
                기술/특징
              </a>

              <a href="/products" className="hover:text-[#008000]">
                제품소개
              </a>

              <a href="/analysis" className="hover:text-[#008000]">
                분석/실증
              </a>

              <a href="/resources" className="hover:text-[#008000]">
                자료실
              </a>

              <a href="/branches" className="hover:text-[#008000]">
                지사 및 대리점
              </a>
            </nav>
          </div>
        </header>

        {/* Main */}
        {children}

        {/* Footer */}
        <footer className="mt-24 bg-[#0f3d2e] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h3 className="text-2xl font-bold">(주)엔팜</h3>

            <div className="mt-8 space-y-2 text-gray-300">
              <p>
                경기도 평택시 청북읍 청북중앙로 315-5
              </p>

              <p>
                전화 : 031-683-2051
              </p>

              <p>
                팩스 : 031-683-2053
              </p>

              <p>
                제품문의 : 010-5232-3103
              </p>

              <p>
                E-mail : nfarm3103@naver.com
              </p>
            </div>

            <div className="mt-10 border-t border-white/20 pt-6 text-sm text-gray-400">
              Copyright © ENFARM. All Rights Reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}