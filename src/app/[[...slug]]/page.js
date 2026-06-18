import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function Page({ params }) {
  const slug = params?.slug?.join("/") || "home";

  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
  });

  return <StoryblokStory story={data.story} />;
}