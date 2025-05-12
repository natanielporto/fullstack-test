"use server";

import { PersonProps } from "@/interfaces/PersonProps";

export async function getUsers(): Promise<PersonProps[]> {
  const res = await fetch("http://localhost:3001/users", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch users.");
  return res.json();
}
