import type { Metadata } from "next";

export const OG_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://codify.ghostkode.com";

export const tagline =
  "Generate beautiful images from code snippets and share them on the internet for free.";
export const baseMetadata: Metadata = {
  metadataBase: new URL(OG_URL),
  title: {
    default: "Codify",
    template: "%s",
  },
  robots: {
    index: true,
    follow: true,
  },
  description: tagline,
  openGraph: {
    title: "Codify",
    description: tagline,
    siteName: "Codify",
    images: [
      {
        url: `${OG_URL}/api/default`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Codify",
    card: "summary_large_image",
    images: [
      {
        url: `${OG_URL}/api/default`,
        width: 1920,
        height: 1080,
      },
    ],
  },
  manifest: "/site.webmanifest",

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
};

/** Helper to build opengraph metadata with defaults, you should call this in generateMetadata() next function */
export const buildMetaForDefault = async ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}): Promise<Metadata> => {
  return buildMeta({
    ogImageUrl: `${OG_URL}/api/default?cache-bust=${new Date().getDate()}`,
    title,
    description,
  });
};

/** update the metadata for og */
const buildMeta = async ({
  ogImageUrl,
  description,
  title,
}: {
  ogImageUrl: string;
  description?: string;
  title?: string;
}): Promise<Metadata> => {
  baseMetadata.openGraph!.images = ogImageUrl;
  baseMetadata.twitter!.images = ogImageUrl;

  if (description) {
    baseMetadata.description = description;
    baseMetadata.twitter!.description = description;
    baseMetadata.openGraph!.description = description;
  }

  if (title) {
    baseMetadata.title = title;
    baseMetadata.twitter!.title = title;
    baseMetadata.openGraph!.title = title;
  }

  return baseMetadata;
};

export default baseMetadata;
