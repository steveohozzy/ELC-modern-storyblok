import Image from "next/image";
import Link from "next/link";
import {
  StoryblokServerComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

import BlogRichText from "./BlogRichText";

export default function BlogPost({ blok }) {
  return (
    <article
      {...storyblokEditable(blok)}
      className="pb-24"
    >

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071a0f]">

        {/* Background image */}
        {blok.featuredImage?.filename && (
          <div className="absolute inset-0">

            <Image
              src={blok.featuredImage.filename}
              alt={blok.title || "Article image"}
              fill
              priority
              className="object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#071a0f]/70 via-[#071a0f]/90 to-[#071a0f]" />

          </div>
        )}


        {/* Glow */}
        <div className="
          pointer-events-none
          absolute
          -left-32
          top-20
          size-96
          rounded-full
          bg-emerald-400/20
          blur-[120px]
        " />

        <div className="
          relative
          mx-auto
          max-w-6xl
          px-4
          py-24
          md:px-8
          lg:py-32
        ">


          {/* Categories */}
          {blok.category?.length > 0 && (

            <div className="mb-8 flex flex-wrap gap-3">

              {blok.category.map((cat) => (

                <Link
                  key={cat}
                  href={`/blog?category=${encodeURIComponent(cat)}`}
                  className="
                    rounded-full
                    border
                    border-emerald-300/30
                    bg-emerald-400/10
                    px-4
                    py-2
                    text-xs
                    font-black
                    uppercase
                    tracking-wide
                    text-emerald-200
                    backdrop-blur
                    transition
                    hover:bg-emerald-400
                    hover:text-[#071a0f]
                  "
                >
                  {cat}
                </Link>

              ))}

            </div>

          )}


          {/* Title */}
          <h1
            className="
              max-w-5xl
              font-heading
              text-5xl
              font-black
              leading-[1.05]
              text-white
              md:text-7xl
            "
          >
            {blok.title}
          </h1>


          {blok.excerpt && (

            <p
              className="
                mt-8
                max-w-3xl
                text-xl
                leading-relaxed
                text-emerald-100/80
              "
            >
              {blok.excerpt}
            </p>

          )}



          {/* Meta */}
          <div className="
            mt-12
            flex
            flex-wrap
            gap-4
          ">


            {blok.author && (

              <div className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                backdrop-blur-xl
              ">

                <p className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-emerald-300
                ">
                  Author
                </p>

                <p className="mt-1 font-semibold text-white">
                  {blok.author}
                </p>

              </div>

            )}


            {blok.date && (

              <div className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                backdrop-blur-xl
              ">

                <p className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-emerald-300
                ">
                  Published
                </p>

                <p className="mt-1 text-white">
                  {new Date(blok.date).toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </p>

              </div>

            )}


            {blok.readTime && (

              <div className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                backdrop-blur-xl
              ">

                <p className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-emerald-300
                ">
                  Read time
                </p>

                <p className="mt-1 text-white">
                  {blok.readTime}
                </p>

              </div>

            )}

          </div>

        </div>

      </section>



      {/* Article content */}
      <section
        className="
          mx-auto
          max-w-4xl
          px-4
          py-20
          md:px-8
        "
      >

        {blok.richText && (
          <BlogRichText
            richText={blok.richText}
          />
        )}

      </section>



      {/* Additional Storyblok blocks */}
      <section className="mx-auto max-w-7xl px-4 md:px-8">

        {blok.articleBlocks?.map((nested) => (

          <StoryblokServerComponent
            blok={nested}
            key={nested._uid}
          />

        ))}

      </section>


    </article>
  );
}