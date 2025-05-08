import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  placeholder: string;
  error?: string;
  register?: UseFormRegisterReturn;
}

export const Input = ({ label, placeholder, register, error }: InputProps) => (
  <div className={error ? "pb-8" : "pb-4"}>
    <div className="flex justify-between items-center">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        {...register}
        className="bg-white border-2 p-1 w-48 text-blue-500 placeholder:text-blue-500"
      />
    </div>
    {error && <p className="text-red-500 text-xs mt-1 float-end">{error}</p>}
  </div>
);
