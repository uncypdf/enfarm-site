import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://enfarm.co.kr"),
  title: {
    default: "(주)엔팜 | 면역이 방역이다!",
    template: "%s | (주)엔팜",
  },
  description:
    "H-LMP 저분자 단백질 기반의 축산 바이오 솔루션 기업. PED·PRRS 예방을 위한 아미노에프, 코디팜, 에그밀 및 STOP 2P 프로그램을 제공합니다.",
  keywords: [
    "엔팜",
    "ENFARM",
    "H-LMP",
    "저분자 단백질",
    "양돈",
    "축산",
    "사료첨가제",
    "아미노에프",
    "코디팜",
    "에그밀",
    "PRRS",
    "PED",
    "STOP 2P",
  ],
  openGraph: {
    title: "(주)엔팜 | 면역이 방역이다!",
    description:
      "H-LMP 저분자 단백질 기반 축산 바이오 솔루션 전문기업",
    url: "https://enfarm.co.kr",
    siteName: "ENFARM",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ENFARM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "(주)엔팜 | 면역이 방역이다!",
    description:
      "H-LMP 저분자 단백질 기반 축산 바이오 솔루션 전문기업",
    images: ["/og-image.png"],
  },
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YE65M0GKQ9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YE65M0GKQ9');
          `}
        </Script>
      </head>
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
                제품안내
              </a>

              <a href="/analysis" className="hover:text-[#008000]">
                분석/실증
              </a>

              <a href="/resources" className="hover:text-[#008000]">
                자료실
              </a>

              <a href="/branches" className="hover:text-[#008000]">
                문의하기
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