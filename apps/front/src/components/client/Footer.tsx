"use client";

import { useGlobalContext } from "@/context/globalContext";

export const Footer = () => {
  const { name, surname } = useGlobalContext();

  return (
    <div>
      {name && surname
        ? `Welcome ${name} ${surname}`
        : "Your Name and LastName"}
    </div>
  );
};
