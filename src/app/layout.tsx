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
      <body className="font-sans">
        <Providers>
          <div className="flex h-screen flex-col overflow-hidden">
            <header className="flex-shrink-0 border-b border-border px-4">
              <Navbar />
            </header>
            <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
