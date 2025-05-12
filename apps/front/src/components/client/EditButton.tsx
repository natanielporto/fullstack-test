"use client";

import { Pencil } from "lucide-react";

import { useEditUser } from "@/hooks/useEditUser";

export const EditButton = ({ userId }: { userId: string }) => {
  const handleEdit = useEditUser();

  return (
    <button
      onClick={() => handleEdit(userId)}
      className="p-2 rounded hover:bg-emerald-300 hover:text-white focus:outline-none"
      aria-label="Edit user"
    >
      <Pencil className="w-4 h-4" />
    </button>
  );
};
