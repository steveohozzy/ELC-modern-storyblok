"use client";

import { useState } from "react";

export default function BlogFilters({ posts }) {
  const [selected, setSelected] = useState("All");

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
            className="rounded-full border px-4 py-2"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {filtered.map(post => (
          <article key={post.uuid}>
            {post.content.title}
          </article>
        ))}
      </div>
    </>
  );
}