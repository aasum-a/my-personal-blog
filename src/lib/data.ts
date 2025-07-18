import { Post } from "./definitions";

export let posts: Post[] = [
  {
    id: "1",
    title: "Selamat Datang di Blog Saya",
    content: "Ini adalah artikel pertama yang dibuat secara statis.",
  },
  {
    id: "2",
    title: "Mengenal Next.js Server Actions",
    content: "Server Actions memudahkan kita untuk memutasi data di server.",
  },
];

export async function fetchCardData() {
  try {
    const totalPostsPromise = Promise.resolve(posts.length);
    const totalCommentsPromise = Promise.resolve(128);
    const totalViewsPromise = Promise.resolve(15789);
    const pendingDraftsPromise = Promise.resolve(3);

    const data = await Promise.all([
      totalPostsPromise,
      totalCommentsPromise,
      totalViewsPromise,
      pendingDraftsPromise,
    ]);

    const totalPosts = data[0];
    const totalComments = data[1];
    const totalViews = data[2];
    const pendingDrafts = data[3];

    return {
      totalPosts,
      totalComments,
      totalViews,
      pendingDrafts,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}

export async function fetchPostById(id: string) {
  const post = posts.find((p) => p.id === id);
  return post;
}
