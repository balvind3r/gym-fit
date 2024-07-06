import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontGenos, fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css"
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f3f4" },
    // { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="bg-[#f3f3f4]">
      <head />
      <body
        className={
          `"min-h-screen bg-inherit  m-0 p-0",
          ${fontGenos.variable}`
        }
        >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="">
          <Navbar/>
            <main className="w-[100vw]">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
