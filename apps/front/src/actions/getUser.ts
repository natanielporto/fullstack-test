"use server";

import { PersonProps } from "@/interfaces/PersonProps";

export async function getUser(userId: string): Promise<PersonProps> {
  const res = await fetch(`http://localhost:3001/users/${userId}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch user.");

  return res.json();
}
