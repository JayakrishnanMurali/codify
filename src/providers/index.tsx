import React from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import { ReduxStoreProvider } from "@/providers/redux-store-provider";

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
      </ThemeProvider>
    </ReduxStoreProvider>
  );
};

export default Providers;
