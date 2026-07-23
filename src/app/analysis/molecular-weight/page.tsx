import Image from "next/image";

export default function MolecularWeightPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">
            코디팜(H-LMP) 분자량 분석
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Molecular Weight Analysis
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-gray-500">
          HOME &gt; 분석 / 실증 &gt; 코디팜(H-LMP) 분자량 분석
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-[#0f3d2e]">
            코디팜(H-LMP) (고분자 단백질 → 저분자 펩타이드 및 아미노산化) 분자량 분석
          </h2>

          <div className="mt-8 rounded-3xl bg-[#f7faf7] p-8">
            <h3 className="text-2xl font-bold text-[#0f3d2e]">
              분석방법
            </h3>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              2차원전기영동법 / 단백질농도측정 Bradford 법
            </p>

            <p className="mt-2 text-gray-500">
              분석기관 : 제노마인 (Genomine) / 2024.12
            </p>
          </div>
        </div>

        <section className="mb-24">
          <div className="overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/e61.png"
              alt="2-DE Gel 분석 방법"
              width={1600}
              height={300}
              className="w-full"
            />
          </div>
        </section>

        <section className="mb-24">
          <div className="overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/e62.png"
              alt="아미노햄 분자량 분석 결과"
              width={1600}
              height={1000}
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
                14.66
              </div>
              <p className="mt-3 text-gray-600">
                처리 전 고분자 단백질 농도
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7faf7] p-8">
              <div className="text-4xl font-black text-[#0f3d2e]">
                1.96
              </div>
              <p className="mt-3 text-gray-600">
                처리 후 고분자 단백질 농도
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7faf7] p-8">
              <div className="text-4xl font-black text-[#0f3d2e]">
                -86.6%
              </div>
              <p className="mt-3 text-gray-600">
                고분자 단백질 감소율
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f3d2e] px-10 py-14 text-white">
          <h3 className="text-3xl font-black">
            결과 분석
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            처리구(샘플2)에선 햄철함유 고분자 단백질이 저분자 펩타이드 및
            아미노산화 되어 실제 검출된 단백질 농도에서도 아미노햄의 고분자
            단백질 농도는 1.96ml(처리전 14.66ml)으로 86.6% 정도 감소,
            15KDa 이하로 저분자화 되어 비 단백질인 햄철의 철분 이미지 외에는
            고분자 단백질 이미지 검출이 안되고 있음.
          </p>
        </section>
      </section>
    </main>
  );
}