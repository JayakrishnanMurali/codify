import React from "react";
import Link from "next/link";
import { ROUTE_CONSTANTS } from "@/lib/constants";
import { ProductHuntTag } from "./product-hunt-tag";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2">
      <Link href={ROUTE_CONSTANTS.home} className="flex items-center gap-x-2">
        <span className="font-mono text-sm font-medium tracking-tight text-muted-foreground select-none">{`</>`}</span>
        <span className="text-sm font-semibold tracking-tight">codify</span>
      </Link>

      <ProductHuntTag />
    </nav>
  );
};
