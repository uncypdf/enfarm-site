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

const usageRows = [
  {
    target: "임신/포유기",
    product: "아미노 에프",
    content: [
      "임신돈 : 사료급여량의 0.2%",
      "포유돈 : 사료급여량의 0.3%",
      "(고능력 품종이나 12두 이상 포유시 0.1% 증량)",
    ],
  },
  {
    target: "포유자돈",
    product: "코디팜",
    content: ["사료급여량의 0.5%", "(PED 발생시 1%로 증량)"],
  },
  {
    target: "이유자돈",
    product: "코디팜",
    content: ["사료급여량의 0.3%", "(PRRS 양성농장 0.5%로 증량)"],
  },
  {
    target: "육성초기(젖돈)",
    product: "코디팜",
    content: ["사료급여량의 0.2%", "(PRRS 감염시 0.4%로 증량)"],
  },
  {
    target: "비육돈",
    product: ["아미노 에프", "코디팜"],
    content: [
      "아미노 에프 : 사료급여량의 0.2%",
      "(회장염 발생시 0.3%로 증량)",
      "코디팜 : 사료급여량의 0.1%",
      "(호흡기 발생시 0.2%로 증량)",
    ],
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

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-[#f7faf7] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#008000]">
              Recommended Farms
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#0f3d2e]">
              이런 농장에 추천합니다
            </h2>

            <ul className="mt-8 space-y-4 text-lg leading-8 text-gray-700">
              <li>- PED, PRRS를 예방하고자 하는 농가</li>
              <li>- 초기 폐사율이 높은 농가</li>
              <li>- 모돈의 수익성을 개선하고 싶은 농가</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#008000]">
              Field Issues
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#0f3d2e]">
              현장에서 자주 발생하는 문제
            </h2>

            <ul className="mt-8 space-y-4 text-lg leading-8 text-gray-700">
              <li>- 모돈 사료섭취 감소, 체중 감소, 무유증</li>
              <li>- 모돈 유질 저하로 인한 자돈 설사병</li>
              <li>- 자돈의 면역 항체 감소</li>
            </ul>
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

      <section className="bg-white px-6 py-24">
      <section className="bg-[#f7faf7] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#0b55b7]">
              Usage Guide
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#0f3d2e] md:text-5xl">
              사용 방법
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Amino-F와 Codifarm의 권장 급여 방법은 아래와 같습니다.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-xl">
            <div className="hidden grid-cols-[1.1fr_0.9fr_1.8fr] bg-[#0b55b7] text-white md:grid">
              <div className="px-8 py-5 text-2xl font-black">급여대상/시기</div>
              <div className="border-l border-white/20 px-8 py-5 text-2xl font-black">제품</div>
              <div className="border-l border-white/20 px-8 py-5 text-2xl font-black">내용</div>
            </div>

            <div className="divide-y divide-gray-200">
              {usageRows.map((row) => (
                <div
                  key={row.target}
                  className="grid gap-0 md:grid-cols-[1.1fr_0.9fr_1.8fr]"
                >
                  <div className="border-b border-gray-200 bg-[#f6f9ff] px-6 py-6 md:border-b-0 md:px-8 md:py-8">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0b55b7] md:hidden">
                      급여대상/시기
                    </p>
                    <p className="mt-2 text-3xl font-black text-[#0f3d2e] md:mt-0">
                      {row.target}
                    </p>
                  </div>

                  <div className="border-b border-gray-200 px-6 py-6 md:border-b-0 md:border-l md:px-8 md:py-8">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0b55b7] md:hidden">
                      제품
                    </p>
                    {Array.isArray(row.product) ? (
                      <div className="mt-2 flex flex-col gap-3 md:mt-0">
                        {row.product.map((item) => (
                          <span
                            key={item}
                            className="inline-flex w-fit rounded-full bg-[#eef5ff] px-4 py-2 text-lg font-black text-[#0b55b7]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-2 md:mt-0">
                        <span className="inline-flex rounded-full bg-[#eef5ff] px-4 py-2 text-lg font-black text-[#0b55b7]">
                          {row.product}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="px-6 py-6 md:border-l md:px-8 md:py-8">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0b55b7] md:hidden">
                      내용
                    </p>
                    <ul className="mt-2 space-y-3 md:mt-0">
                      {row.content.map((line, index) => {
                        const isSub = line.startsWith("(");
                        return (
                          <li
                            key={`${row.target}-${index}`}
                            className={isSub ? "pl-6 text-lg leading-8 text-gray-500" : "text-2xl font-semibold leading-9 text-gray-900"}
                          >
                            {isSub ? line : `• ${line}`}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[#dbeafe] bg-[#f6f9ff] px-6 py-5 text-base leading-7 text-gray-600 md:px-8">
            <span className="font-black text-[#0b55b7]">※ 안내</span> 상기 급여량은 일반적인 권장량이며, 농장 환경 및 질병 상황에 따라 수의사와 상담 후 조절해 주세요.
          </div>
        </div>
      </section>
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#0b55b7]">
              STOP 2P Mechanism
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-gray-950 md:text-5xl">
              STOP 2P 프로그램으로
              <br />
              이유 후 면역 공백을 최소화합니다
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-600">
              선천면역 유지와 후천면역 항체 생성을 빠르게 유도하여 이유 후 질병 리스크를 줄이고 생산성 향상을 지원합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl md:p-10">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-[#eef5ff] p-5">
                <p className="text-sm font-bold text-[#0b55b7]">선천적 면역</p>
                <h3 className="mt-2 text-xl font-black text-gray-900">
                  모체이행 항체 유지
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  이유 후 급감하는 모체이행항체 유지 기간을 관리.
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff5e8] p-5">
                <p className="text-sm font-bold text-[#f97316]">2차 ABP 구간</p>
                <h3 className="mt-2 text-xl font-black text-gray-900">
                  초기면역 항체 형성 필요기간
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  코디팜 급여로 2차 ABP 극복을 지원.
                </p>
              </div>

              <div className="rounded-2xl bg-[#edf7ef] p-5">
                <p className="text-sm font-bold text-[#008000]">후천적 면역</p>
                <h3 className="mt-2 text-xl font-black text-gray-900">
                  백신·감염 후 항체 강화
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  후천면역 항체 생성 및 강화 기간을 안정적으로 연결.
                </p>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              <Image
                src="/stop2p-mechanism.png"
                alt="STOP 2P Mechanism"
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-[#dbeafe] bg-[#f8fbff] p-8">
                <p className="text-sm font-bold text-gray-500">
                  7년간 국내 양돈농장 자료 요약
                </p>
                <h3 className="mt-2 text-2xl font-black text-[#0b55b7]">
                  A.B.P와 생산성 지표
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0b55b7] text-xl font-black text-white">
                        1st
                      </div>
                      <div>
                        <p className="text-2xl font-black text-[#0b55b7]">A.B.P : PED &gt;&gt; PSY</p>
                        <p className="mt-1 text-gray-600">분만 전·후 1차 ABP 관리 구간</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f97316] text-xl font-black text-white">
                        2nd
                      </div>
                      <div>
                        <p className="text-2xl font-black text-[#f97316]">A.B.P : PRRS &gt;&gt; MSY</p>
                        <p className="mt-1 text-gray-600">이유 후 2차 ABP 관리 구간</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-5 rounded-2xl bg-[#edf5ff] p-4 text-sm font-bold text-[#0b55b7]">
                  1차 ABP를 안정적으로 넘겨야 2차 ABP 극복 기반이 형성됨.
                </p>
              </div>

              <div className="rounded-3xl border border-[#e9d5ff] bg-[#fbf7ff] p-8">
                <p className="text-sm font-bold text-gray-500">PRRS Immune Response</p>
                <h3 className="mt-2 text-2xl font-black text-[#6d28d9]">
                  PRRSV의 약하고 지연된 면역반응
                </h3>

                <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-lg font-black text-gray-900">
                    감염 후 3~4주 후에 방어면역이 형성
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>- 초기 면역항체 형성 지연 시 이유 후 피해 심화</li>
                    <li>- 빠른 선제적 방어 항체 형성이 핵심</li>
                  </ul>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl bg-[#ede9fe] px-4 py-3 text-center text-sm font-bold text-[#6d28d9]">
                      ELISA 항체
                    </div>
                    <div className="rounded-xl bg-[#dcfce7] px-4 py-3 text-center text-sm font-bold text-[#15803d]">
                      중화항체
                    </div>
                    <div className="rounded-xl bg-[#dbeafe] px-4 py-3 text-center text-sm font-bold text-[#0b55b7]">
                      혈중 바이러스
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-[#fed7aa] bg-[#fff7ed] p-8">
              <h3 className="text-center text-2xl font-black text-gray-950">
                STOP 2P 프로그램의 핵심 포인트
              </h3>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-xl font-black text-[#0b55b7]">선천면역 유지 & 강화</p>
                  <p className="mt-3 leading-7 text-gray-600">
                    Amino-F로 H-LMP를 보충하여 모체이행항체 유지 기간 연장.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-xl font-black text-[#f97316]">초기면역 빠른 형성</p>
                  <p className="mt-3 leading-7 text-gray-600">
                    Codifarm으로 2차 ABP 극복과 초기면역 항체 형성 가속화.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-xl font-black text-[#15803d]">생산성 향상</p>
                  <p className="mt-3 leading-7 text-gray-600">
                    이유 후 폐사율 감소와 MSY 개선을 목표로 적용.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              ※ 1st A.B.P(PED/PSY) 관리에는 Amino-F를, 2nd A.B.P(PRRS/MSY) 극복에는 Codifarm을 추천합니다.
            </p>
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