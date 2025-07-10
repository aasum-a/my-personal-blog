import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Semua Tulisan</h1>
      <ul className="mt-6 space-y-4 list-disc list-inside">
        <Link href="/blog/belajar-react">
          <li>Belajar Next.js App Router</li>
        </Link>
        <Link href="/blog/tips-troubleshooting">
          <li>Tips untuk Troubleshooting Error di Awal</li>
        </Link>
        <Link href="/blog/rencana-proyek">
          <li>Rencana Proyek Tugas Besar</li>
        </Link>
      </ul>
    </main>
  );
}
