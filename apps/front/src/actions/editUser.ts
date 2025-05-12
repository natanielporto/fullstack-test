"use server";

import { userSchema } from "@mosano-test-fullstack/schemas";
import { revalidatePath } from "next/cache";

import { CreateUserResponse } from "./createUser";

type EditUserProps = {
  userId: string;
  formData: FormData;
};

export async function editUser({
  userId,
  formData,
}: EditUserProps): Promise<CreateUserResponse> {
  const rawData = {
    name: formData.get("name")?.toString() || "",
    surname: formData.get("surname")?.toString() || "",
    country: formData.get("country")?.toString() || "",
    birthday: formData.get("birthday")?.toString() || "",
  };

  const parsed = userSchema.safeParse(rawData);

  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  await fetch(`http://localhost:3001/users/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parsed.data),
  });

  revalidatePath("/users");

  return { success: true, data: parsed.data };
}
