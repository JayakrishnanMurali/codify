import { Footer } from "@/components/common/footer/footer";
import { Navbar } from "@/components/common/navbar/navbar";
import "@/styles/globals.css";

import Providers from "@/providers";
import { Inter } from "next/font/google";
import { ClarityAnalytics } from "@/analytics/clarity-analytics";
import { GoogleAnalytics } from "@/analytics/google-analytics";
import { getMetadata } from "@/lib/get-metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = getMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClarityAnalytics />
      <GoogleAnalytics />
      <body className={`font-sans ${inter.variable}`}>
        <Providers>
          <div className="container m-auto p-4">
            <Navbar />
            <div className="min-h-[calc(100vh-112px)]">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
