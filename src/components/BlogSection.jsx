import Image from "next/image";
import Link from "next/link";
import { storyblokEditable, getStoryblokApi } from "@storyblok/react/rsc";

export default async function Blog({ blok }) {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories", {
    //version: process.env.NODE_ENV === "development" ? "draft" : "published", this it for when live
    version: "draft",
    starts_with: "blog/",
    is_startpage: false,
    sort_by: "first_published_at:desc",
    per_page: 3,
  });

  const posts = data.stories || [];

  return (
    <section
      {...storyblokEditable(blok)}
      id="blog"
      className="relative overflow-hidden bg-gradient-to-b from-[#f7fbf8] via-white to-[#f4faf6] py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-emerald-200/50 blur-[100px]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-green-100/60 blur-[120px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {blok.Title && (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              {blok.Tagline && (
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {blok.Tagline}
                </span>
              )}

              <h2 className="mt-5 text-balance font-heading text-4xl font-black leading-tight text-[#0d2f1a] md:text-5xl lg:text-6xl">
                {blok.Title}
              </h2>
            </div>

            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white/80 px-6 py-3 text-sm font-bold text-emerald-700 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              Read the journal
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.uuid}
              className="group overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/80 shadow-[0_20px_60px_rgba(16,185,129,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(16,185,129,0.15)]"
            >
              <Link href={`/${post.full_slug}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={
                      post.content.featuredImage?.filename ||
                      "/images/heritage.png"
                    }
                    alt={post.content.title || "Blog image"}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {post.content.category?.[0] && (
                    <span className="absolute left-5 top-5 rounded-full border border-emerald-100 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-700 backdrop-blur-xl">
                      {post.content.category[0]}
                    </span>
                  )}
                </div>

                <div className="p-7">
                  <h3 className="font-heading text-2xl font-black leading-tight text-[#0d2f1a]">
                    {post.content.title}
                  </h3>

                  <div className="mt-8 flex items-center justify-between border-t border-emerald-100 pt-5">
                    <span className="text-sm font-semibold text-emerald-700/70">
                      {post.content.readLength || "5 min"} read
                    </span>

                    <span className="flex size-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}