import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

// Tombol Hapus
export function DeletePostButton({
  id,
  onDelete,
}: {
  id: string;
  onDelete: (id: string) => void;
}) {
  return (
    <button
      onClick={() => onDelete(id)}
      className="p-2 text-gray-500 hover:text-red-600 rounded-md hover:bg-gray-100"
    >
      <span className="sr-only">Hapus</span>
      <TrashIcon className="w-5" />
    </button>
  );
}

// Tombol Edit
export function UpdatePostButton({ id }: { id: string }) {
  return (
    <Link
      href={`/posts/${id}/edit`}
      className="p-2 text-gray-500 hover:text-blue-600 rounded-md hover:bg-gray-100"
    >
      <span className="sr-only">Edit</span>
      <PencilIcon className="w-5" />
    </Link>
  );
}
