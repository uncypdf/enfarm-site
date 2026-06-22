

import Image from "next/image";
import Link from "next/link";

const features = [
  "임신돈·포유돈 면역관리",
  "초유 품질 및 유질 개선 지원",
  "모체이행항체 유지 강화",
  "PED·PRRS 예방 프로그램 적용",
];

const effects = [
  {
    title: "1차 ABP 관리",
    desc: "분만 전·후 모돈의 항체 공백기를 관리하여 PED 위험을 줄이는 데 도움을 줌.",
  },
  {
    title: "초유 공급 강화",
    desc: "포유 초기 충분한 초유 공급과 모돈 유질 개선을 통해 포유자돈의 초기 면역 형성을 지원함.",
  },
  {
    title: "모돈 회복력 지원",
    desc: "분만 전후 스트레스와 질병 노출 상황에서 모돈의 면역 회복과 정상 포유를 지원함.",
  },
];

export default function AminoFPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/60">
            Product Detail
          </p>
          <h1 className="mt-4 text-5xl font-black">아미노에프</h1>
          <p className="mt-4 text-lg text-gray-300">Amino-F · 모돈용</p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-gray-500">
          HOME &gt; 제품소개 &gt; 아미노에프
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative h-[520px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#fafafa] to-[#f1f5f1] shadow-sm">
          <Image
            src="/pd1.png"
            alt="아미노에프 제품 이미지"
            fill
            priority
            className="object-contain p-8"
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#008000]">
            Sow Immune Solution
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-[#0f3d2e]">
            모돈의 1차 ABP 관리를 위한
            <br />
            H-LMP 저분자 단백질 솔루션
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            아미노에프는 임신돈·포유돈의 면역관리와 초유 품질 개선을 목적으로 한 모돈용 제품으로,
            분만 전·후 1차 ABP 관리와 PED 예방 프로그램에 적용되는 H-LMP 기반 기능성 제품입니다.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f7faf7] px-5 py-4 font-semibold text-[#0f3d2e]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/branches"
              className="rounded-xl bg-[#0f3d2e] px-7 py-4 font-bold text-white transition hover:bg-[#14533f]"
            >
              제품 문의하기
            </Link>
            <Link
              href="/products"
              className="rounded-xl border border-gray-300 px-7 py-4 font-bold text-gray-700 transition hover:border-[#008000] hover:text-[#008000]"
            >
              제품 목록으로
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f7faf7] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#008000]">
              Key Effects
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#0f3d2e]">
              주요 적용 효과
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {effects.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-2xl font-black text-[#0f3d2e]">
                  {item.title}
                </h3>
                <p className="mt-5 leading-7 text-gray-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-[#0f3d2e] px-10 py-14 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/60">
            STOP 2P Program
          </p>
          <h2 className="mt-4 text-4xl font-black">
            PED 예방을 위한 모돈 단계 솔루션
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-300">
            아미노에프는 분만 전·후 모돈의 1차 ABP 관리에 적용되어 포유자돈의 초기 면역 형성과
            PED 예방 프로그램의 기반 제품으로 활용됨.
          </p>
        </div>
      </section>
    </main>
  );
}