import Link from "next/link";

const analysisPages = [
  {
    title: "H-LMP(코디팜) 면역물질(혈청) 분석",
    href: "/analysis/serum",
    desc: "H-LMP 적용에 따른 혈청 내 면역 관련 물질 분석 자료",
  },
  {
    title: "H-LMP(코디팜) 아미노햄 분자량 분석",
    href: "/analysis/molecular-weight",
    desc: "고분자 단백질과 H-LMP 저분자 단백질의 분자량 비교 분석",
  },
  {
    title: "H-LMP(코디팜) 성분(아미노산) 분석",
    href: "/analysis/amino-acid",
    desc: "H-LMP에 포함된 주요 아미노산 성분 분석 자료",
  },
  {
    title: "H-LMP(코디팜) 특성 및 SID 비교분석",
    href: "/analysis/sid",
    desc: "혈장단백 대비 H-LMP의 특성과 SID 비교 자료",
  },
  {
    title: "H-LMP(코디팜/아미노에프) 농장 실증사례",
    href: "/analysis/farm-case",
    desc: "PED·PRRS 농장 적용 사례 및 현장 실증 결과",
  },
  {
    title: "에그밀 성분분석",
    href: "/analysis/eggmeal",
    desc: "에그밀 제품의 주요 성분 및 영양 분석 자료",
  },
];

export default function AnalysisPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">분석 / 실증</h1>
          <p className="mt-4 text-lg text-gray-300">
            Analysis & Validation
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-gray-500">
          HOME &gt; 분석 / 실증
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-black text-[#0f3d2e]">
            H-LMP 분석 자료
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            엔팜의 H-LMP 저분자 단백질 제품의 면역학적 특성을 확인할 수 있는
            분석자료 및 농장 실증 결과입니다.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {analysisPages.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef7ee] text-2xl font-black text-[#0f3d2e]">
                {index + 1}
              </div>

              <h3 className="text-2xl font-black text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.desc}
              </p>

              <div className="mt-8 font-semibold text-[#0f3d2e]">
                자료 보기 →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}