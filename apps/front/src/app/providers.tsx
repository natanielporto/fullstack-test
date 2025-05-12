"use client";

import { ReactNode } from "react";

import { Provider as GlobalProvider } from "../context/globalContext";

export default function Providers({ children }: { children: ReactNode }) {
  return <GlobalProvider>{children}</GlobalProvider>;
}
