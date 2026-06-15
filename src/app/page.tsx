import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "아미노에프",
    image: "/pd1.png",
    desc: "H-LMP 저분자 단백질 기반 면역 증진 솔루션",
    target: "면역력 강화 및 질병 예방",
  },
  {
    title: "코디팜",
    image: "/pd2.png",
    desc: "천연 미네랄과 영양소를 함유한 맞춤형 사료첨가제",
    target: "생산성 향상 및 번식 성적 개선",
  },
  {
    title: "에그밀",
    image: "/pd3.png",
    desc: "100% 통계란 건조분말로 기호성 및 영양 강화",
    target: "증체 및 골격 형성 지원",
  },
];

const solutions = [
  {
    title: "H-LMP 저분자 단백질",
    desc: "고분자 단백질을 저분자 펩타이드로 분해하여 면역 활성화 및 흡수율을 극대화합니다.",
  },
  {
    title: "STOP 2P Program",
    desc: "악취 저감과 환경 개선을 위한 전용 사료 및 발효 솔루션을 제공합니다.",
  },
  {
    title: "모돈·자돈 맞춤 적용",
    desc: "사육 단계별 맞춤형 솔루션으로 건강한 돼지 육성을 지원합니다.",
  },
  {
    title: "분석·실증 기반 솔루션",
    desc: "과학적 분석과 현장 실증을 통해 신뢰할 수 있는 제품과 서비스를 제공합니다.",
  },
];

const analysisLinks = [
  { title: "면역물질(혈청) 분석", href: "/analysis/serum" },
  { title: "분자량 분석", href: "/analysis/molecular-weight" },
  { title: "아미노산 분석", href: "/analysis/amino-acid" },
  { title: "SID 비교분석", href: "/analysis/sid" },
  { title: "농장 실증사례", href: "/analysis/farm-case" },
  { title: "에그밀 성분분석", href: "/analysis/eggmeal" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
     

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
              H-LMP 저분자 단백질 기술 기반의 축산 면역 솔루션으로 PED·PRRS 예방과 생산성 향상을 지원합니다.
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

      {/* Solutions */}
      <section id="business" className="bg-[#f7f7f7] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#008000]">
              Solutions
            </p>
            <h2 className="mt-4 text-4xl font-black">
              엔팜 주요 솔루션
            </h2>
            <p className="mt-5 text-gray-600">
              축산 면역과 생산성 향상을 위한 차별화된 기술과 서비스
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {solutions.map((item, index) => (
              <div key={item.title} className="rounded-2xl bg-white p-8 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0f3d2e] text-xl font-black text-white">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-xl font-black text-[#008000]">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 items-center">
          <div className="relative h-[360px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/h-lmp-process.png"
              alt="H-LMP Process"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-4xl font-black text-[#008000]">
              고분자 단백질을 저분자 펩타이드로
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              엔팜의 H-LMP 기술은 고분자 단백질을 저분자 펩타이드로 분해하여
              돼지의 소화와 흡수를 극대화합니다. 이를 통해 면역 기능을 강화하고
              생산성을 향상시키는 혁신적인 축산 바이오 솔루션을 제공합니다.
            </p>
            <Link
              href="/technology"
              className="mt-8 inline-block rounded-md bg-[#008000] px-8 py-3 font-bold text-white hover:bg-[#0f3d2e]"
            >
              기술 자세히 보기 →
            </Link>
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
                <div className="relative h-80 w-full bg-gradient-to-b from-[#fafafa] to-[#f1f5f1]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-6"
                    priority
                  />
                </div>

                <div className="p-8">
                  <h3 className="mt-3 text-3xl font-black text-[#008000]">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-lg font-semibold text-gray-700">
                    {product.desc}
                  </p>
                  <p className="mt-1 text-gray-600">{product.target}</p>
                  <Link
                    href="/products"
                    className="mt-8 inline-block font-bold text-[#008000]"
                  >
                    제품 자세히 보기 →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis */}
      <section className="bg-[#f7f7f7] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#008000]">
                Analysis
              </p>
              <h2 className="mt-4 text-4xl font-black">
                분석자료와 농장 실증으로 확인하는 H-LMP
              </h2>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                엔팜의 H-LMP 제품은 과학적 분석과 현장 실증을 통해 그 효과와 안전성을 입증받았습니다.
                다양한 분석 자료와 농장 사례를 통해 신뢰할 수 있는 솔루션을 제공합니다.
              </p>
              <Link
                href="/analysis"
                className="mt-8 inline-block rounded-md bg-[#008000] px-8 py-3 font-bold text-white hover:bg-[#0f3d2e]"
              >
                분석자료 보기 →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {analysisLinks.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl bg-white p-6 text-center font-semibold text-[#008000] shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef7ee] font-black text-[#0f3d2e]">
                    {index + 1}
                  </div>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section className="bg-[#0f3d2e] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-bold text-white/80">
              Product Inquiry
            </p>
            <h2 className="mt-3 text-4xl font-black">
              제품 상담이 필요하신가요?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              농장 상황, 사육단계, 질병 이력에 따라 적합한 제품과 적용 방법을 안내해드립니다.
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

    </main>
  );
}
