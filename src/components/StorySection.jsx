import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";
import { renderRichText } from "@storyblok/react";

export default function StorySection({ blok }) {
  const callouts = blok.Callouts ?? [];

  return (
    <section
      {...storyblokEditable(blok)}
      id="story"
      className="relative overflow-hidden bg-gradient-to-b from-[#f7fbf8] via-white to-[#f4faf6] py-24 lg:py-32"
    >
      {/* Subtle atmospheric glow */}
      <div
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-emerald-200/50 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-green-100/60 blur-[120px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div
            className={`relative ${
              blok.Flip ? "order-1 lg:order-2" : "order-2 lg:order-1"
            }`}
          >
            <div className="relative rounded-[2.5rem] border border-emerald-100 bg-white/70 p-3 shadow-[0_30px_80px_rgba(16,185,129,0.12)] backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src={blok.Image?.filename || "/images/heritage.png"}
                  alt={blok.Title || "Story image"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>

            {blok.ImageStampText && (
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-emerald-200 bg-white/90 px-6 py-5 shadow-2xl backdrop-blur-xl sm:block">
                <p className="font-heading text-lg font-black text-[#0d2f1a]">
                  {blok.ImageStampText}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Our heritage
                </p>
              </div>
            )}
          </div>

          {/* Content */}
          <div
            className={`${
              blok.Flip ? "order-2 lg:order-1" : "order-1 lg:order-2"
            }`}
          >
            {blok.Tagline && (
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {blok.Tagline}
              </span>
            )}

            <h2 className="mt-5 text-balance font-heading text-4xl font-black leading-tight text-[#0d2f1a] md:text-5xl lg:text-6xl">
              {blok.Title}{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                together
              </span>
            </h2>

            {blok.Blurb ? (
              <div
                className="prose prose-lg mt-6 max-w-none prose-p:text-[#355b47] prose-p:leading-8 prose-strong:text-[#0d2f1a]"
                dangerouslySetInnerHTML={{
                  __html: renderRichText(blok.Blurb),
                }}
              />
            ) : (
              <p className="mt-6 text-lg leading-8 text-[#355b47]">
                We’re not just a name on a box. We’re part of family stories,
                rainy afternoons, first words and big imaginations.
              </p>
            )}

            {callouts.length > 0 && (
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {callouts.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-emerald-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-3 inline-flex rounded-xl bg-emerald-100 px-3 py-1 text-sm font-black text-emerald-700">
                      {item.Highlight}
                    </div>
                    <p className="text-base leading-7 text-[#234533]">
                      {item.Title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}