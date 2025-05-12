"use client";

import { createUser } from "@/actions/createUser";
import { CountryProps } from "@/actions/getCountries";
import { calculateAge } from "@/helpers/calculateAge";

import { useGlobalContext } from "../../context/globalContext";
import { Input } from "./Input";
import { Select } from "./Select";

interface LeftSectionClientProps {
  countries: CountryProps[];
}

export const LeftSectionClient = ({ countries }: LeftSectionClientProps) => {
  const {
    // users,
    name,
    setName,
    surname,
    setSurname,
    country,
    setCountry,
    birthday,
    setBirthday,
  } = useGlobalContext();

  const splitBirthday = birthday.split("/");
  const [month, day] = splitBirthday;

  const handleSubmit = async (formData: FormData) => {
    const result = await createUser(formData);
    if (result?.success) {
      setName("");
      setSurname("");
      setCountry("");
      setBirthday("");
    } else {
      console.log("Validation Errors:", result.errors);
    }
  };

  return (
    <section className="w-[50%]">
      <form action={handleSubmit}>
        <Input
          name="name"
          label="Name:"
          placeholder="name here"
          value={name || undefined}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="surname"
          label="Surname:"
          placeholder="surname here"
          value={surname || undefined}
          onChange={(e) => setSurname(e.target.value)}
        />
        <Select
          name="country"
          label="Country"
          countries={countries}
          value={country || undefined}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Input
          name="birthday"
          label="Birthday:"
          placeholder="mm/dd/yyyy"
          pattern="^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}$"
          onChange={(e) => setBirthday(e.target.value)}
          value={birthday}
        />

        <div className="flex justify-end">
          <button type="submit" className="border-2 px-8 py-1 my-8">
            Save
          </button>
        </div>
      </form>

      <div>
        <h4 className="bg-green-100 text-gray-500 pl-1 rounded">
          {name && country && birthday
            ? `Hello ${name} from ${country}, on ${day} of ${month} you will have ${calculateAge(birthday)} years`
            : "No age calculated."}
        </h4>
      </div>
    </section>
  );
};
