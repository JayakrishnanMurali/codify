import { Footer } from "@/components/common/footer/footer";
import { Navbar } from "@/components/common/navbar/navbar";
import { ThemeProvider } from "@/components/common/theme/theme-provider";
import { APP_METADATA } from "@/lib/constants";
import "@/styles/globals.css";
import { Metadata } from "next";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = APP_METADATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container m-auto p-4">
            <Navbar />
            <div className="min-h-[calc(100vh-112px)]">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
