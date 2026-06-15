

import Link from "next/link";

export default function ResourceDetailPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">자료실</h1>
          <p className="mt-4 text-lg text-gray-300">Resources</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="border-t border-gray-900">
          <div className="border-b border-gray-200 px-4 py-8">
            <h2 className="text-3xl font-black text-gray-900">
              H-LMP STOP 2P 솔루션 (아미노에프 · 코디팜)
            </h2>
            <div className="mt-5 flex flex-wrap gap-6 text-sm text-gray-500">
              <span>작성자 관리자</span>
              <span>작성일 2025-09-29</span>
              <span>조회 74</span>
            </div>
          </div>

          <div className="space-y-8 border-b border-gray-200 px-4 py-12 text-lg leading-8 text-gray-700">
            <p>
              H-LMP STOP 2P 솔루션은 아미노에프와 코디팜을 기반으로 PED·PRRS 예방과 농장 생산성 개선을 목적으로 하는 엔팜의 통합 면역 프로그램입니다.
            </p>

            <p>
              모돈, 포유돈, 자돈, 육성초기돈의 사육단계별 상황에 따라 제품을 적용하여 면역항체 형성, 조기 회복, 생산성 개선을 지원합니다.
            </p>

            <div className="rounded-3xl bg-[#f7faf7] p-8">
              <h3 className="text-2xl font-black text-[#0f3d2e]">첨부파일</h3>
              <p className="mt-3 text-gray-600">
                H-LMP STOP 2P 솔루션 B2B 제품소개서
              </p>

              <a
                href="/H-LMP STOP 2P 솔루션 b2b(케이피드).pdf"
                download
                className="mt-6 inline-block rounded-xl bg-[#0f3d2e] px-6 py-3 font-bold text-white transition hover:bg-[#14533f]"
              >
                PDF 다운로드
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/resources"
            className="rounded-xl border border-gray-300 px-6 py-3 font-bold text-gray-700 transition hover:border-[#008000] hover:text-[#008000]"
          >
            목록으로
          </Link>
        </div>
      </section>
    </main>
  );
}