import React from "react";
import { ThemeModeToggle } from "./theme-mode-toggle";
import Link from "next/link";
import { ROUTE_CONSTANTS } from "@/lib/constants";

export const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Link href={ROUTE_CONSTANTS.home}>
          <h4 className="text-xl font-bold text-primary">Codify.</h4>
        </Link>

        <div>
          <ThemeModeToggle />
        </div>
      </div>
    </div>
  );
};
