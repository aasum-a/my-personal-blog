import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { inter } from "@/app/ui/fonts";

export default function LogoBlog() {
  return (
    <div
      className={`${inter.className} flex flex-row items-center leading-none`}
    >
      <CodeBracketIcon className="h-12 w-12" />
      <p className="text-[36px]">LogoBlog</p>
      {/* alternatif: aasum-a.dev */}
    </div>
  );
}
