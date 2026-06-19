import { storyblokEditable } from "@storyblok/react/rsc";
import BlogFilters from "./BlogFilters";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function BlogPage({ blok }) {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get(
    "cdn/stories",
    {
      starts_with: "blog/",
      version: "draft",
    }
  );

  const posts = data.stories;

  return (
    <section
      {...storyblokEditable(blok)}
      className="mx-auto max-w-7xl px-4 py-20"
    >
      <h1 className="text-5xl font-heading">
        {blok.title}
      </h1>

      <BlogFilters posts={posts}/>
    </section>
  );
}