"use client";

import { editUser } from "@/actions/editUser";
import { getUser } from "@/actions/getUser";
import { useGlobalContext } from "@/context/globalContext";
import { Pencil } from "lucide-react";

export const EditButton = ({ userId }: { userId: string }) => {
  const { users, name, surname, country, birthday } = useGlobalContext();

  const handleEdit = async () => {
    if (confirm("Are you sure you want to change the infos of this user?")) {
      const userAlreadyExists = users.find((user) => user._id === userId);
      console.log("🚀 ~ handleEdit ~ userAlreadyExists:", userAlreadyExists);
      // const formData = new FormData();
      // formData.append("name", name);
      // formData.append("surname", surname);
      // formData.append("country", country);
      // formData.append(
      //   "birthday",
      //   `${birthday.month}/${birthday.day}/${birthday.year}`
      // );

      // await editUser({ userId, formData });
    }

    return;
  };

  return (
    <button
      onClick={handleEdit}
      className="p-2 rounded hover:bg-emerald-300 hover:text-white focus:outline-none"
      aria-label="Edit user"
    >
      <Pencil className="w-4 h-4" />
    </button>
  );
};
