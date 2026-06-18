import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const resolvedParams = await params;

  const fullSlug =
    resolvedParams?.slug?.join("/") ||
    "home";

  console.log("Requested:", fullSlug);

  try {
    const storyblokApi = getStoryblokApi();

    const { data } =
      await storyblokApi.get(
        `cdn/stories/${fullSlug}`,
        {
          version: "draft",
        }
      );

    console.log(
      "Loaded:",
      data.story.full_slug
    );

    return (
      <StoryblokStory story={data.story} />
    );
  } catch {
    notFound();
  }
}