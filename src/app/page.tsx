import Image from "next/image";
const products = [
  {
    title: "아미노 에프",
    subtitle: "H-LMP 핵철함유 저분자단백질",
    desc: "면역항체 형성의 필수 원료로 PED·PRRS 예방과 초기 회복 관리를 지원합니다.",
  },
  {
    title: "코디팜",
    subtitle: "천연 미네랄 함유 H-LMP",
    desc: "모돈의 무유증 및 유사산 예방, 번식성적 개선을 위한 기능성 솔루션입니다.",
  },
  {
    title: "에그밀",
    subtitle: "100% 통계란 건조분말",
    desc: "높은 기호성과 영양가를 바탕으로 증체와 골격 형성을 지원합니다.",
  },
];

const business = [
  {
    title: "H-LMP 핵철함유 저분자단백질",
    desc: "면역항체 형성의 필수 원료\nPED/PRRS 예방, 조기회복",
  },
  {
    title: "천연 미네랄함유 H-LMP",
    desc: "모돈의 무유증 및 유사산 예방\n번식성적 개선",
  },
  {
    title: "사료/첨가제",
    desc: "STOP 2P 전용사료 공급\n악취감소 전용 발효사료 공급",
  },
  {
    title: "에그밀",
    desc: "100% 통계란 건조분말\n높은 기호성과 영양, 가격 만족",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center">
            <Image
              src="/logo.png"
              alt="엔팜 로고"
              width={100}
              height={34}
              priority
            />
          </a>

          <nav className="hidden items-center gap-10 text-lg font-semibold text-gray-700 md:flex">
            <a href="#about" className="hover:text-[#008000]">회사소개</a>
            <a href="#business" className="hover:text-[#008000]">사업영역</a>
            <a href="#products" className="hover:text-[#008000]">제품소개</a>
            <a href="#contact" className="hover:text-[#008000]">문의하기</a>
          </nav>
        </div>
      </header>

      {/* Main Visual */}
      <section className="relative overflow-hidden bg-[#f5f7f2]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="mb-5 text-lg font-bold text-[#008000]">
              (주)엔팜
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              면역이
              <br />
              방역이다!
            </h1>

            <p className="mt-8 text-xl font-semibold leading-8 text-gray-700">
              건강한 돼지가 가장 강력한 방역입니다.
            </p>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              엔팜은 기능성 바이오 소재와 단백질 원료 솔루션을 통해
              축산 생산성 향상에 기여합니다.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#products"
                className="rounded-md bg-[#008000] px-7 py-3 font-bold text-white"
              >
                제품 보기
              </a>
              <a
                href="#contact"
                className="rounded-md border border-[#008000] px-7 py-3 font-bold text-[#008000]"
              >
                문의하기
              </a>
            </div>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-3xl">
            <Image
              src="/main1.png"
              alt="엔팜 메인 이미지"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#008000]">
                About ENFARM
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight">
                축산 현장의 문제를
                <br />
                소재와 영양으로 해결합니다.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-gray-600">
              <p>
                엔팜은 양돈 농가와 축산 현장의 생산성 향상을 위해
                기능성 단백질 소재, 사료첨가제, 영양 솔루션을 제공합니다.
              </p>
              <p>
                면역, 성장, 기호성, 번식성적 개선을 중심으로 농장의
                실질적인 문제 해결을 목표로 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business */}
      <section id="business" className="bg-[#f7f7f7] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#008000]">
              Business
            </p>
            <h2 className="mt-4 text-4xl font-black">
              엔팜 주요 사업영역
            </h2>
            <p className="mt-5 text-gray-600">
              면역과 생산성을 위한 축산 바이오 솔루션
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {business.map((item, index) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-white text-sm text-gray-400">
                  이미지 {index + 1}
                </div>

                <h3 className="mt-8 text-xl font-black leading-snug">
                  {item.title}
                </h3>

                <p className="mt-5 whitespace-pre-line text-lg font-medium leading-8 text-gray-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#008000]">
              Products
            </p>
            <h2 className="mt-4 text-4xl font-black">제품소개</h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="flex h-64 items-center justify-center bg-[#f2f2f2] text-gray-400">
                  제품 이미지
                </div>

                <div className="p-8">
                  <p className="text-sm font-bold text-[#008000]">
                    {product.subtitle}
                  </p>
                  <h3 className="mt-3 text-3xl font-black">
                    {product.title}
                  </h3>
                  <p className="mt-5 leading-7 text-gray-600">
                    {product.desc}
                  </p>
                  <a
                    href="#contact"
                    className="mt-8 inline-block font-bold text-[#008000]"
                  >
                    제품 문의 →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section className="bg-[#008000] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-bold text-white/80">
              Product Inquiry
            </p>
            <h2 className="mt-3 text-4xl font-black">
              제품 상담이 필요하신가요?
            </h2>
            <p className="mt-5 text-white/80">
              제품 적용 목적과 농장 상황에 맞는 솔루션을 안내해드립니다.
            </p>
          </div>

          <a
            href="tel:010-5232-3103"
            className="rounded-md bg-white px-8 py-4 font-black text-[#008000]"
          >
            010-5232-3103
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#008000]">
                Contact
              </p>
              <h2 className="mt-4 text-4xl font-black">문의하기</h2>
              <p className="mt-5 leading-7 text-gray-600">
                제품 문의, 공급 상담, 기술 자료 요청은 아래 연락처로 문의해 주세요.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f7f7] p-8">
              <div className="space-y-5">
                <div>
                  <p className="font-bold">회사명</p>
                  <p className="mt-1 text-gray-600">(주)엔팜</p>
                </div>

                <div>
                  <p className="font-bold">주소</p>
                  <p className="mt-1 text-gray-600">
                    경기도 평택시 청북읍 청북중앙로 315-5
                  </p>
                </div>

                <div>
                  <p className="font-bold">대표전화</p>
                  <p className="mt-1 text-gray-600">031-683-2051</p>
                </div>

                <div>
                  <p className="font-bold">팩스</p>
                  <p className="mt-1 text-gray-600">031-683-2053</p>
                </div>

                <div>
                  <p className="font-bold">제품문의</p>
                  <p className="mt-1 text-gray-600">010-5232-3103</p>
                </div>

                <div>
                  <p className="font-bold">E-mail</p>
                  <p className="mt-1 text-gray-600">nfarm3103@naver.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f3d2e] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">(주)엔팜</h3>

              <p className="mt-3 text-lg font-medium text-green-300">
                면역이 방역이다!
              </p>

              <p className="mt-4 max-w-md leading-relaxed text-gray-300">
                엔팜은 기능성 바이오 소재와 단백질 원료 솔루션을 통해
                건강한 축산과 지속가능한 생산성 향상에 기여합니다.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Contact</h4>

              <div className="mt-4 space-y-4 text-gray-300">
                <div>
                  <p className="font-medium text-white">주소</p>
                  <p>경기도 평택시 청북읍 청북중앙로 315-5</p>
                </div>

                <div>
                  <p className="font-medium text-white">대표전화</p>
                  <p>031-683-2051</p>
                </div>

                <div>
                  <p className="font-medium text-white">팩스</p>
                  <p>031-683-2053</p>
                </div>

                <div>
                  <p className="font-medium text-white">제품문의</p>
                  <p>010-5232-3103</p>
                </div>

                <div>
                  <p className="font-medium text-white">E-mail</p>
                  <p>nfarm3103@naver.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/20 pt-6 text-sm text-gray-400">
            <p>(주)엔팜</p>
            <p className="mt-1">
              경기도 평택시 청북읍 청북중앙로 315-5
            </p>
            <p className="mt-1">
              대표전화 031-683-2051 | 팩스 031-683-2053
            </p>
            <p className="mt-1">
              제품문의 010-5232-3103 | E-mail nfarm3103@naver.com
            </p>

            <p className="mt-4">
              © 2026 ENFARM Co., Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
