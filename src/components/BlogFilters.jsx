"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

export default function BlogFilters({ posts }) {
  const searchParams = useSearchParams();
  const filterRef = useRef(null);

  const [selected, setSelected] = useState(
    () => searchParams.get("category") || "All"
  );

  useEffect(() => {
    const category =
      searchParams.get("category") || "All";

    if (category !== "All" && filterRef.current) {
      setTimeout(() => {
        filterRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [searchParams]);

  const categories = [
    "All",
    ...new Set(
      posts.flatMap(
        (p) => p.content.category || []
      )
    ),
  ];

  const filtered =
    selected === "All"
      ? posts
      : posts.filter((p) =>
          p.content.category?.includes(selected)
        );

  return (
    <div>

      {/* Filter bar */}
      <div
        ref={filterRef}
        className="
          scroll-mt-28
          mb-12
          rounded-[2rem]
          border
          border-emerald-200/20
          bg-[#071a0f]
          p-5
          shadow-xl
        "
      >

        <div className="flex flex-wrap gap-3">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`
                cursor-pointer
                rounded-full
                px-5
                py-2.5
                text-sm
                font-black
                transition-all
                ${
                  selected === category
                    ? "bg-emerald-400 text-[#071a0f] shadow-lg shadow-emerald-400/20"
                    : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {category}
            </button>
          ))}

        </div>

      </div>


      {/* Blog cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {filtered.map((post) => (

          <article
            key={post.uuid}
            className="
              group
              overflow-hidden
              rounded-[2rem]
              border
              border-emerald-100
              bg-white
              shadow-sm
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >

            <Link href={`/${post.full_slug}`}>

              {/* Image */}
              <div className="
                relative
                aspect-[4/3]
                overflow-hidden
              ">

                <Image
                  src={
                    post.content.featuredImage?.filename ||
                    "/images/placeholder.jpg"
                  }
                  alt={
                    post.content.title ||
                    "Blog image"
                  }
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />


                {post.content.category?.[0] && (

                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      rounded-full
                      border
                      border-emerald-200
                      bg-white/90
                      px-4
                      py-2
                      text-xs
                      font-black
                      uppercase
                      tracking-wide
                      text-emerald-700
                      backdrop-blur
                    "
                  >
                    {post.content.category[0]}
                  </span>

                )}

              </div>


              {/* Content */}
              <div className="p-7">

                <h3
                  className="
                    font-heading
                    text-2xl
                    font-black
                    leading-tight
                    text-[#0d2f1a]
                  "
                >
                  {post.content.title}
                </h3>


                {post.content.excerpt && (

                  <p
                    className="
                      mt-4
                      line-clamp-3
                      leading-relaxed
                      text-[#355b47]
                    "
                  >
                    {post.content.excerpt}
                  </p>

                )}


                <div
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                    border-t
                    border-emerald-100
                    pt-5
                  "
                >

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-emerald-700/70
                    "
                  >
                    {post.content.readLength || "5 min"} read
                  </span>


                  <span
                    className="
                      flex
                      size-10
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-100
                      font-bold
                      text-emerald-700
                      transition-all
                      group-hover:bg-emerald-500
                      group-hover:text-white
                    "
                  >
                    →

                  </span>

                </div>

              </div>

            </Link>

          </article>

        ))}

      </div>

    </div>
  );
}