import { deleteUser } from "@/actions/deleteUser";

export const useDeleteUser = () => {
  return async (userId: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      await deleteUser(userId);
    }
  };
};
