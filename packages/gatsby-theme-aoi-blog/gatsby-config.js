module.exports = (options) => ({
  plugins: [
    `@cieloazul310/gatsby-theme-aoi-blog-templates`,
    {
      resolve: `@cieloazul310/gatsby-theme-aoi-blog-core`,
      options,
    },
  ],
});
