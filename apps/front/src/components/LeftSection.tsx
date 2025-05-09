"use client";

import { useCallback, useMemo } from "react";
import { Input } from "./Input";
import { Select } from "./Select";
import { useGlobalContext } from "../context/globalContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, UserSchema } from "@mosano-test-fullstack/schemas";

export const LeftSection = () => {
  const { name, country, birthday } = useGlobalContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const calculateAge = useCallback((birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const birthday =
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() &&
        today.getDate() < birth.getDate());

    if (birthday) {
      age--;
    }

    return age;
  }, []);

  const ageInYears = useMemo(
    () => calculateAge(`${birthday.month}/${birthday.day}/${birthday.year}`),
    [birthday]
  );

  return (
    <section className="w-[50%]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name:"
          placeholder="name here"
          register={register("name")}
          error={errors.name?.message}
        />
        <Input
          label="Surname:"
          placeholder="surname here"
          register={register("surname")}
          error={errors.surname?.message}
        />
        <Select
          label="Countries"
          register={register("country")}
          error={errors.country?.message}
        />
        <Input
          label="Birthday:"
          placeholder="mm/dd/yyyy"
          register={register("birthday")}
          error={errors.birthday?.message}
        />

        <div className="flex justify-end mt-8 mb-8">
          <button type="submit" className="border-2 px-8 py-1">
            Save
          </button>
        </div>
      </form>

      <div>
        <h4 className="bg-green-100 text-gray-500 pl-1 rounded">
          {name && country && birthday.day && birthday.month && birthday.year
            ? `Hello ${name} from ${country}, on ${birthday.day} of ${birthday.month} you will have ${ageInYears}`
            : "No age calculated."}
        </h4>
      </div>
    </section>
  );
};
