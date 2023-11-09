module.exports = (options) => ({
  siteMetadata: {
    title: `Gatsby Theme Aoi`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@cieloazul310`,
    siteUrl: "https://gatsby-theme-aoi.netlify.app",
    keywords: ["Gatsby", "TypeScript", "MUI"],
    lang: "",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    {
      resolve: `@cieloazul310/gatsby-theme-aoi-top-layout`,
      options: {
        siteId: options.siteId,
      },
    },
    `@cieloazul310/gatsby-theme-aoi-layout`,
    `gatsby-plugin-emotion`,
  ],
});
