"use client";

import Image from "next/image";
import {
  storyblokEditable,
} from "@storyblok/react/rsc";

import BrandSection from "./BrandSection";

export default function BrandsHub({ blok }) {

  const scrollToBrand = (brandName) => {
    const id = brandName
      .toLowerCase()
      .replace(/\s+/g, "-");

    const element =
      document.getElementById(id);

    if (element) {
      const headerHeight = 80;
      const stickyNavHeight = 60;

      const offset =
        headerHeight + stickyNavHeight;

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      {...storyblokEditable(blok)}
    >

      {/* Hero */}
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-[#071a0f]
          via-[#0d2f1a]
          to-[#0a2514]
        "
      >

        {/* Atmospheric glow */}
        <div
          className="
            pointer-events-none
            absolute
            -left-20
            top-20
            size-72
            rounded-full
            bg-emerald-400/20
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            size-96
            rounded-full
            bg-green-300/10
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            h-32
            bg-gradient-to-t
            from-[#071a0f]
            to-transparent
          "
        />


        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-4
            py-24
            md:px-8
            lg:py-32
          "
        >

          <div
            className="
              max-w-3xl
            "
          >

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-300/20
                bg-white/10
                px-4
                py-2
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-emerald-300
                backdrop-blur-xl
              "
            >
              <span
                className="
                  size-2
                  rounded-full
                  bg-emerald-400
                "
              />

              Discover our toy families
            </span>


            <h1
              className="
                mt-6
                text-balance
                font-heading
                text-5xl
                font-black
                leading-tight
                text-white
                md:text-7xl
              "
            >
              {blok.heroTitle}
            </h1>


            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-emerald-100/75
              "
            >
              {blok.heroSubtitle}
            </p>

          </div>

        </div>

      </section>



      {/* Brand Filter */}
      <section
        className="
          sticky
          top-20
          z-30
          border-y
          border-white/10
          bg-[#071a0f]/85
          backdrop-blur-xl
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            overflow-auto
            px-4
            py-3
            md:px-8
          "
        >

          <div
            className="
              flex
              min-w-max
              gap-3
            "
          >

            {blok.brandSections?.map((brand) => (

              <button
                key={brand._uid}
                onClick={() =>
                  scrollToBrand(
                    brand.BrandName
                  )
                }
                className="
                  group
                  flex
                  cursor-pointer
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-300/40
                  hover:bg-white/10
                  hover:shadow-[0_10px_30px_rgba(16,185,129,.15)]
                "
              >

                {brand.BrandLogo?.filename && (

                  <div
                    className="
                      flex
                      size-8
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      p-1
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >

                    <Image
                      src={
                        brand.BrandLogo.filename
                      }
                      alt={
                        brand.BrandName
                      }
                      width={28}
                      height={28}
                      className="
                        h-full
                        w-full
                        object-contain
                      "
                    />

                  </div>

                )}


                <span
                  className="
                    text-sm
                    font-bold
                    text-white/90
                    transition
                    group-hover:text-emerald-300
                  "
                >
                  {brand.BrandName}
                </span>


              </button>

            ))}

          </div>

        </div>

      </section>



      {/* Intro */}
      {blok.intro && (

        <section
          className="
            mx-auto
            max-w-4xl
            px-4
            py-16
            text-center
            md:px-8
          "
        >

          <p
            className="
              text-xl
              leading-relaxed
              text-[#355b47]
            "
          >
            {blok.intro}
          </p>

        </section>

      )}



      {/* Brands */}
      <section>

        {blok.brandSections?.map((brand, index) => (

          <BrandSection
            key={brand._uid}
            blok={brand}
            index={index}
          />

        ))}

      </section>


    </div>
  );
}