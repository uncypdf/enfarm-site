import Image from "next/image";
import Link from "next/link";

const problemCards = [
  {
    eyebrow: "Sow Skeleton",
    title: "임신 모돈의 골격과 지제 강화",
    desc: "임신 모돈의 골격과 지제를 강화하고 태아의 발육과 성장에 필요한 단백질과 칼슘을 공급합니다.",
  },
  {
    eyebrow: "Piglet Growth",
    title: "포유·이유자돈의 초기 성장",
    desc: "포유·이유자돈의 튼튼한 골격 형성과 조혈기능 강화를 통해 면역과 증체 증진을 지원합니다.",
  },
  {
    eyebrow: "Animal Protein",
    title: "동물성 단백질 공급",
    desc: "잡식성 동물인 돼지에게 필수적인 계란 유래 동물성 단백질 공급원으로 활용됩니다.",
  },
];

const featureCards = [
  { value: "100%", label: "통계란분", desc: "난황·난백·난막 유래 영양소" },
  { value: "23%", label: "천연 유기태 칼슘", desc: "근골격 성장과 조혈기능 지원" },
  { value: "22%+", label: "조단백", desc: "면역항체 형성 단백질원 공급" },
  { value: "130℃+", label: "고온 멸균", desc: "위생 안전성 강화 공정" },
];

const compositionRows = [
  { label: "조단백", value: "22% 이상", note: "난황·난백·난막 유래" },
  { label: "천연 유기태 칼슘", value: "23% 수준", note: "유기태 탄산칼슘 기반" },
  { label: "조지방", value: "10% 이상", note: "난황·난백 유래 지방" },
  { label: "수분", value: "6% 이하", note: "고온 멸균건조" },
  { label: "미네랄", value: "Zn · Mn · Fe", note: "어린 자돈의 면역과 증체 지원" },
  { label: "Mg", value: "함유", note: "근골격 성장 보조" },
];

const processSteps = [
  { title: "연·파란", caption: "원료 수거" },
  { title: "130℃ 이상 멸균", caption: "5시간 이상" },
  { title: "분쇄", caption: "균일 입도" },
  { title: "선별", caption: "이물 제거" },
  { title: "품질검사", caption: "살모넬라 전수" },
  { title: "출고", caption: "최종 포장" },
];

const benefits = [
  "골격 성장",
  "초기 증체",
  "면역 강화",
  "유량 증가",
  "태아 성장",
  "출하체중 증가",
];

const feedingRows = [
  {
    target: "이유자돈",
    amount: "0.5~1%",
    effect: "근골격 형성 · 면역 강화 · 이유 스트레스 완화",
  },
  {
    target: "육성·비육돈",
    amount: "0.5~1%",
    effect: "근골격 발달 · 증체 · 출하체중 증가",
  },
  {
    target: "임신돈·후보돈",
    amount: "0.3~0.5%",
    effect: "고른 태아 성장 · 모돈 골격 강화 · 경제수명 연장",
  },
  {
    target: "포유돈",
    amount: "0.5%",
    effect: "유선·유량 증가 · 재귀발정 촉진 · 면역항체 이행 강화",
  },
];

