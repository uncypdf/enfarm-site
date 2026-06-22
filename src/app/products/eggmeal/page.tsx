import Link from "next/link";

export default function EggmealPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/60">
            Product Detail
          </p>
          <h1 className="mt-4 text-5xl font-black">에그밀</h1>
          <p className="mt-4 text-lg text-gray-300">Eggmeal · 기능성 단백질 원료</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-[#f7faf7] p-10">
          <h2 className="text-4xl font-black text-[#0f3d2e]">
            에그밀 상세페이지 준비중
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            에그밀 제품 상세 정보는 다음 단계에서 업데이트 예정입니다.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block rounded-xl bg-[#0f3d2e] px-7 py-4 font-bold text-white transition hover:bg-[#14533f]"
          >
            제품 목록으로
          </Link>
        </div>
      </section>
    </main>
  );
}