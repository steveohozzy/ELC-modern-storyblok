"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

export default function BlogFilters({ posts }) {
  const searchParams = useSearchParams();

  const categoryFromUrl =
    searchParams.get("category") || "All";

  const [selected, setSelected] =
    useState(categoryFromUrl);

  const categories = [
    "All",
    ...new Set(
      posts.flatMap(
        p => p.content.category || []
      )
    )
  ];

  const filtered =
    selected === "All"
      ? posts
      : posts.filter(
          p =>
            p.content.category?.includes(
              selected
            )
        );

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`
              rounded-full
              px-4
              py-2
              transition-all
              ${
                selected === category
                  ? "bg-primary text-white"
                  : "border hover:bg-muted"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <article
            key={post.uuid}
            className="
              group overflow-hidden
              rounded-[2rem]
              border border-border
              bg-card
              transition-all
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <Link href={`/${post.full_slug}`}>
              
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
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
                    duration-500
                    group-hover:scale-105
                  "
                />

                {post.content.category?.[0] && (
                  <span
                    className="
                      absolute left-4 top-4
                      rounded-full
                      bg-background/90
                      px-3 py-1
                      text-xs font-semibold
                      backdrop-blur
                    "
                  >
                    {post.content.category[0]}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col p-6">
                <div>
                  <h3 className="font-heading text-xl font-semibold">
                    {post.content.title}
                  </h3>

                  {post.content.excerpt && (
                    <p className="mt-3 line-clamp-3 text-muted-foreground">
                      {post.content.excerpt}
                    </p>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm text-muted-foreground">
                    {post.content.readLength || "5 min"} read
                  </span>

                  <span
                    className="
                      flex size-9 items-center justify-center
                      rounded-full
                      bg-muted
                      transition-colors
                      group-hover:bg-primary
                      group-hover:text-primary-foreground
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
    </>
  );
}