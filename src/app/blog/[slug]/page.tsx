import Link from "next/link";

export default async function DetailArtikelPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Detail Artikel: {params.slug}</h1>
      <p className="mt-4">
        Ini adalah halaman untuk artikel dengan slug "{params.slug}". Nantinya,
        konten lengkap dari database akan ditampilkan di sini.
      </p>
      <Link
        href="/blog"
        className="text-blue-500 hover:underline mt-6 inline-block"
      >
        &larr; Kembali ke semua tulisan
      </Link>
    </main>
  );
}
