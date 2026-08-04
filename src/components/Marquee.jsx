'use client';

import { useEffect, useRef, useState } from 'react';
import { storyblokEditable } from '@storyblok/react';

export default function Marquee({ blok }) {
  const panels = (blok.MarqueeItems ?? []).filter((item) => item?.Title);

  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  const looped = [...panels, ...panels];

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setDistance(trackRef.current.scrollWidth / 2);
    };

    measure();
    document.fonts?.ready?.then(measure);

    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative overflow-hidden border-y border-white/10 bg-[#071a0f]/95 py-5 text-white backdrop-blur-xl"
    >
      {/* subtle glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-400/5"
        aria-hidden
      />

      <div
        key={distance}
        ref={trackRef}
        className="relative z-10 flex w-max items-center will-change-transform"
        style={{
          '--marquee-distance': `${distance}px`,
          animation:
            distance > 0
              ? 'marquee 45s linear infinite'
              : 'none',
        }}
      >
        {looped.map((panel, i) => (
          <span
            key={`${panel._uid}-${i}`}
            className="flex shrink-0 items-center pr-12"
          >
            <span className="font-heading text-xl font-bold tracking-wide text-white md:text-2xl">
              {panel.Title}
            </span>

            <span
              className="mx-8 h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
              aria-hidden
            />
          </span>
        ))}
      </div>
    </section>
  );
}