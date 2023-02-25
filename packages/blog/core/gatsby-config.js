/* eslint @typescript-eslint/no-var-requires: off */
/* eslint react/function-component-definition: off */
const path = require('path');
const { withDefaults } = require('@cieloazul310/gatsby-theme-aoi-blog-utils');

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions);

  return {
    plugins: [
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
            default: require.resolve('@cieloazul310/gatsby-theme-aoi-blog-templates/src/default.tsx'),
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
