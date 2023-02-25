import type { GatsbyConfig } from 'gatsby';

const baseUrl = 'https://cieloazul310.github.io';
const pathPrefix = '/gatsby-aoi';
const siteUrl = new URL(pathPrefix, baseUrl);

const config: GatsbyConfig = {
  pathPrefix,
  siteMetadata: {
    title: 'Gatsby Theme Aoi',
    description: 'TypeScript based Gatsby Theme for MUI (Material-UI).',
    author: `@cieloazul310`,
    siteUrl: siteUrl.toString(),
    keywords: ['Gatsby', 'TypeScript', 'MUI'],
    lang: 'en',
    social: [
      {
        name: 'twitter',
        url: 'https://twitter.com/cieloazul310',
      },
      {
        name: 'github',
        url: 'https://github.com/cieloazul310',
      },
      {
        name: 'youtube',
        url: 'https://www.youtube.com/user/hollytube0310',
      },
      {
        name: 'facebook',
        url: 'https://www.facebook.com/hollyhock.official',
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/mito.hollyhock.official/',
      },
      {
        name: 'email',
        url: '',
      },
      {
        name: 'note',
        url: 'https://note.com/mitohollyhock',
      },
    ],
  },
  plugins: [
    {
      resolve: `@cieloazul310/gatsby-theme-aoi`,
      options: {
        siteId: `gatsby-starter-aoi-theme`,
      },
    },
  ],
};

export default config;
