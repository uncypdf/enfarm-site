import Image from "next/image";

export default function EggmealPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">
            에그밀 성분분석
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Eggmeal Composition Analysis
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-gray-500">
          HOME &gt; 분석 / 실증 &gt; 에그밀 성분분석
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <section className="mb-16">
          <h2 className="text-4xl font-black text-[#0f3d2e]">
            에그밀 성분 분석
          </h2>

          <div className="mt-8 rounded-3xl bg-[#f7faf7] p-8">
            <h3 className="text-2xl font-bold text-[#0f3d2e]">
              분석 개요
            </h3>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              에그밀(EGGMEAL)은 난황, 난백, 난막 유래 단백질과 지방,
              천연칼슘 및 미네랄을 함유한 기능성 단백질 원료로
              어린 자돈의 성장과 면역력 강화에 필요한 영양소 공급을 목적으로 함.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="mb-8 text-3xl font-black text-gray-900">
            1. 에그밀 제품생산 공정도
          </h3>

          <div className="overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/eggmeal1.png"
              alt="에그밀 제품생산 공정도"
              width={1600}
              height={1200}
              className="w-full"
            />
          </div>
        </section>

        <section className="mb-24">
          <h3 className="mb-8 text-3xl font-black text-gray-900">
            2. 주요성분 및 효능
          </h3>

          <div className="overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/e4-1.png"
              alt="에그밀 주요성분 및 효능"
              width={1600}
              height={1200}
              className="w-full"
            />
          </div>
        </section>

        <section className="mb-24">
          <h3 className="mb-8 text-3xl font-black text-gray-900">
            3. 단미사료 성분등록 및 시험성적서
          </h3>

          <p className="mb-8 text-lg text-gray-700">
            제조허가등록번호 : AA-1U00008
          </p>

          <div className="overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/e4-2.png"
              alt="에그밀 성분등록 및 시험성적서"
              width={1600}
              height={1200}
              className="w-full"
            />
          </div>
        </section>

        <section className="mb-24">
          <h3 className="mb-10 text-3xl font-black text-gray-900">
            4. 분석결과
          </h3>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="rounded-2xl bg-[#f7faf7] p-8">
              <div className="text-4xl font-black text-[#0f3d2e]">
                24.62%
              </div>
              <p className="mt-3 text-gray-600">
                조단백질
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7faf7] p-8">
              <div className="text-4xl font-black text-[#0f3d2e]">
                11.10%
              </div>
              <p className="mt-3 text-gray-600">
                조지방
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7faf7] p-8">
              <div className="text-4xl font-black text-[#0f3d2e]">
                62.02%
              </div>
              <p className="mt-3 text-gray-600">
                조회분
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7faf7] p-8">
              <div className="text-4xl font-black text-[#0f3d2e]">
                3.24%
              </div>
              <p className="mt-3 text-gray-600">
                수분
              </p>
            </div>
          </div>
        </section>

        <section className="mb-24 rounded-3xl bg-[#0f3d2e] px-10 py-14 text-white">
          <h3 className="text-3xl font-black">
            5. 결과 해석
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            에그밀은 난황, 난백 및 난막 유래 단백질을 기반으로 한 기능성
            단백질 원료로 조단백질 24.62%, 조지방 11.10%를 함유하고 있음.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            천연탄산칼슘을 기반으로 칼슘 약 23% 수준을 함유하고 있으며,
            마그네슘, 인 및 다양한 미네랄 공급이 가능함.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            고온 멸균건조 공정을 적용하여 위생안전성을 강화하였으며,
            시험성적서 기준 살모넬라는 검출되지 않음.
          </p>
        </section>

        <section>
          <h3 className="mb-8 text-3xl font-black text-gray-900">
            6. 에그밀 사용 권장량
          </h3>

          <div className="overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/eggmeal6.png"
              alt="에그밀 사용 권장량"
              width={1600}
              height={1200}
              className="w-full"
            />
          </div>
        </section>
      </section>
    </main>
  );
}