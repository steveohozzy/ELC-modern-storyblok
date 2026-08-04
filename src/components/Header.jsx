"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { resolveLink } from "@/lib/storyblok";

export default function Header({ blok }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function getNavHref(item) {
    const pageLink = resolveLink(item.Link);

    if (item.HomepageAnchor) {
      if (pathname === "/") {
        return `#${item.HomepageAnchor}`;
      }

      if (pageLink && pageLink !== "/") {
        return `${pageLink}#${item.HomepageAnchor}`;
      }

      return `/#${item.HomepageAnchor}`;
    }

    return pageLink || "/";
  }

  return (
    <>
      <header
        {...storyblokEditable(blok)}
        className="sticky top-0 z-50 border-b border-white/10 bg-[#071a0f]/80 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex h-20 items-center justify-between">

            <Link href="/" className="relative h-12 w-50">
              <Image
                src={
                  blok?.Logo?.filename ||
                  "https://www.elc.co.uk/medias/site-logo.svg"
                }
                alt={blok?.LogoAlt || "ELC"}
                fill
                className="object-contain object-left"
              />
            </Link>


            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-white/5 backdrop-blur-xl transition hover:bg-white/10 cursor-pointer"
            >
              <div className="relative h-6 w-6">

                <span
                  className={`absolute left-0 top-1 h-0.5 w-6 bg-emerald-400 transition-all duration-300 ${
                    open ? "translate-y-2 rotate-45" : ""
                  }`}
                />

                <span
                  className={`absolute left-0 top-3 h-0.5 w-6 bg-emerald-400 transition-all duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`absolute left-0 top-5 h-0.5 w-6 bg-emerald-400 transition-all duration-300 ${
                    open ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />

              </div>
            </button>

          </div>
        </div>
      </header>


      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />


      <aside
        className={`fixed right-0 top-0 z-[60] flex h-screen w-full max-w-[420px] flex-col overflow-hidden bg-gradient-to-b from-[#071a0f] via-[#0d2f1a] to-[#0a2514] shadow-[0_0_80px_rgba(16,185,129,.25)] transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-emerald-400/20 blur-[120px]" />

        <div className="relative z-10 flex items-center justify-between px-8 pt-8">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
              Explore
            </p>

            <h2 className="mt-2 font-heading text-3xl font-black text-white">
              ELC
            </h2>
          </div>


          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white hover:bg-white/10 cursor-pointer"
          >
            ×
          </button>

        </div>


        <nav className="relative z-10 flex-1 px-6 py-6">

          {blok?.Navigation?.map((item) => (

            <Link
              key={item._uid}
              href={getNavHref(item)}
              target={item.OpenInNewTab ? "_blank" : undefined}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between rounded-2xl border-b border-white/10 px-4 py-5 font-heading text-xl font-black text-white transition-all hover:bg-white/10 hover:text-emerald-300"
            >

              <span>
                {item.Label}
              </span>

              <ArrowUpRight
                className="h-5 w-5 opacity-40 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
              />

            </Link>

          ))}

        </nav>


        <div className="relative z-10 p-6">

          <div className="rounded-[2rem] border border-emerald-300/20 bg-white/10 p-6 backdrop-blur-xl">

            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
              {blok?.CtaPanelEyebrow || "Discover"}
            </p>


            <div className="mt-3 font-heading text-2xl font-black text-white">
              {blok?.CtaPanelHeading || "Ideas for growing imaginations"}
            </div>


            <p className="mt-3 text-sm leading-relaxed text-emerald-100/70">
              {blok?.CtaPanelText ||
                "Stories, activities and inspiration for curious families."}
            </p>


            <Link
              href={resolveLink(blok?.CtaLink) || "/blog"}
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-black text-[#071a0f] transition hover:-translate-y-0.5"
            >
              {blok?.CtaText || "Explore stories"}

              <ArrowUpRight className="h-4 w-4" />

            </Link>

          </div>

        </div>

      </aside>
    </>
  );
}