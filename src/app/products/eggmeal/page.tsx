import Link from "next/link";

export default function EggmealPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/60">
            Product Detail
          </p>
          <h1 className="mt-4 text-5xl font-black">에그밀</h1>
          <p className="mt-4 text-xl font-semibold text-white/90">
            100% 통계란분 기반 천연 유기태 칼슘 & 계란 단백질
          </p>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            골격 성장, 증체, 면역 강화에 최적화된 천연 동물성 단백질과 칼슘을 공급합니다.
          </p>
        </div>
      </section>

      {/* Problem Solution Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl font-bold text-[#0f3d2e] mb-10">
          이런 문제를 해결합니다
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-3xl bg-white shadow-md p-8 flex flex-col items-center text-center">
            <span className="text-lg font-bold text-[#0f3d2e] mb-4">
              임신 모돈의 골격 강화
            </span>
            <p className="text-gray-600">
              임신·수유기 모돈의 칼슘 소모로 인한 골격 약화 및 생산성 저하를 예방합니다.
            </p>
          </div>
          {/* Card 2 */}
          <div className="rounded-3xl bg-white shadow-md p-8 flex flex-col items-center text-center">
            <span className="text-lg font-bold text-[#0f3d2e] mb-4">
              포유·이유자돈의 성장
            </span>
            <p className="text-gray-600">
              성장기 자돈의 골격 형성과 증체, 면역력 강화에 필수적인 영양소를 균형 있게 제공합니다.
            </p>
          </div>
          {/* Card 3 */}
          <div className="rounded-3xl bg-white shadow-md p-8 flex flex-col items-center text-center">
            <span className="text-lg font-bold text-[#0f3d2e] mb-4">
              동물성 단백질 공급
            </span>
            <p className="text-gray-600">
              소화흡수율이 높은 기능성 계란 단백질로 성장과 면역력 증진에 도움을 줍니다.
            </p>
          </div>
        </div>
      </section>

      {/* 핵심 타겟 Section */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-3xl bg-[#fffbea] px-8 py-12 flex flex-col items-center shadow">
          <h3 className="text-xl font-bold text-[#0f3d2e] mb-4">핵심 타겟</h3>
          <p className="text-center text-lg text-[#0f3d2e] font-semibold">
            기능성 계란단백질과 천연 유기태 칼슘을 동시에 공급하여<br />
            모돈과 자돈의 생산성 향상을 원하는 농장
          </p>
        </div>
      </section>

      {/* 제품 특징 Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl font-bold text-[#0f3d2e] mb-10">제품 특징</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Feature Card 1 */}
          <div className="rounded-3xl bg-white shadow-md p-8 flex flex-col items-center text-center">
            <span className="text-3xl font-black text-[#0f3d2e] mb-2">100%</span>
            <span className="text-lg font-bold text-[#0f3d2e]">통계란분</span>
          </div>
          {/* Feature Card 2 */}
          <div className="rounded-3xl bg-white shadow-md p-8 flex flex-col items-center text-center">
            <span className="text-3xl font-black text-[#0f3d2e] mb-2">23%</span>
            <span className="text-lg font-bold text-[#0f3d2e]">천연 유기태 칼슘</span>
          </div>
          {/* Feature Card 3 */}
          <div className="rounded-3xl bg-white shadow-md p-8 flex flex-col items-center text-center">
            <span className="text-3xl font-black text-[#0f3d2e] mb-2">22%+</span>
            <span className="text-lg font-bold text-[#0f3d2e]">조단백</span>
          </div>
          {/* Feature Card 4 */}
          <div className="rounded-3xl bg-white shadow-md p-8 flex flex-col items-center text-center">
            <span className="text-lg font-bold text-[#0f3d2e] mb-2">130℃ 이상</span>
            <span className="text-lg font-bold text-[#0f3d2e]">고온 멸균</span>
          </div>
        </div>
      </section>

      {/* 주요 성분 Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl font-bold text-[#0f3d2e] mb-10">주요 성분</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          <div className="rounded-3xl bg-white shadow p-5 flex flex-col items-center">
            <span className="font-bold text-[#0f3d2e] mb-1">조단백</span>
            <span className="text-[#0f3d2e] text-sm">22% 이상</span>
          </div>
          <div className="rounded-3xl bg-white shadow p-5 flex flex-col items-center">
            <span className="font-bold text-[#0f3d2e] mb-1">천연 유기태 칼슘</span>
            <span className="text-[#0f3d2e] text-sm">23%</span>
          </div>
          <div className="rounded-3xl bg-white shadow p-5 flex flex-col items-center">
            <span className="font-bold text-[#0f3d2e] mb-1">조지방</span>
            <span className="text-[#0f3d2e] text-sm">10% 이상</span>
          </div>
          <div className="rounded-3xl bg-white shadow p-5 flex flex-col items-center">
            <span className="font-bold text-[#0f3d2e] mb-1">수분</span>
            <span className="text-[#0f3d2e] text-sm">6% 이하</span>
          </div>
          <div className="rounded-3xl bg-white shadow p-5 flex flex-col items-center">
            <span className="font-bold text-[#0f3d2e] mb-1">Zn · Mn · Fe</span>
            <span className="text-[#0f3d2e] text-sm">함유</span>
          </div>
          <div className="rounded-3xl bg-white shadow p-5 flex flex-col items-center">
            <span className="font-bold text-[#0f3d2e] mb-1">Mg</span>
            <span className="text-[#0f3d2e] text-sm">함유</span>
          </div>
        </div>
      </section>

      {/* 생산 공정 Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl font-bold text-[#0f3d2e] mb-10">생산 공정</h2>
        <div className="flex flex-col items-center">
          {/* Flow */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <ProcessBox>연·파란</ProcessBox>
            <Arrow />
            <ProcessBox>130℃ 이상 멸균</ProcessBox>
            <Arrow />
            <ProcessBox>분쇄</ProcessBox>
            <Arrow />
            <ProcessBox>선별</ProcessBox>
            <Arrow />
            <ProcessBox>품질검사</ProcessBox>
            <Arrow />
            <ProcessBox>출고</ProcessBox>
          </div>
          {/* Info box */}
          <div className="mt-8 rounded-2xl bg-[#eafaf1] px-6 py-5 max-w-2xl text-center text-[#0f3d2e] font-medium text-base shadow">
            살모넬라 전수검사와 공인기관 품질검사를 통해 안전성과 품질을 보장합니다.
          </div>
        </div>
      </section>

      {/* 기대 효과 Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl font-bold text-[#0f3d2e] mb-10">기대 효과</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          <div className="rounded-3xl bg-white shadow p-6 flex flex-col items-center text-center">
            <span className="text-[#0f3d2e] font-bold">골격 성장</span>
          </div>
          <div className="rounded-3xl bg-white shadow p-6 flex flex-col items-center text-center">
            <span className="text-[#0f3d2e] font-bold">초기 증체</span>
          </div>
          <div className="rounded-3xl bg-white shadow p-6 flex flex-col items-center text-center">
            <span className="text-[#0f3d2e] font-bold">면역 강화</span>
          </div>
          <div className="rounded-3xl bg-white shadow p-6 flex flex-col items-center text-center">
            <span className="text-[#0f3d2e] font-bold">유량 증가</span>
          </div>
          <div className="rounded-3xl bg-white shadow p-6 flex flex-col items-center text-center">
            <span className="text-[#0f3d2e] font-bold">태아 성장</span>
          </div>
          <div className="rounded-3xl bg-white shadow p-6 flex flex-col items-center text-center">
            <span className="text-[#0f3d2e] font-bold">출하체중 증가</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0f3d2e] py-20">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Eggmeal로 건강한 성장의 기반을 만드세요.
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl">
            천연 유기태 칼슘과 기능성 계란 단백질을 동시에 공급하여<br />
            모돈과 자돈의 건강한 성장과 생산성 향상을 경험하세요.
          </p>
          <Link
            href="/branches"
            className="inline-block rounded-xl bg-white px-8 py-4 font-bold text-[#0f3d2e] text-lg transition hover:bg-[#f7faf7]"
          >
            문의하기
          </Link>
        </div>
      </section>
    </main>
  );
}

function ProcessBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-white shadow p-4 px-6 min-w-[100px] text-center font-bold text-[#0f3d2e] flex items-center justify-center text-base">
      {children}
    </div>
  );
}

function Arrow() {
  return (
    <span className="mx-2 md:mx-1 text-[#0f3d2e] text-2xl select-none">→</span>
  );
}