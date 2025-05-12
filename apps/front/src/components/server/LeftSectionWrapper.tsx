"use server";

import { getCountries } from "@/actions/getCountries";

import { LeftSectionClient } from "../client/LeftSectionClient";

export async function LeftSectionWrapper() {
  const countries = await getCountries();

  return <LeftSectionClient countries={countries} />;
}
