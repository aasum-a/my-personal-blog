import {
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { inter } from "@/app/ui/fonts";
import { fetchCardData } from "@/lib/data";

const iconMap = {
  posts: DocumentTextIcon,
  comments: ChatBubbleLeftRightIcon,
  views: EyeIcon,
  drafts: PencilIcon,
};

export default async function CardWrapper() {
  const { totalPosts, totalComments, totalViews, pendingDrafts } =
    await fetchCardData();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Card title="Total Artikel" value={totalPosts} type="posts" />
      <Card title="Total Komentar" value={totalComments} type="comments" />
      <Card title="Total Dilihat" value={totalViews} type="views" />
      <Card title="Draf Tersimpan" value={pendingDrafts} type="drafts" />
    </div>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "posts" | "comments" | "views" | "drafts";
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${inter.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl font-bold`}
      >
        {value}
      </p>
    </div>
  );
}
