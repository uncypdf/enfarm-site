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
            코디팜 급여 후 이유자돈의 혈액 및 혈청 내 면역 관련 지표 변화를
            분석하여 RBC, WBC 및 IgG, IgM, IgA 변화 추이를 확인했습니다.
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
            이유자돈 114두를 대상으로 이유 전부터 60일령까지 아미노햄을
            첨가한 사료를 급여한 후, 혈액 내 백혈구와 적혈구 세포의 변화
            추이를 분석했습니다. 분석 결과, 아미노햄 급여군에서 백혈구와
            적혈구가 안정적으로 증가하여 면역 기능 강화에 효과가 있는 것으로
            분석되었습니다.
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
            2. IgG · IgM · IgA 혈청 내 면역물질 분석
          </h3>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-[#f7faf7] p-8">
              <h4 className="text-2xl font-bold text-[#0f3d2e]">IgG</h4>
              <p className="mt-4 leading-7 text-gray-700">
                혈액과 조직 내 가장 많은 항체로 감염 초기 면역 강화 및
                2차·3차 감염 예방에 관여합니다. 시험구에서는 이유 후에도
                꾸준한 증가 경향을 보였습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7faf7] p-8">
              <h4 className="text-2xl font-bold text-[#0f3d2e]">IgM</h4>
              <p className="mt-4 leading-7 text-gray-700">
                감염 중기에 증가하는 항체로, 아미노햄 급여구에서는 초기
                IgG 형성 효과에 따라 IgM 증가가 감소 추이를 나타냈습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7faf7] p-8">
              <h4 className="text-2xl font-bold text-[#0f3d2e]">IgA</h4>
              <p className="mt-4 leading-7 text-gray-700">
                호흡기 및 장점막 세포 감염 차단에 관여하는 면역항체입니다.
                대조구는 60일령 전후 감소했으나 시험구에서는 유지 경향을
                보였습니다.
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
            적혈구와 백혈구 세포의 혈중 변화와 혈청 내 IgG, IgM, IgA 농도
            변화를 분석한 결과, 코디팜은 질병 감염 초기에 효과적인 면역항체
            형성을 유도하며 이유 전후부터 육성 초기 단계의 바이러스성 질병
            예방에 효과를 보이는 것으로 확인되었습니다.
          </p>
        </section>
      </section>
    </main>
  );
}