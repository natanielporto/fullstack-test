"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as GlobalProvider } from "../context/globalContext";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>{children}</GlobalProvider>
    </QueryClientProvider>
  );
}
