import Page from "@/components/Page";
import HomepageHero from "@/components/HomepageHero";
import StorySection from "@/components/StorySection";
import Marquee from "@/components/Marquee";
import PanelsSet from "@/components/PanelsSet";

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
  },

  apiOptions: {
    region: "eu",
  },
});