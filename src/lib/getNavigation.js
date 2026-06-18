import { getStoryblokApi } from "./storyblok";

export async function getNavigation() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/links", {
    version: "draft",
  });

  return Object.values(data.links)
    .filter((link) => link.slug !== "home")
    .filter((link) => {
      return !link.slug.includes("/") || link.slug.split("/").length === 1;
    });
}