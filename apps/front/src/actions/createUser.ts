"use server";

import { revalidatePath } from "next/cache";

export async function createUser(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const surname = formData.get("surname") as string;
    const country = formData.get("country") as string;
    const birthday = formData.get("birthday") as string;

    if (!name) {
      return { success: false, errors: { name: "Name is required" } };
    }

    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, surname, country, birthday }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        errors: errorData.errors || {
          message: `Server error: ${response.status}`,
        },
      };
    }

    revalidatePath("/users");
    return { success: true, name, surname, country, birthday };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, errors: { message: "Failed to create user." } };
  }
}
