import type { Metadata } from "next";

export const getMetadata = (title = "Codify"): Metadata => {
  return {
    title: title,
    description:
      "Generate beautiful images from code snippets and share them on the internet for free.",
    applicationName: "Codify",
    metadataBase: new URL("https://codify.ghostkode.com/"),
    icons: {
      icon: [
        {
          rel: "icon",
          url: "/favicon.png",
        },
        {
          rel: "icon",
          url: "/favicon-32x32.png",
          sizes: "32x32",
        },
        {
          rel: "apple-touch-icon",
          url: "/apple-touch-icon.png",
        },
      ],
    },
    manifest: "/site.webmanifest",
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
      site: "@ghostkoder",
      title: title,
      images: "/og-image.jpg",
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
      title: title,
      images: "/og-image.jpg",
    },
  };
};
