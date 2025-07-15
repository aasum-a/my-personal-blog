import { posts } from "@/lib/data";
import { NextResponse } from "next/server";

/**
 * Handler untuk mengambil SATU artikel spesifik berdasarkan ID.
 * Method: GET
 * Endpoint: /api/posts/[id]
 */
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}

/**
 * Handler untuk MENGUPDATE artikel spesifik.
 * Method: PATCH (atau PUT)
 * Endpoint: /api/posts/[id]
 */
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }
  const { title, content } = await request.json();
  post.title = title ?? post.title;
  post.content = content ?? post.content;

  return NextResponse.json(post);
}

/**
 * Handler untuk MENGHAPUS artikel spesifik.
 * Method: DELETE
 * Endpoint: /api/posts/[id]
 */
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const postIndex = posts.findIndex((p) => p.id === params.id);

  if (postIndex === -1) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }
  posts.splice(postIndex, 1);

  return new NextResponse(null, { status: 204 });
}
