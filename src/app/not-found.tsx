import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 - Halaman Tidak Ditemukan</h2>
      <p>Mohon Maaf, kami tidak dapat menemukan halaman yang Anda cari.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
