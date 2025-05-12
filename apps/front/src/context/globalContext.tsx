"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type User = {
  _id?: string;
  name: string;
  surname: string;
  country: string;
  birthday: string;
};

type GlobalContextType = {
  users: User[];
  setUsers: (users: User[]) => void;
  id: string;
  setId: (name: string) => void;
  name: string;
  setName: (name: string) => void;
  surname: string;
  setSurname: (surname: string) => void;
  country: string;
  setCountry: (country: string) => void;
  birthday: string;
  setBirthday: (birthday: string) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [country, setCountry] = useState("");
  const [birthday, setBirthday] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        users,
        setUsers,
        id,
        setId,
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
