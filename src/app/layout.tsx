import { Footer } from "@/components/common/footer/footer";
import { Navbar } from "@/components/common/navbar/navbar";
import "@/styles/globals.css";

import { getMetadata } from "@/lib/get-metadata";
import Providers from "@/providers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata = getMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      {/* <ClarityAnalytics /> */}
      {/* <GoogleAnalytics /> */}
      <body className="font-sans">
        <Providers>
          <div className="container m-auto p-4">
            <Navbar />
            <div className="min-h-[calc(100vh-112px)]">{children}</div>
            {/* <Footer /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
