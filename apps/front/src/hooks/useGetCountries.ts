"use client";

import { useQuery } from "@tanstack/react-query";

type Country = {
  name: {
    common: string;
  };
  cca2: string;
};

export const useGetCountries = () => {
  return useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      if (!res.ok) throw new Error("Failed fetching countries.");
      return res.json();
    },
    staleTime: 1000 * 60 * 15,
  });
};
