"use client";

import { CountryProps } from "@/actions/getCountries";

interface SelectProps {
  label: string;
  name: string;
  countries: CountryProps[] | undefined;
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}

export const Select = ({
  label,
  name,
  countries,
  value,
  error,
  onChange,
  required,
}: SelectProps) => (
  <div className={error ? "pb-8" : "pb-4"}>
    <div className="flex items-center justify-between relative">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="appearance-none bg-white border-2 p-1 w-48"
      >
        <option value="">Select a country</option>
        {countries
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
