import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { storyblokInit, apiPlugin, getStoryblokApi, ISbStoriesParams } from "@storyblok/react";
import Feature from '@/components/Feature';
import Grid from '@/components/Grid';
import Teaser from '@/components/Teaser';
import Page from '@/components/Page';
 

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};


storyblokInit({
  accessToken: "3M6pREVDGaQVCM1ceu0tnQtt",
  use: [apiPlugin],
  components
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
