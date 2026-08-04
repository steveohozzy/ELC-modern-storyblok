import { Geist, Nunito } from "next/font/google";
import "./globals.css";

import {
  getStoryblokApi,
} from "@/lib/storyblok";

import Header from "@/components/Header";
import { getNavigation } from "@/lib/getNavigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ELC",
  description: "Test with Storyblok",
};

export default async function RootLayout({ children }) {
  const menuItems = await getNavigation();

  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get(
    "cdn/stories/globals/header",
    {
      version: "draft",
    }
  );


  const header =
    data?.story?.content?.body?.find(
      (blok) => blok.component === "HeaderSettings"
    ) || {};

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${nunito.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header
          blok={header}
          menuItems={menuItems}
        />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}