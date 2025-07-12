import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Semua Tulisan</h1>
      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-xl text-black font-semibold mb-2">
            Belajar Next.js App Router
          </h2>
          <Link
            href="/blog/belajar-react"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Baca Selengkapnya
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-xl text-black font-semibold mb-2">
            Tips untuk Troubleshooting Error di Awal
          </h2>
          <Link
            href="/blog/tips-troubleshooting"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Baca Selengkapnya
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-xl text-black font-semibold mb-2">
            Rencana Proyek Tugas Besar
          </h2>
          <Link
            href="/blog/rencana-proyek"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Baca Selengkapnya
          </Link>
        </div>
      </div>
    </main>
  );
}
