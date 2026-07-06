import Image from "next/image";
import Link from "next/link";

const problemCards = [
  {
    label: "01",
    title: "임신 모돈의 골격과 지제 강화",
    desc: "임신 모돈의 골격과 지제를 강화하고 태아의 발육과 성장에 필요한 단백질과 칼슘을 공급합니다.",
  },
  {
    label: "02",
    title: "포유·이유자돈의 성장 기반 형성",
    desc: "포유·이유자돈의 튼튼한 골격 형성과 조혈기능 강화를 통해 면역과 증체 증진을 지원합니다.",
  },
  {
    label: "03",
    title: "돼지에게 필요한 동물성 단백질 공급",
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
  { label: "조단백", value: "22% 이상", note: "난황·난백·난막 유래 단백질원" },
  { label: "조회분", value: "63% 이하", note: "천연 유기태 칼슘 중심 미네랄 공급" },
  { label: "천연 유기태 칼슘", value: "23% 수준", note: "근골격 성장 및 조혈기능 강화 지원" },
  { label: "조지방", value: "10% 이상", note: "난황·난백 유래 지방, 유량 증가와 면역 강화 지원" },
  { label: "수분", value: "6% 이하", note: "고온 멸균건조로 위생 안전성 강화" },
  { label: "미네랄", value: "Zn · Mn · Fe · Mg", note: "어린 자돈의 면역과 증체에 필요한 미량성분" },
];

const processSteps = [
  { title: "원료 선별", desc: "연·파란 및 계란 유래 원료 선별" },
  { title: "고온 멸균", desc: "130℃ 이상, 5시간 이상 건조" },
  { title: "톤백 입고", desc: "수분 5% 이하 건조 원료 확보" },
  { title: "분쇄·선별", desc: "균일 입도 관리 및 이물 제거" },
  { title: "품질검사", desc: "살모넬라 전수검사 및 공인기관 검사" },
  { title: "제품 출고", desc: "20kg 포장 및 1톤백 공급" },
];

const benefits = [
  { title: "골격 성장", desc: "천연 유기태 칼슘 공급으로 모돈과 자돈의 근골격 형성을 지원합니다." },
  { title: "초기 증체", desc: "계란 단백질과 지방 공급으로 이유 후 초기 성장 회복을 돕습니다." },
  { title: "면역 강화", desc: "단백질·미네랄 공급으로 면역항체 형성과 조혈기능 강화를 지원합니다." },
  { title: "유량 증가", desc: "포유돈의 유선과 유량 관리에 필요한 에너지와 영양 공급을 돕습니다." },
  { title: "태아 성장", desc: "임신돈의 태아 발육과 고른 성장을 위한 칼슘·단백질 기반을 제공합니다." },
  { title: "출하체중 증가", desc: "육성·비육 구간의 근골격 발달과 증체를 통해 출하체중 개선을 목표로 합니다." },
];

const feedingRows = [
  {
    target: "이유전후 자돈",
    amount: "0.5~1%",
    effect: "근골격 형성 · 면역력 강화 · 이유 스트레스 완화",
  },
  {
    target: "이유~70일령",
    amount: "0.5~1%",
    effect: "초기 성장 촉진 · 70일령 체중 증가",
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
        <div className="absolute right-[-12%] top-[-25%] h-[520px] w-[520px] rounded-full bg-[#f7d76a]/20 blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-12%] h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-white/60">
              Product Detail
            </p>
            <h1 className="mt-4 text-6xl font-black leading-none">에그밀</h1>
            <p className="mt-5 text-2xl font-bold leading-snug text-[#f7d76a]">
              천연 유기태 칼슘과 계란 단백질을 동시에 공급하는 100% 통계란분
            </p>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80">
              임신돈·포유돈·이유자돈의 골격 성장, 초기 증체, 면역 강화를 위해 설계된 엔팜의 기능성 계란 단백질 원료입니다.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <HeroMetric value="100%" label="통계란분" />
              <HeroMetric value="23%" label="천연 유기태 칼슘" />
              <HeroMetric value="130℃+" label="고온 멸균/살모넬라균 제로" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-10 rounded-full bg-[#f7d76a]/20 blur-3xl" />
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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Problem Solution"
            title="이런 문제를 해결합니다"
            desc="에그밀은 단순 칼슘제가 아니라, 계란 유래 단백질과 천연 유기태 칼슘을 동시에 공급하는 성장 기반 솔루션입니다."
          />

          <div className="grid gap-5">
            {problemCards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0f3d2e] font-black text-white">
                    {card.label}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c49b16]">
                      Eggmeal Solution
                    </p>
                    <h3 className="mt-2 text-2xl font-black leading-snug text-[#0f3d2e]">
                      {card.title}
                    </h3>
                    <p className="mt-3 leading-7 text-gray-600">{card.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
            eyebrow="Core Value"
            title="에그밀의 핵심 가치"
            desc="골격·증체·면역에 필요한 세 가지 영양축을 하나의 원료로 공급합니다."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <ValueCard title="천연 유기태 칼슘" value="23%" desc="모돈의 골격과 자돈의 근골격 성장 기반을 강화합니다." />
            <ValueCard title="계란 단백질" value="22%+" desc="난황·난백·난막 유래 단백질로 면역항체 형성에 필요한 단백질원을 공급합니다." />
            <ValueCard title="고온 멸균 공정" value="130℃+" desc="고온 멸균건조와 품질검사를 통해 사료 원료의 위생 안전성을 높입니다." />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {featureCards.map((item) => (
              <article key={item.label} className="rounded-3xl bg-white p-7 text-center shadow-sm">
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
              title="주요 성분 및 기능"
              desc="계란 유래 단백질, 천연 유기태 칼슘, 지방, 미네랄을 동시에 공급하여 성장 단계별 영양 요구를 보완합니다."
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
            title="생산 공정 및 품질관리"
            desc="원료 선별부터 고온 멸균, 분쇄·선별, 품질검사까지 위생 안전성과 균일 품질을 기준으로 관리합니다."
            dark
          />

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <Image
              src="/eggmeal1.png"
              alt="에그밀 생산공정"
              width={1800}
              height={1000}
              className="h-auto w-full rounded-2xl"
            />
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
            <article key={benefit.title} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f3d2e] font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-2xl font-black text-[#0f3d2e]">{benefit.title}</h3>
              <p className="mt-4 leading-7 text-gray-600">{benefit.desc}</p>
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
            <div className="hidden grid-cols-[0.75fr_0.55fr_1fr] bg-[#0f3d2e] text-white md:grid">
              <div className="px-8 py-5 text-xl font-black">대상</div>
              <div className="border-l border-white/15 px-8 py-5 text-xl font-black">권장량</div>
              <div className="border-l border-white/15 px-8 py-5 text-xl font-black">기대 효과</div>
            </div>

            {feedingRows.map((row) => (
              <div key={row.target} className="grid border-b border-gray-200 last:border-b-0 md:grid-cols-[0.75fr_0.55fr_1fr]">
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
            (주)엔팜 에그밀
          </p>
          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            에그밀로 건강한 성장의 기반을 만드세요.
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

function ValueCard({ title, value, desc }: { title: string; value: string; desc: string }) {
  return (
    <article className="rounded-[2rem] bg-white p-8 shadow-sm">
      <p className="text-6xl font-black text-[#c49b16]">{value}</p>
      <h3 className="mt-5 text-2xl font-black text-[#0f3d2e]">{title}</h3>
      <p className="mt-4 leading-7 text-gray-600">{desc}</p>
    </article>
  );
}
