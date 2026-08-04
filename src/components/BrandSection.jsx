import Image from "next/image";
import Link from "next/link";
import {
  storyblokEditable,
  renderRichText,
} from "@storyblok/react/rsc";

import { resolveLink } from "@/lib/storyblok";

export default function BrandSection({
  blok,
  index,
}) {
  const reversed = index % 2 !== 0;

  return (
    <section
      {...storyblokEditable(blok)}
      id={blok.BrandName
        ?.toLowerCase()
        ?.replace(/\s+/g, "-")}
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#f1faf4]
        via-white
        to-[#f7fbf8]
      "
    >

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          size-96
          rounded-full
          bg-emerald-200/40
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          bottom-0
          size-96
          rounded-full
          bg-green-100/60
          blur-[140px]
        "
      />


      <div
        className={`
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-14
          px-4
          py-20
          md:px-8
          lg:grid-cols-2
          lg:gap-20
          lg:py-28
        `}
      >

        {/* Image */}
        <div
          className={
            reversed
              ? "lg:order-2"
              : ""
          }
        >

          <div
            className="
              rounded-[2.5rem]
              border
              border-emerald-200
              bg-white/80
              p-3
              shadow-[0_30px_80px_rgba(16,185,129,0.18)]
              backdrop-blur-xl
            "
          >

            <div
              className="
                relative
                aspect-square
                overflow-hidden
                rounded-[2rem]
              "
            >

              <Image
                src={
                  blok.BrandImage?.filename ||
                  "/images/heritage.png"
                }
                alt={
                  blok.BrandName ||
                  "Brand image"
                }
                fill
                sizes="
                  (max-width:768px) 100vw,
                  50vw
                "
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

            </div>

          </div>

        </div>



        {/* Content */}
        <div
          className={
            reversed
              ? "lg:order-1"
              : ""
          }
        >


          {/* Logo */}
          {blok.BrandLogo?.filename && (

            <div
              className="
                inline-flex
                items-center
                justify-center
                rounded-[1.5rem]
                border
                border-emerald-200
                bg-white
                px-6
                py-4
                shadow-[0_20px_50px_rgba(16,185,129,0.15)]
                ring-1
                ring-emerald-100
              "
            >

              <Image
                src={
                  blok.BrandLogo.filename
                }
                alt={
                  blok.BrandName
                }
                width={180}
                height={70}
                className="
                  h-14
                  w-auto
                  object-contain
                "
              />

            </div>

          )}



          {/* Title */}
          <h2
            className="
              mt-8
              bg-gradient-to-r
              from-[#0d2f1a]
              to-emerald-600
              bg-clip-text
              font-heading
              text-4xl
              font-black
              leading-tight
              text-transparent
              md:text-5xl
            "
          >
            {blok.BrandName}
          </h2>



          {blok.Intro && (

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-[#355b47]
              "
            >
              {blok.Intro}
            </p>

          )}



          {blok.Description && (

            <div
              className="
                prose
                prose-lg
                mt-6
                max-w-none

                prose-p:text-[#355b47]
                prose-p:leading-8

                prose-headings:text-[#0d2f1a]

                prose-strong:text-[#0d2f1a]
              "
              dangerouslySetInnerHTML={{
                __html:
                  renderRichText(
                    blok.Description
                  ),
              }}
            />

          )}



          {/* CTA */}
          {blok.CtaText && (

            <Link
              href={
                resolveLink(
                  blok.CtaLink
                )
              }
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-emerald-600
                px-7
                py-3.5
                font-black
                text-white
                shadow-lg
                shadow-emerald-600/25
                transition-all
                hover:-translate-y-1
                hover:bg-emerald-500
              "
            >

              {blok.CtaText}

              <span>
                →
              </span>

            </Link>

          )}

        </div>

      </div>

    </section>
  );
}