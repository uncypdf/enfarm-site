import Image from "next/image";

export default function SidAnalysisPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">
            코디팜(H-LMP) 특성 및 혈장단백(수입)과 비교분석
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            H-LMP Characteristics & SID(Standardized Ileal Digestible) Comparison
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-gray-500">
          HOME &gt; 분석 / 실증 &gt; 코디팜(H-LMP) 특성 및 혈장단백(수입)과 비교분석
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <section className="mb-16">
          <h2 className="text-4xl font-black text-[#0f3d2e]">
            코디팜(H-LMP) 특성 및 혈장단백(수입)과 비교분석
          </h2>

          <div className="mt-8 rounded-3xl bg-[#f7faf7] p-8">
            <h3 className="text-2xl font-bold text-[#0f3d2e]">
              분석자료 출처
            </h3>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              혈장단백 제조사 APC(미국), DAKA(독일)사 제공 자료
              (2014년 농림부 주관 동물혈액 자원화 국제세미나 자료)
              / 한국단미사료협회 (2023.7)
              / 한국식품개발연구원 (2018)
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="mb-8 text-3xl font-black text-gray-900">
            1. 코디팜(H-LMP)과 유사 제품(수입 혈장단백)) 비교 및 차별성
          </h3>

          <div className="overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/sid1.png"
              alt="코디팜 유사 제품 비교"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>

          <div className="mt-10 space-y-5 rounded-3xl bg-[#f7faf7] p-8 text-lg leading-8 text-gray-700">
            <p>
              혈장단백은 항응고제 사용으로 회분 및 나트륨 함량이 높으며
              3차원 이상의 고분자 단백질(글로불린)로 구성되어 바이러스성 질병
              예방이나 치료시 햄철함유 저분자형 단백질(H-LMP) 보충이 필요함.
            </p>

            <p>
              혈장단백은 제조공정중 적혈구 90%이상 원심분리되므로 빈혈 예방을
              위한 햄철 함량 미흡.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="mb-8 text-3xl font-black text-gray-900">
            2. 아미노햄(H-LMP)과 유사 제품 분자량 및 SID 비교
          </h3>

          <div className="overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/sid2.png"
              alt="SID 비교"
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
                효과최소량
              </p>
            </div>
          </div>
        </section>

      </section>
    </main>
  );
}