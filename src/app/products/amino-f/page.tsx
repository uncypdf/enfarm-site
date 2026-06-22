

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
    desc: "무유증 예방과 충분한 초유공급으로 모체이행항체(PED 등)의 지속성 강화를 지원함.",
  },
  {
    title: "2차 ABP 예방",
    desc: "이유 후 PRRSV에 대한 모체 이행항체 지속성 유지와 후천적 면역항체 형성 강화를 통해 PRRS 항체공백기 예방을 지원함.",
  },
  {
    title: "초기면역 및 회복력 향상",
    desc: "PED·PRRS 예방 및 감염돈군에 대한 초기면역강화로 회복력 향상을 지원함.",
  },
];

const components = [
  { label: "수분", value: "10.6%" },
  { label: "조단백", value: "79%" },
  { label: "조지방", value: "1.4%" },
  { label: "Na", value: "0.2%" },
  { label: "조회분", value: "1.54%" },
  { label: "햄철(Fe++)", value: "0.2%" },
];

const highlights = [
  { label: "저분자 단백질", value: "86% 이상" },
  { label: "분자량", value: "10kDa 이하" },
  { label: "펩신소화율", value: "90% 이상" },
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
            아미노에프는 100kDa 이상의 혈장과 혈구 유래 고분자 단백질을
            10kDa 이하의 저분자 펩타이드 및 아미노산화(H-LMP) 형태로 효소분해하여
            체내 흡수력 강화를 목표로 한 모돈용 H-LMP 단백질 솔루션입니다.
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

      <section className="border-y bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#008000]">
              H-LMP Process
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#0f3d2e]">
              핵심기능
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-600">
              100kDa 이상의 혈장과 혈구의 고분자 단백질을 10kDa 이하의 저분자 펩타이드 및
              아미노산화(H-LMP) 형태로 효소분해하여 체내흡수력을 강화.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 bg-[#f7faf7] p-8 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl font-black text-[#0f3d2e] shadow-sm">
                100+
              </div>
              <h3 className="text-2xl font-black text-[#0f3d2e]">
                고분자 단백질
              </h3>
              <p className="mt-4 leading-7 text-gray-600">
                혈장·혈구 유래 단백질<br />100kDa 이상
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0f3d2e] text-2xl font-black text-white shadow-sm">
                H-LMP
              </div>
              <h3 className="text-2xl font-black text-[#0f3d2e]">
                효소분해
              </h3>
              <p className="mt-4 leading-7 text-gray-600">
                저분자 펩타이드 및<br />아미노산화 전환
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-[#f7faf7] p-8 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl font-black text-[#008000] shadow-sm">
                10-
              </div>
              <h3 className="text-2xl font-black text-[#0f3d2e]">
                체내 흡수 강화
              </h3>
              <p className="mt-4 leading-7 text-gray-600">
                10kDa 이하 저분자화<br />빠른 흡수 및 이용
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7faf7] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#008000]">
                Composition
              </p>
              <h2 className="mt-4 text-4xl font-black text-[#0f3d2e]">
                주요 성분
              </h2>

              <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
                {components.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-2 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="bg-[#f7faf7] px-5 py-4 font-bold text-gray-700">
                      {item.label}
                    </div>
                    <div className="px-5 py-4 text-right text-xl font-black text-[#0f3d2e]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl bg-[#eef7ee] px-6 py-5"
                  >
                    <span className="font-bold text-[#0f3d2e]">{item.label}</span>
                    <span className="text-2xl font-black text-[#008000]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#008000]">
                Expected Effects
              </p>
              <h2 className="mt-4 text-4xl font-black text-[#0f3d2e]">
                기대효과
              </h2>

              <div className="mt-8 space-y-6">
                {effects.map((item, index) => (
                  <article key={item.title} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0f3d2e] font-black text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-[#0f3d2e]">
                          {item.title}
                        </h3>
                        <p className="mt-3 leading-7 text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
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