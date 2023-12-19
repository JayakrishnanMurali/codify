import { Metadata } from "next";

export const ROUTE_CONSTANTS = {
  home: "/",
};

export const APP_METADATA: Metadata = {
  title: "Codify",
  description:
    "Generate beautiful images from code snippets and share them on the internet for free.",
  applicationName: "Codify",
  authors: {
    name: "Jayakrishnan M",
    url: "https://www.ghostkode.com/",
  },
  creator: "Jayakrishnan M",
  generator: "Next.js",
  keywords: [
    "code",
    "snippets",
    "codify",
    "share image",
    "code snippets",
    "create code to image",
    "image generator",
  ],
  twitter: {
    card: "summary_large_image",
    creator: "@ghostkoder",
    site: "",
    title: "Codify",
    images: [{ url: "" }],
    description:
      "Generate beautiful images from code snippets and share them on the internet for free.",
  },

  openGraph: {
    type: "website",
    countryName: "India",
    description:
      "Generate beautiful images from code snippets and share them on the internet for free.",
    emails: "ghostkoderr@email.com",
    siteName: "Codify",
    title: "Codify",
    images: [
      {
        url: "",
      },
    ],
  },
};
