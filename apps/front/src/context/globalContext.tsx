"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Birthday = {
  day: number;
  month: number;
  year: number;
};

type GlobalContextType = {
  name: string;
  setName: (name: string) => void;
  surname: string;
  setSurname: (surname: string) => void;
  country: string;
  setCountry: (country: string) => void;
  birthday: Birthday;
  setBirthday: (birthday: Birthday) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [country, setCountry] = useState("");
  const [birthday, setBirthday] = useState<Birthday>({
    day: 0,
    month: 0,
    year: 0,
  });

  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        surname,
        setSurname,
        country,
        setCountry,
        birthday,
        setBirthday,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobalContext must be used within a Provider");
  return context;
};
