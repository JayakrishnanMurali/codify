import { EXTERNAL_LINKS } from "@/lib/constants";
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
    href: EXTERNAL_LINKS.terms,
    icon: FileTerminal,
  },
  {
    id: 3,
    name: "Privacy",
    href: EXTERNAL_LINKS.privacy,
    icon: FileKey,
  },
];
