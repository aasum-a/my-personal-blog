import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { inter } from "@/app/ui/fonts";

export default function LandingPageContent() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 text-center shadow-md md:px-20">
      <h1
        className={`${inter.className} text-3xl font-bold text-gray-800 md:text-4xl`}
      >
        Selamat Datang!
      </h1>

      <p className="text-base text-gray-600 md:text-lg">
        Ini adalah situs web latihan yang saya bangun untuk program{" "}
        <strong>Jabar Digital Academy (JDA) 2025</strong>. Proyek ini dibuat
        menggunakan Next.js dan berfungsi sebagai tempat saya untuk mengerjakan
        tugas dan mempraktikkan konsep-konsep baru.
      </p>

      <Link
        href="/posts"
        className="flex items-center gap-3 self-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 md:text-base"
      >
        <span>Lihat Tugas 4 (CRUD)</span>{" "}
        <ArrowRightIcon className="w-5 md:w-6" />
      </Link>
    </div>
  );
}
