import Image from "next/image";

export default function FarmCasePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">H-LMP 농장 실증사례</h1>
          <p className="mt-4 text-lg text-gray-300">Farm Validation Case</p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-gray-500">
          HOME &gt; 분석 / 실증 &gt; H-LMP 농장 실증사례
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <section className="mb-16">
          <h2 className="text-4xl font-black text-[#0f3d2e]">
            농장 실증 사례
          </h2>

          <div className="mt-8 rounded-3xl bg-[#f7faf7] p-8">
            <h3 className="text-2xl font-bold text-[#0f3d2e]">적용 프로그램</h3>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              코디팜/아미노에프(모돈용)를 활용한 PED 예방 및 회복사례,
              PRRS 양성농장 육성돈 회복사례, STOP 2P 프로그램 수익성 분석 자료임.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="mb-8 text-3xl font-black text-gray-900">
            1. 코디팜/아미노에프(모돈용)를 활용한 PED(A형) 예방 및 회복사례
          </h3>
          <p className="mb-8 text-lg font-semibold text-[#0f3d2e]">
            경기이천 S농장
          </p>

          <div className="overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/e6.png"
              alt="PED 예방 및 회복사례"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>

          <div className="mt-10 space-y-5 rounded-3xl bg-[#f7faf7] p-8 text-lg leading-8 text-gray-700">
            <p>
              모돈의 1차 ABP 관리 실패로 PED 발생 모습과 모돈용 아미노에프로
              1차 ABP 관리후 PED 회복 및 예방된 분만사 모습.
            </p>
            <p>
              급여 1-2일 후 부터 설사 증상이 회복되고 모돈의 유질이 개선되어
              정상포유로 설사가 사라지기 시작.
            </p>
            <p>
              급여 7일후 부터 완전 회복된 분만사 모습과 1개월후 동일 분만틀에서
              정상 성장중인 포유자돈 모습.(PED 증상유형(A형 /C형) 에 따라 처방법 구분선택)
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="mb-8 text-3xl font-black text-gray-900">
            2. 코디팜의 PRRS 양성농장 육성돈에 대한 코디팜 급여효과
          </h3>
          <p className="mb-8 text-lg font-semibold text-[#0f3d2e]">
            경기 양주 K농장 사례
          </p>

          <div className="overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/e7.png"
              alt="PRRS 양성농장 육성돈 코디팜 급여효과"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/e8.png"
              alt="코디팜 급여 전후 비육돈 체중 분포도"
              width={1600}
              height={720}
              className="w-full"
            />
          </div>

          <div className="mt-10 rounded-3xl bg-[#f7faf7] p-8 text-lg leading-8 text-gray-700">
            <p>
              돈군의 증체 변화 모습: 90일 전후 PRRS 증상으로 심한 위축 및
              층하리 발생 돈군에 코디팜 첫 2주간 0.5% 급여 이후 0.2% 급여로
              정상회복 및 출하체중 두수 증가 유도
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="mb-8 text-3xl font-black text-gray-900">
            3. 아미노에프(모돈용)/코디팜 비용 및 수익성 분석
          </h3>

          <p className="mb-8 max-w-5xl text-lg leading-8 text-gray-700">
            모돈규모 200두 기준 STOP 2P 프로그램 수익성분석 자료임.
          </p>

          <div className="overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/e9.png"
              alt="STOP 2P 프로그램 수익성분석"
              width={1600}
              height={1200}
              className="w-full"
            />
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f3d2e] px-10 py-14 text-white">
          <h3 className="text-3xl font-black">결과 해석</h3>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            PED(A형) 발생 농장에서 아미노에프를 활용한 1차 ABP 관리 후
            분만사 회복 및 예방 사례가 확인되었으며, 급여 1-2일 후부터
            설사 증상 회복과 정상포유 개선 양상이 나타남.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            PRRS 양성농장의 육성돈 사례에서는 코디팜 급여 후 심한 위축 및
            층하리 발생 돈군의 정상회복과 출하체중 두수 증가를 유도한 사례가 확인됨.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            모돈 200두 기준 STOP 2P 프로그램 수익성분석에서는 제품 사용 비용 대비
            MSY 증가, 폐사 감소, 총사료요구율 개선에 따른 추가수익 가능성을 제시하고 있음.
          </p>
        </section>
      </section>
    </main>
  );
}