import { fetchPostById } from "@/lib/data";
import EditPostForm from "@/app/ui/posts/edit-form";
import { notFound } from "next/navigation";
import { Post } from "@/lib/definitions";

type PageProps = {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function EditPostPage({ params }: PageProps) {
  const id = params.id;
  const post: Post | undefined = await fetchPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Artikel</h1>
      <EditPostForm post={post} />
    </div>
  );
}
