import Image from "next/image";
const products = [
  {
    name: "Amino-F",
    kr: "아미노에프",
    label: "Low Molecular Protein Solution",
    desc: "초기 성장 단계의 영양 이용성과 사료 섭취를 고려한 저분자 단백질 기반 기능성 소재입니다.",
  },
  {
    name: "CodyFarm",
    kr: "코디팜",
    label: "Farm Productivity Solution",
    desc: "축산 현장의 생산성 관리와 운영 효율 개선을 위한 현장 중심 솔루션입니다.",
  },
  {
    name: "EggMeal",
    kr: "에그밀",
    label: "Functional Protein Ingredient",
    desc: "안정적인 품질과 활용성을 고려한 고품질 기능성 단백질 원료입니다.",
  },
];

const insights = [
  "ASF 이후 단백질 원료 시장 변화",
  "PRRS가 농장 생산성에 미치는 영향",
  "이유자돈 영양 전략과 초기 성장 관리",
  "혈장 단백질 대체 원료 트렌드",
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#0f3d2e]/10 bg-[#f7f5ef]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="ENFARM"
    width={140}
    height={60}
    priority
  />
</a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#12231c]/75 md:flex">
            <a href="#company" className="hover:text-[#0f3d2e]">Company</a>
            <a href="#technology" className="hover:text-[#0f3d2e]">Technology</a>
            <a href="#products" className="hover:text-[#0f3d2e]">Products</a>
            <a href="#insights" className="hover:text-[#0f3d2e]">Insights</a>
            <a href="#contact" className="rounded-full bg-[#0f3d2e] px-5 py-2 text-white hover:bg-[#12231c]">
              제품문의
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="absolute right-[-15rem] top-20 h-[32rem] w-[32rem] rounded-full bg-[#d9b26f]/20 blur-3xl" />
        <div className="absolute left-[-12rem] top-80 h-[28rem] w-[28rem] rounded-full bg-[#6e8b74]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#6e8b74]">
              (주)엔팜은 (주)케이피드와 함께합니다.
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-[#0f3d2e] md:text-7xl">
              면역이 방역이다!
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-[#12231c]/75">
              엔팜은 축산 생산성 향상을 위한 기능성 바이오 소재와 단백질 원료 솔루션을 제공합니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#products" className="rounded-full bg-[#0f3d2e] px-7 py-3 font-semibold text-white hover:bg-[#12231c]">
                제품 보기
              </a>
              <a href="#contact" className="rounded-full border border-[#0f3d2e]/20 px-7 py-3 font-semibold text-[#0f3d2e] hover:bg-white">
                문의하기
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#0f3d2e]/10 bg-white/55 p-6 shadow-2xl shadow-[#0f3d2e]/10">
            <div className="rounded-[1.5rem] bg-[#0f3d2e] p-8 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d9b26f]">Core Focus</p>
              <div className="mt-10 space-y-8">
                {["Low Molecular Protein", "Plasma Alternative", "Digestibility", "Nutritional Efficiency"].map((item, index) => (
                  <div key={item} className="flex items-center justify-between border-b border-white/15 pb-5">
                    <span className="text-lg font-semibold">{item}</span>
                    <span className="text-sm text-white/45">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="company" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6e8b74]">Company</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0f3d2e]">축산업의 지속가능성을 높이는 소재 기업</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#12231c]/75">
            <p>
              엔팜은 사료 원료, 기능성 단백질 소재, 현장 적용 솔루션을 통해 축산 농가와 사료 산업의 생산성 개선에 기여합니다.
            </p>
            <p>
              단순 제품 판매가 아니라 원료 품질, 적용 목적, 생산성 개선 가능성을 함께 설계하는 B2B 파트너를 지향합니다.
            </p>
          </div>
        </div>
      </section>

      <section id="technology" className="bg-[#0f3d2e] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b26f]">Technology</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            기능성 단백질 소재를 중심으로 한 축산 바이오 솔루션
          </h2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {["저분자 단백질", "기호성", "소화이용성", "혈장 대체 소재", "초기 성장 관리", "품질 안정성"].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <h3 className="text-xl font-bold">{item}</h3>
                <p className="mt-4 leading-7 text-white/65">
                  축산 현장의 생산성 문제를 소재와 영양 전략 관점에서 해결하기 위한 핵심 기술 영역입니다.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6e8b74]">Products</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0f3d2e]">Bio Material Portfolio</h2>
            </div>
            <p className="max-w-xl leading-7 text-[#12231c]/65">
              엔팜의 제품군은 축산 생산성, 초기 성장, 단백질 공급, 원료 안정성을 중심으로 구성됩니다.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="rounded-[2rem] border border-[#0f3d2e]/10 bg-white/60 p-8 shadow-xl shadow-[#0f3d2e]/5">
                <p className="text-sm font-semibold text-[#6e8b74]">{product.label}</p>
                <h3 className="mt-6 text-3xl font-bold text-[#0f3d2e]">{product.name}</h3>
                <p className="mt-1 font-semibold text-[#12231c]/60">{product.kr}</p>
                <p className="mt-8 leading-7 text-[#12231c]/70">{product.desc}</p>
                <a href="#contact" className="mt-8 inline-block font-semibold text-[#0f3d2e]">
                  제품 문의 →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="bg-[#e8e2d3] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6e8b74]">Insights</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0f3d2e]">현장 문제를 기술 언어로 정리합니다</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {insights.map((item) => (
              <div key={item} className="rounded-3xl bg-[#f7f5ef] p-7 font-semibold text-[#12231c]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-[#0f3d2e] p-8 text-white md:grid-cols-[1fr_1fr] md:p-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b26f]">Contact</p>
            <h2 className="mt-4 text-4xl font-bold">제품 상담이 필요하신가요?</h2>
            <p className="mt-6 leading-7 text-white/65">
              제품 적용 목적, 원료 문의, 공급 상담 등 필요한 내용을 보내주시면 담당자가 확인 후 연락드립니다.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-7">
            <div className="space-y-5 text-white/80">
              <p><strong className="text-white">회사명</strong> (주)엔팜</p>
              <p><strong className="text-white">이메일</strong> nfarm3103@naver.com</p>
              <p><strong className="text-white">전화</strong> 010-5232-3103</p>
            </div>
            <a href="mailto:contact@enfarm.co.kr" className="mt-8 inline-block rounded-full bg-[#d9b26f] px-7 py-3 font-bold text-[#0f3d2e]">
              이메일 문의하기
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0f3d2e] text-white">
  <div className="mx-auto max-w-7xl px-6 py-12">
    <div className="grid gap-10 md:grid-cols-2">
      {/* Company Info */}
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

      {/* Contact */}
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
