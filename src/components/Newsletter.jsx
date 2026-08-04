"use client";

import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function Newsletter({ blok }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      setDone(true);
    }
  };

  return (
    <section
      {...storyblokEditable(blok)}
      id="newsletter"
      className="relative overflow-hidden px-4 pb-20 md:px-8 lg:pb-28 pt-20 lg:pt-28"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-emerald-400/20 bg-gradient-to-br from-[#0a2514] via-[#0d2f1a] to-[#071a0f] px-6 py-20 text-white shadow-[0_30px_100px_rgba(16,185,129,0.18)] md:px-16">

        {/* Atmospheric glow */}
        <div
          className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-emerald-400/30 blur-[120px]"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-teal-300/20 blur-[140px]"
          aria-hidden
        />


        <div className="relative z-10 mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Stay inspired
          </span>


          <h2 className="mt-6 text-balance font-heading text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            {blok?.Title || "Join our community of curious families"}
          </h2>


          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-100/75">
            {blok?.Intro ||
              "Play ideas, child-development tips and a little inspiration — straight to your inbox. No noise, just the good stuff."}
          </p>


          {done ? (

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-emerald-200/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-xl">

              <svg
                className="size-5 text-emerald-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>

              You&apos;re in! Welcome to the family.

            </div>

          ) : (

            <form
              onSubmit={onSubmit}
              className="mx-auto mt-10 flex max-w-xl flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl sm:flex-row"
            >

              <label
                htmlFor="newsletter-email"
                className="sr-only"
              >
                Email address
              </label>


              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 rounded-2xl bg-white/10 px-5 py-4 text-white placeholder:text-emerald-100/50 outline-none transition focus:bg-white/15 focus:ring-2 focus:ring-emerald-400"
              />


              <button
                type="submit"
                className="cursor-pointer rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-300 px-7 py-4 font-black text-[#071a0f] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-900/40"
              >
                Sign up
              </button>

            </form>

          )}

        </div>
      </div>
    </section>
  );
}