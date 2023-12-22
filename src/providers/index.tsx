import React from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import { ReduxStoreProvider } from "@/providers/redux-store-provider";
import { Toaster } from "@/components/ui/sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxStoreProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster richColors />
      </ThemeProvider>
    </ReduxStoreProvider>
  );
};

export default Providers;
