"use client";

import { useGetCountries } from "@/hooks/useGetCountries";
import { UseFormRegisterReturn } from "react-hook-form";

interface SelectProps {
  label: string;
  register?: UseFormRegisterReturn;
  error?: string;
}

export const Select = ({ label, register, error }: SelectProps) => {
  const { data, isLoading, error: apiError } = useGetCountries();

  if (isLoading) return <div>Loading...</div>;
  if (apiError) return <div>Error fetching countries.</div>;

  return (
    <div className={error ? "pb-8" : "pb-4"}>
      <div className="flex items-center justify-between relative">
        <label htmlFor="country">{label}</label>
        <select
          id="country"
          {...register}
          className="appearance-none bg-white border-2 p-1 w-48"
        >
          <option value="">Countries</option>
          {data
            ?.slice()
            .sort((a, b) => a.name.common.localeCompare(b.name.common, "en-US"))
            .map((country) => (
              <option key={country.cca2} value={country.name.common}>
                {country.name.common}
              </option>
            ))}
        </select>
        <div className="pointer-events-none absolute right-0 top-0 text-blue-500 border-2 pt-1 pb-1 pr-2 pl-2 border-blue-500 bg-gray-200">
          ▼
        </div>
      </div>
      {error && <p className="text-red-500 text-xs mt-1 float-end">{error}</p>}
    </div>
  );
};
