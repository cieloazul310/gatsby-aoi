/* eslint @typescript-eslint/no-var-requires: off */
/* eslint react/function-component-definition: off */
const path = require('path');
const withDefaults = require('./utils/default-options');

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions);

  return {
    siteMetadata: {
      title: `Gatsby Theme Aoi Blog Core`,
      description: `Gatsby Theme Aoi Blog Core package.`,
      author: `@cieloazul310`,
      siteUrl: 'https://gatsby-theme-aoi.netlify.app',
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
      ],
    },
    plugins: [
      {
        resolve: `@cieloazul310/gatsby-theme-aoi`,
        options: {
          siteId: `gatsby-starter-aoi-theme`,
        },
      },
      /*
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `/src/pages/`,
        },
      },
      */
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: path.join(options.contentPath, options.basePaths.posts),
          name: path.join(options.contentPath, options.basePaths.posts),
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.assetPath,
        },
      },
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-remark-images`,
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          defaultLayouts: {
            default: require.resolve('./src/templates/default.tsx'),
          },
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: options.imageMaxWidth,
              },
            },
            `gatsby-remark-responsive-iframe`,
            ...options.gatsbyRemarkPlugins,
          ],
        },
      },
    ],
  };
};
