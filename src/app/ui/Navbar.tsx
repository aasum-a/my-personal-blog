import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex h-16 items-center justify-between p-4 sm:p-6 lg:p-8">
        <Link
          href="/"
          className="text-xl font-bold text-slate-600 hover:text-slate-400"
        >
          Personal Blog
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="/blog" className="text-slate-700 hover:text-slate-600">
            Blog
          </Link>
          <Link href="/about" className="text-slate-700 hover:text-slate-600">
            Tentang
          </Link>
        </div>
      </nav>
    </header>
  );
}
