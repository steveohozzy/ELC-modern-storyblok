'use client';

import { useState } from 'react';
import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';

export default function PanelsSet({ blok }) {
  const panels = blok.Panels ?? [];
  const [active, setActive] = useState(0);

  return (
    <section
      {...storyblokEditable(blok)}
      id="play"
      className="relative overflow-hidden bg-gradient-to-b from-[#071a0f] via-[#0d2f1a] to-[#0a2514] py-24 lg:py-32 text-white"
    >
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute left-[-10%] top-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-5%] bottom-0 h-[30rem] w-[30rem] rounded-full bg-green-300/15 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {blok.Tagline || 'Why play matters'}
          </span>

          <h2 className="mt-6 text-balance font-heading text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            {blok.Title || "Play isn't a break from learning."}
            <span className="block bg-gradient-to-r from-emerald-300 via-green-400 to-teal-200 bg-clip-text text-transparent">
              It is learning.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-100/75">
            {blok.IntroBlurb ||
              'Every game, every giggle, every tower that tumbles down builds confidence, creativity, and connection.'}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {panels.map((p, i) => {
            const isActive = active === i;

            return (
              <button
                key={p._uid || i}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`group relative overflow-hidden rounded-[2rem] border p-8 text-left transition-all duration-500 ${
                  isActive
                    ? 'border-emerald-300/40 bg-white/12 shadow-[0_30px_80px_rgba(16,185,129,0.25)] -translate-y-2'
                    : 'border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-1'
                } backdrop-blur-2xl`}
              >
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-xl">
                    {p.ImageMain?.filename && (
                      <Image
                        src={p.ImageMain.filename}
                        alt={p.Title || ''}
                        width={34}
                        height={34}
                        className="object-contain brightness-0 invert"
                      />
                    )}
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-black text-white">
                    {p.Title}
                  </h3>

                  <p className="mt-4 leading-7 text-emerald-100/75">
                    {p.Blurb}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}