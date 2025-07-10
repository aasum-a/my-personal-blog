import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex gap-4">
        <Link href="/" className="hover:text-gray-300">
          Beranda
        </Link>
        <Link href="/blog" className="hover:text-gray-300">
          Blog
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          Tentang Saya
        </Link>
      </nav>
    </header>
  );
}
