import { storyblokEditable } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import BlogFilters from "./BlogFilters";

export default async function BlogPage({ blok }) {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get(
    "cdn/stories",
    {
      starts_with: "blog/",
      version: "draft",
    }
  );

  const posts = data.stories.filter(
    post => post.content.component === "BlogPost"
  );

  return (
    <section
      {...storyblokEditable(blok)}
      className="mx-auto max-w-7xl px-4 py-20"
    >
      <h1 className="text-5xl font-heading">
        {blok.title}
      </h1>

      <p className="mt-4 text-muted-foreground">
        {blok.intro}
      </p>

      <BlogFilters posts={posts}/>
    </section>
  );
}