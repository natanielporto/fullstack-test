"use client";

import { X } from "lucide-react";

import { useDeleteUser } from "@/hooks/useDeleteUser";

export const DeleteButton = ({ userId }: { userId: string }) => {
  const handleDelete = useDeleteUser();

  return (
    <button
      type="submit"
      onClick={() => handleDelete(userId)}
      className="p-2 rounded hover:bg-red-600 hover:text-white focus:outline-none"
      aria-label="Delete user"
    >
      <X className="w-4 h-4" />
    </button>
  );
};
