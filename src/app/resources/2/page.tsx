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
              PED(돼지 유행성 설사병) 완전 정리
            </h2>
            <div className="mt-5 flex flex-wrap gap-6 text-sm text-gray-500">
              <span>작성자 관리자</span>
              <span>작성일 2026-03-23</span>
              <span>조회 2</span>
            </div>
          </div>

          <div className="space-y-8 border-b border-gray-200 px-4 py-12 text-lg leading-8 text-gray-700">
            <p>PED(돼지 유행성 설사병)는 포유자돈 폐사율과 농장 생산성에 직접적인 영향을 줄 수 있는 바이러스성 질병입니다.</p>
            <p>본 자료는 PED의 주요 증상, 발생 양상, 예방 관리 포인트를 정리한 참고 자료입니다.</p>

            <div className="rounded-3xl bg-[#f7faf7] p-8">
              <h3 className="text-2xl font-black text-[#0f3d2e]">첨부파일</h3>
              <p className="mt-3 text-gray-600">PDF를 public/resources 폴더에 업로드한 뒤 링크만 수정하면 됩니다.</p>
              <a
                href="/resources/ped-guide.pdf"
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