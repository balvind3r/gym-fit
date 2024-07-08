import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontGenos, fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/Assets/images/Logo.png", // Path to your favicon
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
      <head>
        <link rel="icon" href="/Assets/images/Logo.png" /> {/* Link to your favicon */}
      </head>
      <body
        className={`min-h-screen bg-inherit w-full m-0 p-0" ${fontGenos.variable}`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="">
            <Navbar/>
            <main className="">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
