"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";
import { resolveLink } from "@/lib/storyblok";

export default function HomeHero({ blok }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      {...storyblokEditable(blok)}
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#0a2514] via-[#0d2f1a] to-[#071a0f] text-white"
    >
      {/* MASSIVE, HIGHLY VISIBLE glowing orbs that drift heavily across the hero section on scroll */}
      <div 
        className="pointer-events-none absolute -left-20 top-0 w-[500px] h-[500px] rounded-full bg-emerald-400 opacity-60 blur-[90px] transition-transform duration-75 ease-out" 
        style={{ transform: `translate(${scrollY * 0.4}px, ${scrollY * 0.5}px) scale(${0.6 + scrollY * 0.001})` }}
        aria-hidden 
      />
      <div 
        className="pointer-events-none absolute right-[-10%] top-1/3 w-[500px] h-[500px] rounded-full bg-green-300 opacity-50 blur-[100px] transition-transform duration-75 ease-out" 
        style={{ transform: `translate(-${scrollY * 0.8}px, -${scrollY * 0.4}px)` }}
        aria-hidden 
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 md:px-8 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-16 relative z-10">
        
        {/* Left Column: Text & CTAs */}
        <div className="relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs font-black uppercase tracking-widest text-emerald-300 backdrop-blur-xl shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {blok.Tagline || "tagline"}
          </span>

          <h1 className="text-balance font-heading text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            {blok.Title || "hero text"}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-teal-200">
              {blok.TitleAccent || "hero accent"}
            </span>
          </h1>

          <p className="max-w-xl text-pretty text-lg font-normal leading-relaxed text-emerald-100/80">
            {blok.Subtitle || "subtitle"}
          </p>

          {blok.CtaPrimaryText && (
            <div className="flex flex-wrap gap-4 pt-2">
              {/* GLOSSY EMERALD PRIMARY BUTTON */}
              <Link
                href={resolveLink(blok.CtaPrimaryLink) || "#"}
                className="rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 border border-emerald-300/40 px-8 py-4 text-sm font-black text-[#071a0f] backdrop-blur-xl shadow-xl shadow-emerald-950/60 transition-all duration-200 transform hover:-translate-y-0.5 text-center"
              >
                {blok.CtaPrimaryText}
              </Link>

              {blok.CtaSecondaryText && (
                <Link
                  href={resolveLink(blok.CtaSecondaryLink) || "#"}
                  className="rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 px-8 py-4 text-sm font-bold text-white backdrop-blur-xl transition-all duration-200 text-center"
                >
                  {blok.CtaSecondaryText}
                </Link>
              )}
            </div>
          )}

          {blok.Stats?.length ? (
            <dl className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-10">
              {blok.Stats.map((stat, i) => (
                <div key={i}>
                  <dt className="font-heading text-3xl font-black text-white">
                    {stat.Value}
                  </dt>
                  <dd className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mt-1">
                    {stat.Label}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        {/* Right Column: Image & Floating Stamp */}
        <div className="relative z-10 flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-none">
            
            <div className="relative aspect-[9/10] overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/5 p-3 backdrop-blur-2xl shadow-2xl lg:aspect-[4/5]">
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                <Image
                  src={blok.BackgroundImage?.filename || "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000&auto=format&fit=crop"}
                  alt={blok.BackgroundImage?.alt || "Hero image"}
                  fill
                  priority
                  quality={85}
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 500px, 500px"
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {blok.ImageStampTitle && (
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-gradient-to-br from-emerald-900/90 via-[#0a2514]/90 to-emerald-950/90 border border-emerald-400/30 px-6 py-5 shadow-2xl backdrop-blur-2xl sm:block">
                <p className="font-heading text-lg font-black text-white">
                  {blok.ImageStampTitle}
                </p>
                <p className="text-xs font-semibold text-emerald-300 mt-0.5">
                  {blok.ImageStampText}
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}