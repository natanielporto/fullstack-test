"use client";

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  pattern?: string;
}

export const Input = ({
  label,
  placeholder,
  name,
  value,
  error,
  onChange,
  required,
  pattern,
}: InputProps) => (
  <div className={error ? "pb-8" : "pb-4"}>
    <div className="flex justify-between items-center">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        required={required}
        pattern={pattern}
        className="bg-white border-2 p-1 w-48 text-blue-500 placeholder:text-blue-500"
      />
    </div>
    {error && <p className="text-red-500 text-xs mt-1 float-end">{error}</p>}
  </div>
);
