import Page from "@/components/Page";
import HomepageHero from "@/components/HomepageHero";
import StorySection from "@/components/StorySection";
import Marquee from "@/components/Marquee";
import PanelsSet from "@/components/PanelsSet";
import Blog from "@/components/BlogSection";
import RichText from "@/components/RichText";

import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,

  use: [apiPlugin],

  components: {
    page: Page,
    homepageHero: HomepageHero,
    storySection: StorySection,
    Marquee: Marquee,
    panelsSet: PanelsSet,
    blogSection: Blog,
    RichText: RichText,
  },

  apiOptions: {
    region: "eu",
  },
});