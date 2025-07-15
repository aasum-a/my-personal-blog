// WAJIB: Tandai file ini sebagai Client Component
"use client";

// Impor hooks yang kita butuhkan dari React
import { useState, useEffect, FormEvent } from "react";

// Definisikan kembali tipe data Post di sini agar konsisten.
// Di aplikasi besar, ini bisa diletakkan di file definitions.ts
interface Post {
  id: string;
  title: string;
  content: string;
}

export default function ManagePostsPage() {
  // --- STATE MANAGEMENT ---
  // State untuk menyimpan daftar artikel dari API
  const [posts, setPosts] = useState<Post[]>([]);
  // State untuk menyimpan input dari form
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // State untuk loading (opsional, tapi praktik yang baik)
  const [isLoading, setIsLoading] = useState(true);

  // --- DATA FETCHING (READ) ---
  // Gunakan useEffect untuk mengambil data saat komponen pertama kali dimuat
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
  }, []); // Array kosong `[]` berarti efek ini hanya berjalan sekali saat mount

  // --- DATA MUTATION (CREATE) ---
  const handleCreatePost = async (e: FormEvent) => {
    e.preventDefault(); // Mencegah form me-refresh halaman

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    const newPost = await response.json();

    // Update state di frontend agar UI langsung berubah tanpa refresh
    setPosts([...posts, newPost]);

    // Kosongkan kembali form
    setTitle("");
    setContent("");
  };

  // --- DATA MUTATION (DELETE) ---
  const handleDeletePost = async (id: string) => {
    // Konfirmasi sebelum menghapus (praktik yang baik)
    if (!confirm("Apakah Anda yakin ingin menghapus post ini?")) {
      return;
    }

    await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    // Update state di frontend dengan mem-filter post yang dihapus
    setPosts(posts.filter((post) => post.id !== id));
  };

  if (isLoading) {
    return <div className="p-8">Memuat data artikel...</div>;
  }

  // --- RENDER UI (JSX) ---
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8">Manajemen Artikel Blog</h1>

      {/* Form untuk menambah artikel */}
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

      {/* Daftar artikel yang sudah ada */}
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
              <button
                onClick={() => handleDeletePost(post.id)}
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-400"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
