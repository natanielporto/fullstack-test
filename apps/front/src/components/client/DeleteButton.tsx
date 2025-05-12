"use client";
import { X } from "lucide-react";
import { deleteUser } from "@/actions/deleteUser";

export const DeleteButton = ({ userId }: { userId: string }) => {
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this user?")) {
      return await deleteUser(userId);
    }

    return;
  };

  return (
    <button
      type="submit"
      onClick={handleDelete}
      className="p-2 rounded hover:bg-red-600 hover:text-white focus:outline-none"
      aria-label="Delete user"
    >
      <X className="w-4 h-4" />
    </button>
  );
};
