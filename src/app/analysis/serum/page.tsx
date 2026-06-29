import Image from "next/image";

export default function SerumAnalysisPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">
            H-LMP 면역물질 혈청 분석
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            In Vivo Test · RBC / WBC / IgG / IgM / IgA
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-gray-500">
          HOME &gt; 분석 / 실증 &gt; H-LMP 면역물질 혈청 분석
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-[#0f3d2e]">
            면역효과 IN VIVO TEST
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-700">
            코디팜 급여 후 이유자돈의 혈액 및 혈청 내 면역 관련 지표 물질인
            RBC, WBC, IgG, IgM, IgA 들의 변화 추이 분석 결과
            (분석기관: 시의과대학)
          </p>
        </div>

        <div className="mb-20 overflow-hidden rounded-3xl border bg-white">
          <Image
            src="/tc1.png"
            alt="코디팜 농장 실증 시험 현장"
            width={1600}
            height={400}
            className="w-full"
          />
        </div>

        <section className="mb-24">
          <h3 className="text-3xl font-black text-gray-900">
            1. 코디팜 급여 후 혈액 중 RBC / WBC 변화 분석
          </h3>

          <p className="mt-6 max-w-5xl text-lg leading-8 text-gray-700">
            Fig1, Fig2: 이유자돈(이유 전부터 60일령까지, 114두)을 대상으로 해당 사료에 아미노햄을 첨가하여 급여한 후, 혈액 내 백혈구와 적혈구 세포의 변화 추이를 분석한 결과, 아미노햄 급여군에서 백혈구와 적혈구가 안정적으로 증가하여 면역 기능 강화에 효과가 있는 것으로 분석됨.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/tc2.png"
              alt="RBC WBC 변화 분석 그래프"
              width={1600}
              height={720}
              className="w-full"
            />
          </div>
        </section>

        <section className="mb-24">
          <h3 className="text-3xl font-black text-gray-900">
            2. 코디팜의 이유자돈에 대한 IgG · IgM · IgA 혈청 내 면역물질 분석시험
          </h3>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-[#f7faf7] p-8">
              <h4 className="text-2xl font-bold text-[#0f3d2e]">IgG</h4>
              <p className="mt-4 leading-7 text-gray-700">
                Fig3. IgG : 혈액과 조직내 가장 많은 항체(70~80%)로 감염초기 면역강화기능으로 2차, 3차 감염 예방기능을 함. 대조구와 달리 이유 후에도 꾸준한 증가로 초기면역강화에 중요한 기능을 하고 있음.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7faf7] p-8">
              <h4 className="text-2xl font-bold text-[#0f3d2e]">IgM</h4>
              <p className="mt-4 leading-7 text-gray-700">
                Fig4. IgM : 아미노햄 급여구에서 감염초기 우세하게 생성된 IgG의 초기면역강화 효과로 감염중기에 증가하는 IgM의 증가가 코디팜 처리구에서는 감소추이를 나타냄.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7faf7] p-8">
              <h4 className="text-2xl font-bold text-[#0f3d2e]">IgA</h4>
              <p className="mt-4 leading-7 text-gray-700">
                Fig5. IgA : 바이러스나 세균이 호흡기나 장점막 세포의 감염을 차단하는 면역항체로 대조구에서는 60일령 전후하여 감소를 보였으나 시험구에서는 계속 유지를 하고 있음.
              </p>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/tc3.png"
              alt="IgG IgM IgA 혈청 면역물질 분석 그래프"
              width={1600}
              height={720}
              className="w-full"
            />
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f3d2e] px-10 py-14 text-white">
          <h3 className="text-3xl font-black">분석 결과 요약</h3>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            적혈구와 백혈구 세포의 혈중변화와 혈청 내 IgG, IgM, IgA의 농도변화를 분석한 결과, 
            코디팜은 질병감염 초기에 효과적인 면역항체 형성을 나타내므로 이유전후부터 육성 초기단계의 바이러스성 질병예방에 효과를 보이고 있다.
          </p>
        </section>
      </section>
    </main>
  );
}