"use client";

import { Button } from "@/components/ui/button";
import { useExternalRouter } from "@/hooks/useExternalRouter";
import { APP_CREATOR, EXTERNAL_LINKS } from "@/lib/constants";
import { Twitter } from "lucide-react";
import Link from "next/link";
import { footerLinks } from "./footer.constants";

export const Footer = () => {
  const router = useExternalRouter();

  return (
    <div className="flex items-center justify-between">
      <Button
        variant="link"
        onClick={() => router.push(EXTERNAL_LINKS.twitter)}
        className="cursor-pointer items-center gap-x-1 px-0 text-muted-foreground"
      >
        <Twitter className="h-4 w-4" />
        <p className="text-sm font-bold ">{APP_CREATOR}</p>
      </Button>

      <div className="flex items-center gap-x-4 text-muted-foreground">
        {footerLinks.map((item) => (
          <Link
            key={item.id}
            className="flex cursor-pointer items-center gap-x-1"
            href={item.href}
            target={item.target}
          >
            <item.icon className="h-4 w-4" />
            <p className="text-xs font-medium hover:underline">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

//   © 2023{" "}
