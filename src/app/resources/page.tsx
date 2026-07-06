import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "H-LMP STOP 2P 솔루션 (아미노에프 · 코디팜)",
    author: "관리자",
    date: "2025-09-29",
    views: 74,
    href: "/resources/1",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0f3d2e] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">자료실</h1>
          <p className="mt-4 text-lg text-gray-300">Resources</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl font-black">자료</h2>

          <div className="flex gap-2">
            <select className="h-12 rounded-md border border-gray-300 px-4">
              <option>제목</option>
              <option>작성자</option>
            </select>

            <input
              type="text"
              placeholder="검색어 입력"
              className="h-12 w-64 rounded-md border border-gray-300 px-4"
            />
          </div>
        </div>

        <div className="overflow-hidden border-t border-gray-800">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 text-left">
                <th className="w-24 px-5 py-6">번호</th>
                <th className="px-5 py-6">제목</th>
                <th className="w-32 px-5 py-6">작성자</th>
                <th className="w-40 px-5 py-6">작성일</th>
                <th className="w-24 px-5 py-6">조회</th>
              </tr>
            </thead>

            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-5 py-8">{post.id}</td>
                  <td className="px-5 py-8">
                    <Link href={post.href} className="font-medium hover:text-[#008000]">
                      {post.title}
                    </Link>
                  </td>
                  <td className="px-5 py-8">{post.author}</td>
                  <td className="px-5 py-8">{post.date}</td>
                  <td className="px-5 py-8">{post.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-lg">
          <button>«</button>
          <button>‹</button>
          <span className="font-bold">1</span>
          <button>›</button>
          <button>»</button>
        </div>
      </section>
    </main>
  );
}