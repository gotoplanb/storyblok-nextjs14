"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
 
/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
 
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};
 
storyblokInit({
  apiOptions: {
    region: "us",
  },
  accessToken: "{{YOUR_TOKEN}}",
  use: [apiPlugin],
});
 
export default function StoryblokProvider({ children }) {
  return children;
}
