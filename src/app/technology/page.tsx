import Image from "next/image";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">기술/특징</h1>
          <p className="mt-4 text-lg text-gray-300">
            H-LMP Technology
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-gray-500">
          HOME &gt; 기술/특징
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Intro */}
        <section className="mb-28 text-center">
          <h2 className="text-5xl font-black text-[#0f3d2e]">
            H-LMP Technology
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-gray-700">
            20년 이상 축적된 단백질 분해 및 발효기술을 기반으로 개발된
            H-LMP(Heme Iron Low Molecular Protein)는
            면역항체 형성과 증체를 위한 기능성 저분자 단백질 솔루션입니다.
          </p>
        </section>

        {/* Process */}
        <section className="mb-32">
          <h2 className="mb-12 text-4xl font-black text-gray-900">
            H-LMP 저분자 단백질 공정기술
          </h2>

          <div className="overflow-hidden rounded-3xl border">
            <Image
              src="/h-lmp-process.png"
              alt="H-LMP 공정기술"
              width={1200}
              height={600}
              className="w-full"
            />
          </div>

          <div className="mt-10 space-y-6 text-lg leading-9 text-gray-700">
            <p>
              단백질 분해 촉진 공정에 M/W 조사를 적용하여
              효소 침투력과 분해 반응을 극대화합니다.
            </p>

            <p>
              햄철함유 고분자 단백질의 폴리펩타이드 결합을
              햄철함유 저분자 단백질(H-LMP)로 전환하여
              회장 소화율(SID)을 극대화하고
              면역항체 형성과 증체에 필요한 영양 공급 효율을 향상시킵니다.
            </p>

            <div className="rounded-xl bg-green-50 p-6 font-semibold text-[#0f3d2e]">
              특허등록 제1663882호
            </div>
          </div>
        </section>

        {/* Analysis */}
        <section className="mb-32">
          <h2 className="mb-12 text-4xl font-black text-gray-900">
            H-LMP 분자량 분석
          </h2>

          <div className="overflow-hidden rounded-3xl border">
            <Image
              src="/h-lmp-analysis.png"
              alt="H-LMP 분자량 분석"
              width={1200}
              height={600}
              className="w-full"
            />
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="mb-4 text-2xl font-bold">
                분해 전
              </h3>

              <p className="text-lg text-gray-700">
                100kDa 이상의 고분자 단백질
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-8">
              <h3 className="mb-4 text-2xl font-bold text-[#0f3d2e]">
                분해 후
              </h3>

              <p className="text-lg text-gray-700">
                10kDa 이하 수준의
                H-LMP 저분자 단백질
              </p>
            </div>
          </div>

          <p className="mt-8 text-gray-500">
            분석기관 : Genomine Corp.
          </p>
        </section>

        {/* Feature */}
        <section className="mb-32">
          <h2 className="mb-12 text-4xl font-black text-gray-900">
            H-LMP의 특징
          </h2>

          <div className="overflow-hidden rounded-3xl border">
            <Image
              src="/h-lmp-feature.png"
              alt="H-LMP 특징"
              width={1200}
              height={600}
              className="w-full"
            />
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-2xl border p-8">
              <h3 className="mb-4 text-xl font-bold">
                저분자 단백질 생산 기술
              </h3>

              <p className="text-gray-700">
                100kDa 이상의 햄철함유 고분자 단백질을
                1~10kDa 이하의 저분자 펩타이드와
                아미노산 형태로 전환합니다.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="mb-4 text-xl font-bold">
                높은 회장 흡수율
              </h3>

              <p className="text-gray-700">
                단백질 흡수 기준인 회장 소화율(SID)을 향상시켜
                증체와 면역을 극대화합니다.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="mb-4 text-xl font-bold">
                면역기능 항체(중화항체) 강화
              </h3>

              <p className="text-gray-700">
                필수 아미노산과 이온화된 햄철을
                동시에 공급하여 모돈의 빈혈 예방과 
                자돈의 조혈 기능을 강화합니다.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="mb-4 text-xl font-bold">
                모체 이행항체 강화로 PED 예방
              </h3>

              <p className="text-gray-700">
                무유증 예방과 풍부한 초유 공급을 통해
                모체 이행항체 지속성을 강화합니다.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="mb-4 text-xl font-bold">
                이유 전 후 PRRS 항체 공백기 대응
              </h3>

              <p className="text-gray-700">
                이유 후 모체 이행항체 감소 대응과
                후천성 면역을 위한 중화항체 형성을 지원합니다.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="mb-4 text-xl font-bold">
                PED · PRRS 대응
              </h3>

              <p className="text-gray-700">
                모돈에겐 초유면역 강화를, 
                이유자돈에겐 신속한 중화 항체 형성을 통해
                STOP 2P를 실현합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Stop 2P */}
        <section className="rounded-3xl bg-[#0f3d2e] px-12 py-20 text-white">
          <h2 className="text-4xl font-black">
            STOP 2P Program
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            PED와 PRRS로 인한 생산성 저하를 극복하기 위해 개발된
            엔팜의 모돈과 자돈의 면역 강화 프로그램입니다.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-5">
            <div className="rounded-xl bg-white/10 p-6 text-center">
              모돈의 1차 ABP 예방
            </div>

            <div className="rounded-xl bg-white/10 p-6 text-center">
              PED 예방
            </div>

            <div className="rounded-xl bg-white/10 p-6 text-center">
              이유자돈의 2차 
              <br></br>ABP 예방
            </div>

            <div className="rounded-xl bg-white/10 p-6 text-center">
              PRRS 예방
            </div>

            <div className="rounded-xl bg-white/10 p-6 text-center">
              STOP 2P 실현
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}