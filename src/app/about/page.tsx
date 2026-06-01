export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Visual Banner */}
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">회사소개</h1>
          <p className="mt-4 text-lg text-gray-300">
            About ENFARM
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-gray-500">
          HOME &gt; 회사소개 &gt; About
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl gap-16 px-6 py-20">
        {/* Left Menu */}
        <aside className="w-64 shrink-0">
          <h2 className="mb-6 text-2xl font-bold text-[#0f3d2e]">
            회사소개
          </h2>

          <div className="overflow-hidden rounded-lg border">
            <a
              href="#about"
              className="block bg-[#0f3d2e] px-6 py-4 font-semibold text-white"
            >
              About
            </a>

            <a
              href="#history"
              className="block border-t px-6 py-4 text-gray-700 hover:bg-gray-50"
            >
              연혁
            </a>
          </div>
        </aside>

        {/* Right Content */}
        <div className="flex-1">
          {/* About */}
          <section id="about">
            <span className="text-sm font-semibold tracking-widest text-[#008000]">
              ENFARM BIO SOLUTION
            </span>

            <h3 className="mt-4 text-5xl font-black text-gray-900">
              면역이 방역입니다
            </h3>

            <div className="mt-12 space-y-8 text-lg leading-9 text-gray-700">
              <p>
                주식회사 엔팜은 <strong>“자연과 인간은 하나”</strong>라는
                기업 이념 아래 건강한 친환경 축산을 위한 기능성 단백질 원료와
                축산 바이오 솔루션을 연구·개발하는 전문기업입니다.
              </p>

              <p>
                양돈 및 양계 산업은 PED, PRRS, ASF, AI 등 다양한
                바이러스성 질병으로 인해 생산성과 수익성에 큰 영향을 받고
                있습니다.
              </p>

              <p>
                이러한 질병은 단순한 가축의 건강 문제를 넘어
                농가 경영과 식품 공급 안정성에도 중요한 영향을 미치고 있습니다.
              </p>

              <p>
                엔팜은 20년 이상 축적된 기술력과 현장 경험을 바탕으로,
                질병 예방의 핵심은 면역력 강화에 있다는 신념 아래
                연구개발을 이어오고 있습니다.
              </p>

              <p>
                특히 가축의 면역 형성, 회복 및 성장 단계에서 중요한 역할을 하는
                저분자 단백질 원료와 아미노산 기반 솔루션을 공급하며,
                건강한 축산 환경 조성과 생산성 향상에 기여하고 있습니다.
              </p>

              <p>
                엔팜은 앞으로도 과학적 연구와 현장 중심의 기술 개발을 통해
                지속 가능한 친환경 축산의 미래를 만들어 가겠습니다.
              </p>
            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-[#f7faf7] p-8">
                <h4 className="mb-4 text-xl font-bold text-[#0f3d2e]">
                  Mission
                </h4>

                <p className="text-gray-600">
                  건강한 축산을 위한 면역 솔루션 제공
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7faf7] p-8">
                <h4 className="mb-4 text-xl font-bold text-[#0f3d2e]">
                  Vision
                </h4>

                <p className="text-gray-600">
                  지속가능한 친환경 축산 구현
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7faf7] p-8">
                <h4 className="mb-4 text-xl font-bold text-[#0f3d2e]">
                  Core Value
                </h4>

                <p className="text-gray-600">
                  기술 · 신뢰 · 현장중심 · 지속가능성
                </p>
              </div>
            </div>

            <div className="mt-20 rounded-3xl bg-[#0f3d2e] px-12 py-16 text-center text-white">
              <p className="text-sm tracking-[0.3em] text-gray-300">
                ENFARM SLOGAN
              </p>

              <h4 className="mt-4 text-4xl font-black">
                면역이 방역입니다!
              </h4>
            </div>
          </section>

          {/* History */}
          <section id="history" className="mt-32">
            <h3 className="mb-16 text-5xl font-black text-gray-900">
              연혁
            </h3>

            <div className="space-y-16">
              <div className="border-l-4 border-[#0f3d2e] pl-8">
                <h4 className="text-3xl font-bold text-[#0f3d2e]">
                  2021 ~ 현재
                </h4>

                <p className="mt-3 text-xl font-semibold">
                  H-LMP FOR STOP 2P
                </p>

                <ul className="mt-6 space-y-3 text-gray-700">
                  <li>• 면역항체 원료용 저분자 단백질 개발</li>
                  <li>• STOP 2P Promotion / Consulting</li>
                  <li>• PED · PRRS 예방 사료 및 첨가제 개발 공급</li>
                  <li>• 저분자 발효단백질 활용 악취저감 사료 개발</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#0f3d2e] pl-8">
                <h4 className="text-3xl font-bold text-[#0f3d2e]">
                  2011 ~ 2020
                </h4>

                <p className="mt-3 text-xl font-semibold">
                  면역사료용 저분자 단백질 개발
                </p>

                <ul className="mt-6 space-y-3 text-gray-700">
                  <li>• 품질 안정화 및 대량생산 시스템 구축</li>
                  <li>• 단백질 분해 및 발효기술 확보</li>
                  <li>• PED 예방 및 회복강화 제품 개발</li>
                  <li>• STOP 2P 프로그램(H/W · S/W) 개발</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#0f3d2e] pl-8">
                <h4 className="text-3xl font-bold text-[#0f3d2e]">
                  2001 ~ 2010
                </h4>

                <p className="mt-3 text-xl font-semibold">
                  면역원료 개발
                </p>

                <ul className="mt-6 space-y-3 text-gray-700">
                  <li>• 국내산 단백질 자원 및 원료 개발</li>
                  <li>• 사료용 · 비료용 제품 개발 및 등록</li>
                  <li>• 가축 혈액 자원화 시스템 구축</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}