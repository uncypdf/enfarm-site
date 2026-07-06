import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "아미노에프",
    target: "임신, 포유돈",
    image: "/pd1.png",
    desc: "임신돈·포유돈의 면역 영양과 초유 품질 관리를 위한 1차 모돈 ABP예방 제품",
    points: ["무유증 예방 및 초유면역항체 강화", "이유체중 및 PSY 증대", "모체 이행항체 강화로 PED 예방"],
    tagline: "모돈 면역 및 초유 품질 관리 솔루션",
    href: "/products/amino-f",
  },
  {
    name: "코디팜",
    target: "포유, 이유자돈",
    image: "/pd2.png",
    desc: "자돈의 초기 면역력과 PRRS 예방 및 조기회복으로 2차 ABP 예방",
    points: ["PED·PRRS 예방 지원", "이유 전 후 스트레스 예방", "PRRS 초기 회복력 강화로 MSY 향상"],
    tagline: "자돈 초기 면역력 및 성장 관리 솔루션",
    href: "/products",
  },
  {
    name: "에그밀",
    target: "칼슘 + 단백질",
    image: "/pd3.png",
    desc: "100% 통계란 가공품",
    points: ["순수 계란의 천연칼슘과 단백질 동시 공급 효과", "골격과 증체를 통한 면역기능 강화"],
    tagline: "칼슘과 단백질 기반 원료",
    href: "/products",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">제품안내</h1>
          <p className="mt-4 text-lg text-gray-300">ENFARM PRODUCTS</p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-gray-500">
          HOME &gt; 제품안내
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <section className="mb-24 text-center">
          <h2 className="text-5xl font-black text-[#0f3d2e]">
            면역이 방역이다
          </h2>
          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-gray-700">
            엔팜은 면역항체 형성에 필수 원료인 H-LMP 저분자 단백질 기술을 기반으로 PED·PRRS 예방과
            생산성 향상을 위한 기능성 사료와 원료로 STOP 2P 양돈 솔루션을 제공합니다.
          </p>
        </section>


        <section className="mb-32">
          <h2 className="mb-12 text-4xl font-black text-gray-900">
            주요 제품군(사료 첨가제)
          </h2>

          <div
            className="grid gap-8"
            style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
          >
            {products.map((product) => (
              <article
                key={product.name}
                className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-96 bg-gradient-to-b from-[#fafafa] to-[#f1f5f1]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <p className="text-sm font-bold text-[#008000]">
                    {product.target}
                  </p>
                  <div className="mt-3 inline-flex rounded-full bg-[#eef7ee] px-3 py-1 text-xs font-semibold text-[#0f3d2e]">
                    {product.tagline}
                  </div>

                  <h3 className="mt-4 text-3xl font-black text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-5 min-h-[56px] leading-7 text-gray-600">
                    {product.desc}
                  </p>

                  <ul className="mt-8 min-h-[108px] space-y-3 border-t pt-6 text-gray-700">
                    {product.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                  <div className="mt-auto border-t pt-6">
                    <Link
                      href={product.href}
                      className="block w-full rounded-xl bg-[#0f3d2e] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#14533f]"
                    >
                      제품 자세히 보기
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <h2 className="mb-8 text-4xl font-black text-gray-900">
            STOP 2P 예방 프로그램
          </h2>

          <p className="mb-10 max-w-4xl text-lg leading-8 text-gray-700">
            STOP 2P 프로그램은 PED와 PRRS로 인한 생산성 저하를 최소화하기
            위한 엔팜의 통합 면역 솔루션입니다. 모돈, 포유돈, 자돈의
            사육단계별 상황에 따라 아미노에프와 코디팜을 적용합니다.
          </p>

          <div className="overflow-hidden rounded-3xl border bg-white">
            <Image
              src="/stop2p-program-v2.png"
              alt="아미노에프 코디팜 제품 및 프로그램 설명"
              width={1600}
              height={900}
              priority
              sizes="100vw"
              className="w-full"
            />
          </div>
        </section>

        <section className="mb-32 rounded-3xl bg-[#f7faf7] p-10">
          <h2 className="text-3xl font-black text-[#0f3d2e]">
            사육단계별 권장 사용량 및 프로그램 
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-xl font-bold">임신돈·모돈</h3>
              <p className="mt-4 leading-7 text-gray-600">
                아미노에프를 사료 급여량으로 적용하여 모돈의 1차 ABP를 예방하고 
                면역력이 확보된 풍부한 초유를 공급
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-xl font-bold">포유돈</h3>
              <p className="mt-4 leading-7 text-gray-600">
                임신말 급격한 태아성장과 분만스트레스로 
                사료섭취량 감소와 급격한 체력, 영양손실로 인한 1차 ABP예방(초유의 PED 중화항체 강화) 
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-xl font-bold">자돈</h3>
              <p className="mt-4 leading-7 text-gray-600">
                포유기부터 55일령 전후까지 
                코디팜을 통한 PRRS초기면역 강화 및 
                조기회복(빠른 중화 항체 형성)을 지원합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/pd13.png"
              alt="제품 및 프로그램 적용 도표"
              width={1600}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f3d2e] px-10 py-16 text-white">
          <h2 className="text-4xl font-black">제품 상담이 필요하신가요?</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            농장 상황, 사육단계, 질병 이력에 따라 적합한 제품과 적용 방법을
            안내해드립니다.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm text-gray-400">대표전화</p>
              <p className="mt-2 text-xl font-bold">031-683-2051</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">제품문의</p>
              <p className="mt-2 text-xl font-bold">010-5232-3103</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">E-mail</p>
              <p className="mt-2 text-xl font-bold">nfarm3103@naver.com</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}