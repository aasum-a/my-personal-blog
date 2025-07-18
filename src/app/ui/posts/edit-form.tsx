"use client";

import { Post } from "@/lib/definitions";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditPostForm({ post }: { post: Post }) {
  // State untuk menyimpan nilai form
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await fetch(`/api/posts/${post.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    router.push("/dashboard/posts");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Judul
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full p-2 border rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Konten
        </label>
        <textarea
          id="content"
          name="content"
          rows={10}
          className="w-full p-2 border rounded-md"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className="flex gap-4">
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
        >
          Simpan Perubahan
        </button>
        <Link
          href="/posts"
          className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
        >
          Batal
        </Link>
      </div>
    </form>
  );
}
