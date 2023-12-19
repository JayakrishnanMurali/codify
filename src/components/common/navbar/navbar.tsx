import React from "react";
import { ThemeModeToggle } from "./theme-mode-toggle";

export const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold text-primary">Codify</h4>

        <div>
          <ThemeModeToggle />
        </div>
      </div>
    </div>
  );
};
