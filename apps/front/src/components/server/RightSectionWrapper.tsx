"use server";
import React from "react";

import { getUsers } from "@/actions/getUsers";

import { RightSectionClient } from "../client/RightSectionClient";

export async function RightSectionWrapper() {
  const users = await getUsers();

  return <RightSectionClient users={users} />;
}
