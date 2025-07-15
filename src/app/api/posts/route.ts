import { posts } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(posts);
}

/**
 * Handler untuk MENAMBAH artikel baru.
 * Method: POST
 * Endpoint: /api/posts
 */
export async function POST(request: Request) {
  const { title, content } = await request.json();
  const newPost = {
    id: Date.now().toString(),
    title,
    content,
  };
  posts.push(newPost);

  return NextResponse.json(newPost, { status: 201 });
}
