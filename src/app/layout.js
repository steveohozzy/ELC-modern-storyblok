import { Geist, Fraunces } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import { getNavigation } from "@/lib/getNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ELC",
  description: "Test with Storyblok",
};

export default async function RootLayout({ children }) {
  const menuItems = await getNavigation();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <Header menuItems={menuItems} />
        {children}
      </body>
    </html>
  );
}