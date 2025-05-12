"use server";

import { UserSchema, userSchema } from "@mosano-test-fullstack/schemas";
import { revalidatePath } from "next/cache";

export type CreateUserResponse =
  | {
      success: true;
      data: UserSchema;
    }
  | { success: false; errors: Record<string, string[]> };

export async function createUser(
  formData: FormData
): Promise<CreateUserResponse> {
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

  await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parsed.data),
  });

  revalidatePath("/users");

  return { success: true, data: parsed.data };
}
