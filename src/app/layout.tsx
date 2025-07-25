import type { Metadata } from "next";
import { worksans, merriweather } from "@/app/ui/fonts";
import "./globals.css";
import Navbar from "./ui/Navbar";

export const metadata: Metadata = {
  title: "aasum-a dev.",
  description: "Generated by Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${worksans.className} ${merriweather.className} bg-slate-100 text-slate-900`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
