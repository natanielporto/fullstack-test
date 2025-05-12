"use server";

export type CountryProps = {
  name: {
    common: string;
  };
  cca2: string;
};

export async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all", {
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!res.ok) throw new Error("Failed fetching countries.");
  return res.json();
}
