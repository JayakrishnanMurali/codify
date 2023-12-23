import { EXTERNAL_LINKS, ROUTE_CONSTANTS } from "@/lib/constants";
import { FileKey, FileTerminal, Github, icons } from "lucide-react";

export const footerLinks = [
  {
    id: 1,
    name: "Github",
    href: EXTERNAL_LINKS.github,
    target: "_blank",
    icon: Github,
  },
  {
    id: 2,
    name: "Terms",
    href: ROUTE_CONSTANTS.terms,
    icon: FileTerminal,
  },
  {
    id: 3,
    name: "Privacy",
    href: ROUTE_CONSTANTS.privacy,
    icon: FileKey,
  },
];
