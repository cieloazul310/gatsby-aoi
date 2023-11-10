const config = (options) => ({
  siteMetadata: {
    title: `Gatsby Theme Aoi Blog Core`,
    description: `Gatsby Theme Aoi Blog Core package.`,
    author: `@cieloazul310`,
    siteUrl: "https://gatsby-theme-aoi.netlify.app",
    keywords: ["Gatsby", "TypeScript", "MUI"],
    lang: "en",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/cieloazul310",
      },
      {
        name: "github",
        url: "https://github.com/cieloazul310",
      },
    ],
  },
  plugins: [
    `@cieloazul310/gatsby-theme-aoi-blog-templates`,
    {
      resolve: `@cieloazul310/gatsby-theme-aoi-blog-core`,
      options,
    },
  ],
});

export default config;
