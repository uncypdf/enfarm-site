

import Image from "next/image";

export default function SidAnalysisPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">
            H-LMP 특성 및 SID 비교분석
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            H-LMP Characteristics & SID Comparison
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-gray-500">
          HOME &gt; 분석 / 실증 &gt; H-LMP 특성 및 SID 비교분석
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <section className="mb-16">
          <h2 className="text-4xl font-black text-[#0f3d2e]">
            H-LMP 특성 및 SID 비교분석(유사 제품)
          </h2>

          <div className="mt-8 rounded-3xl bg-[#f7faf7] p-8">
            <h3 className="text-2xl font-bold text-[#0f3d2e]">
              분석자료 출처
            </h3>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              혈장단백 제조사 APC(미국), DAKA(독일)사 제공 자료
              (2014년 농림부 주관 동물혈액 자원화 국제세미나 자료) / 한국단미사료협회 (2023. 7) / 한국식품개발연구원 (2018)
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="mb-8 text-3xl font-black text-gray-900">
            1. 아미노햄(H-LMP) 유사 제품 비교 및 차별성
          </h3>

          <p className="mb-8 max-w-5xl text-lg leading-8 text-gray-700">
            아미노햄(H-LMP)과 수입산 혈장단백의 주요 성분, 분자량, 조회분, 햄철, 펩신소화율, 효과적 사용최소량, SDI 등을 비교한 자료임.
          </p>

          <div className="overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/sid1.png"
              alt="아미노햄 H-LMP 유사 제품 비교 및 차별성"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>

          <div className="mt-10 space-y-5 rounded-3xl bg-[#f7faf7] p-8 text-lg leading-8 text-gray-700">
            <p>
              혈장단백은 항응고제 사용으로 회분 및 나트륨 함량이 높으며 3차원 이상의 고분자 단백질(글로불린)로 구성되어 바이러스성 질병 예방이나 치료시 햄철함유 저분자형 단백질(H-LMP) 보충이 필요함.
            </p>

            <p>
              혈장단백은 제조공정중 적혈구 90%이상 원심분리되므로 빈혈 예방을 위한 햄철 함량 미흡.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="mb-8 text-3xl font-black text-gray-900">
            2. 아미노햄(H-LMP)과 유사 제품 분자량 및 SID 비교
          </h3>

          <p className="mb-8 max-w-5xl text-lg leading-8 text-gray-700">
            아미노햄(H-LMP)과 혈장단백 성분의 단백질 구조, 분자량, SID 및 효과최소량을 비교한 자료임.
          </p>

          <div className="overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/sid2.png"
              alt="아미노햄 H-LMP과 혈장단백 성분 분자량 및 SID 비교"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>
        </section>

        <section className="mb-24">
          <h3 className="mb-10 text-3xl font-black text-gray-900">
            분석결과
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-[#f7faf7] p-8">
              <div className="text-4xl font-black text-[#0f3d2e]">
                10 이하
              </div>
              <p className="mt-3 text-gray-600">
                아미노햄 분자량(kDa)
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7faf7] p-8">
              <div className="text-4xl font-black text-[#0f3d2e]">
                95 이상
              </div>
              <p className="mt-3 text-gray-600">
                아미노햄 SID
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7faf7] p-8">
              <div className="text-4xl font-black text-[#0f3d2e]">
                0.2% 이상
              </div>
              <p className="mt-3 text-gray-600">
                효과최소량(사료량 기준)
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f3d2e] px-10 py-14 text-white">
          <h3 className="text-3xl font-black">
            결과 해석
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            분자량이 SID에 영향을 주는 요인.
          </p>

          <ul className="mt-6 space-y-4 text-lg leading-8 text-gray-300">
            <li>
              - 소화 효소 접근성: 저분자 단백질은 효소가 쉽게 결합하여 분해 가능
            </li>
            <li>
              - 구조적 복잡성: 고분자 단백질은 3차/4차 구조로 인해 효소 접근이 어려움
            </li>
            <li>
              - 응집 가능성: 고분자 단백질은 열이나 pH 변화에 따라 응집되어 소화율 저하
            </li>
            <li>
              - 가공 처리 여부: 가수분해나 열처리를 통해 고분자 단백질도 SID를 높일 수 있음
            </li>
          </ul>

          <p className="mt-8 text-sm leading-7 text-gray-400">
            자료 출처: 한국식품과학회지(Korean journal of food science and technology, v.30 no.4, 1998년, pp.988~991) / (주)제노마인 아미노햄 구성단백질농도측정(2024.12)
          </p>
        </section>
      </section>
    </main>
  );
}