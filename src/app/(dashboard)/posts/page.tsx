"use client";

import { useState, useEffect, FormEvent } from "react";
import { DeletePostButton, UpdatePostButton } from "@/app/ui/posts/button";
import toast from "react-hot-toast";

interface Post {
  id: string;
  title: string;
  content: string;
}

export default function ManagePostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch("/api/posts");
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Gagal mengambil data posts:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getPosts();
  }, []);

  const handleCreatePost = async (e: FormEvent) => {
    e.preventDefault();
    const creationPromise = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    toast.promise(creationPromise, {
      loading: "Menyimpan artikel...",
      success: async (response: Response) => {
        if (!response.ok) {
          throw new Error("Gagal menyimpan di server.");
        }
        const newPost: Post = await response.json();
        setPosts((prevPosts) => [...prevPosts, newPost]);
        setTitle("");
        setContent("");
        return <b>Artikel berhasil disimpan!</b>;
      },
      error: <b>Gagal menyimpan artikel.</b>,
    });
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus post ini?")) {
      return;
    }

    const deletionPromise = fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    toast.promise(deletionPromise, {
      loading: "Menghapus artikel...",
      success: () => {
        // Setelah berhasil, update state dan tampilkan pesan sukses
        setPosts(posts.filter((post) => post.id !== id));
        return <b>Artikel berhasil dihapus!</b>;
      },
      error: <b>Gagal menghapus artikel.</b>,
    });
  };

  if (isLoading) {
    return <div className="p-8">Memuat data artikel...</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8">Manajemen Artikel Blog</h1>

      <form
        onSubmit={handleCreatePost}
        className="mb-8 p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Tambah Artikel Baru</h2>
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md"
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
        >
          Simpan Artikel
        </button>
      </form>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Daftar Artikel</h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-4 border rounded-md flex justify-between items-start"
            >
              <div>
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p className="text-gray-600 mt-1">{post.content}</p>
              </div>
              <div className="flex items-center gap-2">
                <UpdatePostButton id={post.id} />
                <DeletePostButton id={post.id} onDelete={handleDeletePost} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
