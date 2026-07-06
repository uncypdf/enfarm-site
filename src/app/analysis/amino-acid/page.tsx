import Image from "next/image";

export default function AminoAcidPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">
            코디팜 아미노산 분석
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Amino Acid Analysis
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-gray-500">
          HOME &gt; 분석 / 실증 &gt; 코디팜 아미노산 분석
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <section className="mb-16">
          <h2 className="text-4xl font-black text-[#0f3d2e]">
            코디팜 아미노산 분석
          </h2>

          <div className="mt-8 rounded-3xl bg-[#f7faf7] p-8">
            <h3 className="text-2xl font-bold text-[#0f3d2e]">
              분석기관
            </h3>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              한국식품연구원 / 한국단미사료협회
            </p>

            <p className="mt-2 text-gray-500">
              아미노 햄 공인기관 성분(아미노산) 분석 성적서
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="mb-8 text-3xl font-black text-gray-900">
            분석결과
          </h3>

          <div className="overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/e14.png"
              alt="아미노햄 아미노산 분석 성적서"
              width={1600}
              height={2200}
              className="w-full"
            />
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f3d2e] px-10 py-14 text-white">
          <h3 className="text-3xl font-black">
            결과 해석
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            공인기관 분석 결과 아미노 햄의 총 아미노산 함량은 66.95%로 확인되었으며,
            루신(8.75%), 라이신(5.00%), 발린(4.10%), 이소루신 등 주요
            필수아미노산을 함유하고 있음.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            또한 아스파틱산(8.79%), 글루타민산(6.78%), 알라닌(5.64%) 등 다양한
            비필수아미노산이 포함되어 있어 성장, 조직 형성 및 면역항체 생성에 필요한
            아미노산 공급원으로 활용 가능함.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            H-LMP 공정을 통해 고분자 단백질을 저분자 펩타이드 및 아미노산 형태로
            전환함으로써 영양소 이용성을 향상시키고 SID 극대화를 목표로 하고 있음.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-xl bg-white/10 p-4">
              <div className="text-2xl font-black">8.79%</div>
              <div className="mt-1 text-sm text-gray-300">
                아스파틱산
              </div>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <div className="text-2xl font-black">8.75%</div>
              <div className="mt-1 text-sm text-gray-300">
                루신
              </div>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <div className="text-2xl font-black">6.78%</div>
              <div className="mt-1 text-sm text-gray-300">
                글루타민산
              </div>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <div className="text-2xl font-black">66.95%</div>
              <div className="mt-1 text-sm text-gray-300">
                총 아미노산
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}