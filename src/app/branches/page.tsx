export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">문의하기</h1>
          <p className="mt-4 text-lg text-gray-300">Contact Us</p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-gray-500">
          HOME &gt; 문의하기
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black text-[#0f3d2e]">
            제품 상담 및 문의
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            농장 상황, 사육단계, 질병 이력에 따라 적합한 제품과 적용 방법을 안내해드립니다.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="space-y-6">
            <div className="rounded-3xl bg-[#f7faf7] p-8">
              <h3 className="mb-8 text-2xl font-black text-[#0f3d2e]">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#008000]">
                    Address
                  </p>
                  <p className="mt-2 leading-7 text-gray-700">
                    경기도 평택시 청북읍 청북중앙로 315-5
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#008000]">
                    Phone
                  </p>
                  <p className="mt-2 text-gray-700">010-5232-3103</p>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#008000]">
                    Fax
                  </p>
                  <p className="mt-2 text-gray-700">031-683-2052</p>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#008000]">
                    E-mail
                  </p>
                  <p className="mt-2 text-gray-700">nfarm3103@naver.com</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
              <iframe
                title="엔팜 위치"
                src="https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%EC%B2%AD%EB%B6%81%EC%9D%8D%20%EC%B2%AD%EB%B6%81%EC%A4%91%EC%95%99%EB%A1%9C%20315-5&output=embed"
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black text-[#0f3d2e]">
              문의 양식
            </h3>
            <p className="mt-3 leading-7 text-gray-600">
              아래 내용을 작성한 뒤 문의하기 버튼을 누르면 이메일 작성 화면이 열립니다.
            </p>

            <form
              className="mt-10 space-y-5"
              action="mailto:nfarm3103@naver.com"
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-semibold text-gray-700">성함</span>
                  <input
                    name="성함"
                    type="text"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#008000]"
                    placeholder="성함을 입력하세요"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block font-semibold text-gray-700">회사명</span>
                  <input
                    name="회사명"
                    type="text"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#008000]"
                    placeholder="회사명 또는 농장명"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-semibold text-gray-700">연락처</span>
                  <input
                    name="연락처"
                    type="tel"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#008000]"
                    placeholder="010-0000-0000"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block font-semibold text-gray-700">이메일</span>
                  <input
                    name="이메일"
                    type="email"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#008000]"
                    placeholder="example@email.com"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block font-semibold text-gray-700">문의유형</span>
                <select
                  name="문의유형"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#008000]"
                  defaultValue="제품문의"
                >
                  <option>제품문의</option>
                  <option>농장상담</option>
                  <option>OEM/ODM</option>
                  <option>기타</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block font-semibold text-gray-700">문의내용</span>
                <textarea
                  name="문의내용"
                  required
                  rows={7}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#008000]"
                  placeholder="문의 내용을 입력하세요"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#0f3d2e] px-6 py-4 font-black text-white transition hover:bg-[#14533f]"
              >
                문의하기
              </button>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}