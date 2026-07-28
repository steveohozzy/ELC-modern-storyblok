import Image from "next/image";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function ELCHeroBanner({ blok }) {
  return (
    <section
      {...(blok ? storyblokEditable(blok) : {})}
      className="relative overflow-hidden bg-gradient-to-b from-[#0f3820] via-emerald-950 to-emerald-900 text-white pt-16 pb-28 lg:pt-24 lg:pb-36"
    >
      {/* Background Ambient Glows & Parallax Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-green-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Block */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/30 border border-emerald-400/40 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase text-emerald-300 shadow-lg">
              <span>✦</span> {blok?.Tagline || "Trusted by families since 1974"}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
              Where little hands build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-teal-300 underline decoration-wavy decoration-emerald-500 decoration-2">
                BIG DREAMS
              </span>.
            </h1>

            <p className="text-lg sm:text-xl text-emerald-100/80 max-w-2xl font-medium leading-relaxed mx-auto lg:mx-0">
              {blok?.Subtitle || "Discover the science, story, and pure joy behind the Early Learning Centre—celebrating 50 years of inspiring curiosity."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link 
                href={blok?.CtaPrimaryLink || "/our-story"} 
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-[#0f3820] font-black rounded-2xl shadow-xl shadow-emerald-950/50 transition-all duration-300 text-center transform hover:-translate-y-1"
              >
                {blok?.CtaPrimaryText || "Start Exploring →"}
              </Link>
              <Link 
                href={blok?.CtaSecondaryLink || "/blog"} 
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-bold rounded-2xl transition-all duration-300 text-center"
              >
                {blok?.CtaSecondaryText || "Play Journal"}
              </Link>
            </div>
          </div>

          {/* Right Organic Multi-Image Collage Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none flex justify-center">
              
              {/* Organic Shape Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-green-600 rounded-organic transform rotate-6 scale-105 opacity-40 blur-sm" />
              
              <div className="relative bg-white/10 border border-white/20 backdrop-blur-xl p-4 rounded-3xl shadow-2xl animate-float">
                <div className="relative h-[380px] w-[320px] sm:w-[380px] rounded-2xl overflow-hidden shadow-inner">
                  <Image 
                    src={blok?.HeroImage?.filename || "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000&auto=format&fit=crop"} 
                    alt={blok?.HeroImage?.alt || "ELC Play Universe"} 
                    fill 
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
                
                {/* Floating Micro-Badge */}
                <div className="absolute -bottom-5 -left-5 bg-[#0f3820] border border-emerald-500/30 py-3 px-5 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <div>
                    <p className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-wider">50 Years</p>
                    <p className="text-xs font-black text-white">Certified Joy & Play</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}