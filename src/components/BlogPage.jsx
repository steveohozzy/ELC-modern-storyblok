import {
  storyblokEditable,
} from "@storyblok/react/rsc";

import {
  getStoryblokApi,
} from "@/lib/storyblok";

import BlogFilters from "./BlogFilters";


export default async function BlogPage({ blok }) {

  const storyblokApi =
    getStoryblokApi();


  const { data } =
    await storyblokApi.get(
      "cdn/stories",
      {
        starts_with: "blog/",
        content_type: "blogPost",
        version: "draft",
      }
    );


  const posts =
    data.stories;


  return (
    <>

      {/* Hero */}
      <section
        {...storyblokEditable(blok)}
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-[#071a0f]
          via-[#0d2f1a]
          to-[#0a2514]
        "
      >

        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -left-20
            top-10
            size-96
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
            bottom-0
            size-96
            rounded-full
            bg-green-300/10
            blur-[140px]
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
            text-center
            md:px-8
            lg:py-32
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

            Raising little explorers

          </span>


          <h1
            className="
              mx-auto
              mt-6
              max-w-4xl
              text-balance
              font-heading
              text-5xl
              font-black
              leading-tight
              text-white
              md:text-7xl
            "
          >

            {blok.title}

          </h1>


          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-emerald-100/75
            "
          >
            {blok.intro}
          </p>


        </div>

      </section>



      {/* Blog content */}
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-[#f7fbf8]
          via-white
          to-[#f4faf6]
          py-16
          lg:py-24
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            md:px-8
          "
        >

          <BlogFilters
            posts={posts}
          />

        </div>

      </section>


    </>
  );
}