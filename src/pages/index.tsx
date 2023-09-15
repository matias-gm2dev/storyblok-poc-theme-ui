import Head from 'next/head';
import { ISbStoryParams, StoryblokComponent, getStoryblokApi, useStoryblokState } from '@storyblok/react';

export default function Home({ story }: any) {
  story = useStoryblokState(story);
  console.log('tha blok', story);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello World</h1>

        <StoryblokComponent blok={story?.content} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  let slug = 'home';

  let sbParams:ISbStoryParams = {
    version: 'draft', // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