export default function EggmealPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#0f3d2e] text-white">
        <div className="absolute right-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[#f5c542]/20 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-white/60">
              Product Detail
            </p>
            <h1 className="mt-4 text-6xl font-black leading-none">에그밀</h1>
            <p className="mt-5 text-2xl font-bold text-[#f7d76a]">
              100% 통계란분 기반 천연 유기태 칼슘 & 계란 단백질
            </p>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80">
              기능성 계란단백질과 천연 유기태 칼슘을 동시에 공급하여 모돈과 자돈의 골격 성장, 증체, 면역 강화를 지원하는 엔팜의 기능성 단백질 원료입니다.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <HeroMetric value="100%" label="통계란분" />
              <HeroMetric value="23%" label="유기태 칼슘" />
              <HeroMetric value="22%+" label="조단백" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-6 rounded-full bg-[#f5c542]/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-sm">
              <Image
                src="/pd3.png"
                alt="에그밀 제품 이미지"
                width={900}
                height={900}
                priority
                className="mx-auto h-auto w-full max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader
          eyebrow="Problem Solution"
          title="이런 문제를 해결합니다"
          desc="에그밀은 모돈과 자돈의 골격·증체·면역을 동시에 관리해야 하는 농장에 적합합니다."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {problemCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#c49b16]">
                {card.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-black leading-snug text-[#0f3d2e]">
                {card.title}
              </h3>
              <p className="mt-5 leading-7 text-gray-600">{card.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#f1d878] bg-[#fff8d8] p-10 shadow-sm md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#a47a00]">
                Target Farm
              </p>
              <h2 className="mt-4 text-4xl font-black text-[#0f3d2e]">
                핵심 타겟
              </h2>
            </div>
            <p className="text-3xl font-black leading-snug text-[#0f3d2e] md:text-4xl">
              기능성 계란단백질과 천연 유기태 칼슘을 동시에 공급하여
              <br className="hidden md:block" /> 모돈과 자돈의 생산성 향상을 원하는 농장
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7faf7] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Product Features"
            title="제품 특징"
            desc="천연 계란 원료에서 유래한 단백질, 칼슘, 지방, 미네랄을 균형 있게 공급합니다."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {featureCards.map((item) => (
              <article key={item.label} className="rounded-3xl bg-white p-8 text-center shadow-sm">
                <p className="text-5xl font-black text-[#0f3d2e]">{item.value}</p>
                <h3 className="mt-4 text-xl font-black text-gray-900">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              eyebrow="Composition"
              title="주요 성분"
              desc="에그밀은 천연 유기태 칼슘과 계란 단백질을 동시에 공급하는 복합 기능성 원료입니다."
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            {compositionRows.map((row) => (
              <div key={row.label} className="grid border-b border-gray-200 last:border-b-0 md:grid-cols-[0.75fr_0.65fr_1fr]">
                <div className="bg-[#f7faf7] px-6 py-5 font-black text-[#0f3d2e]">
                  {row.label}
                </div>
                <div className="px-6 py-5 text-2xl font-black text-[#c49b16]">
                  {row.value}
                </div>
                <div className="px-6 py-5 leading-7 text-gray-600">
                  {row.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f3d2e] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Manufacturing Process"
            title="생산 공정"
            desc="고온 멸균, 분쇄, 선별, 품질검사를 거쳐 안전한 계란분 원료로 공급됩니다."
            dark
          />

          <div className="mt-12 hidden items-start justify-between gap-3 xl:flex">
            {processSteps.map((step, index) => (
              <div key={step.title} className="flex flex-1 items-start gap-3">
                <ProcessCard number={index + 1} title={step.title} caption={step.caption} />
                {index < processSteps.length - 1 && (
                  <div className="pt-8 text-4xl font-black text-white/50">→</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 xl:hidden">
            {processSteps.map((step, index) => (
              <div key={step.title}>
                <ProcessCard number={index + 1} title={step.title} caption={step.caption} />
                {index < processSteps.length - 1 && (
                  <div className="py-3 text-center text-3xl font-black text-white/50">↓</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/15 bg-white/10 p-8">
            <h3 className="text-2xl font-black">품질관리 기준</h3>
            <p className="mt-4 leading-8 text-white/75">
              살모넬라 전수검사와 월 1회 이상 공인기관 품질검사를 병행하여 원료의 위생 안전성과 품질 안정성을 관리합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader
          eyebrow="Expected Effects"
          title="기대 효과"
          desc="모돈과 자돈의 성장 단계별로 골격, 증체, 면역, 유량 개선을 지원합니다."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article key={benefit} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f3d2e] font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-2xl font-black text-[#0f3d2e]">{benefit}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7faf7] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Feeding Program"
            title="권장 급여 프로그램"
            desc="사육 단계와 농장 상황에 따라 급여량을 조절해 적용할 수 있습니다."
          />

          <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="hidden grid-cols-[0.7fr_0.55fr_1fr] bg-[#0f3d2e] text-white md:grid">
              <div className="px-8 py-5 text-xl font-black">대상</div>
              <div className="border-l border-white/15 px-8 py-5 text-xl font-black">권장량</div>
              <div className="border-l border-white/15 px-8 py-5 text-xl font-black">기대 효과</div>
            </div>

            {feedingRows.map((row) => (
              <div key={row.target} className="grid border-b border-gray-200 last:border-b-0 md:grid-cols-[0.7fr_0.55fr_1fr]">
                <div className="bg-white px-6 py-6 md:px-8">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c49b16] md:hidden">대상</p>
                  <p className="mt-1 text-2xl font-black text-[#0f3d2e] md:mt-0">{row.target}</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-6 md:border-l md:border-t-0 md:px-8">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c49b16] md:hidden">권장량</p>
                  <p className="mt-1 text-2xl font-black text-[#c49b16] md:mt-0">{row.amount}</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-6 leading-7 text-gray-600 md:border-l md:border-t-0 md:px-8">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c49b16] md:hidden">기대 효과</p>
                  <p className="mt-1 md:mt-0">{row.effect}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-2xl border border-[#f0d36c] bg-[#fff8d8] px-6 py-5 font-bold leading-7 text-[#8a6500]">
            ※ 권장 급여량은 일반 기준이며, 농장 환경 및 사양관리 조건에 따라 조절 가능합니다.
          </p>
        </div>
      </section>

      <section className="bg-[#0f3d2e] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center md:p-16">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-white/50">
            ENFARM EGGMEAL
          </p>
          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            Eggmeal로 건강한 성장의 기반을 만드세요.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
            천연 유기태 칼슘과 기능성 계란 단백질을 동시에 공급하여 모돈과 자돈의 건강한 성장과 생산성 향상을 지원합니다.
          </p>
          <Link
            href="/branches"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 text-lg font-black text-[#0f3d2e] transition hover:bg-[#fff8d8]"
          >
            문의하기
          </Link>
        </div>
      </section>
    </main>
  );
}

function HeroMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4">
      <p className="text-3xl font-black text-[#f7d76a]">{value}</p>
      <p className="mt-1 font-bold text-white/80">{label}</p>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  dark?: boolean;
}) {
  return (
    <div>
      <p className={`text-sm font-black uppercase tracking-[0.3em] ${dark ? "text-white/50" : "text-[#c49b16]"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-4xl font-black md:text-5xl ${dark ? "text-white" : "text-[#0f3d2e]"}`}>
        {title}
      </h2>
      <p className={`mt-5 max-w-3xl text-lg leading-8 ${dark ? "text-white/70" : "text-gray-600"}`}>
        {desc}
      </p>
    </div>
  );
}

function ProcessCard({ number, title, caption }: { number: number; title: string; caption: string }) {
  return (
    <div className="w-full rounded-3xl bg-white/10 p-6 text-center">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f7d76a] font-black text-[#0f3d2e]">
        {number}
      </div>
      <h3 className="mt-4 text-xl font-black text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/65">{caption}</p>
    </div>
  );
}