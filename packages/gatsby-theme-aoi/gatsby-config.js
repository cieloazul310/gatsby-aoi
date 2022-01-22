module.exports = (options) => ({
  siteMetadata: {
    title: `Gatsby Theme Aoi`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@cieloazul310`,
    siteUrl: '',
    baseUrl: '',
    keywords: ['Gatsby', 'TypeScript', 'Material-UI'],
    lang: '',
    social: {
      mail: '',
      twitter: '',
      github: '',
      facebook: '',
      gitlab: '',
      linkedin: '',
      medium: '',
      pocket: '',
      tumblr: '',
      instagram: '',
      vimeo: '',
      youtube: '',
    },
  },
  plugins: [
    {
      resolve: `@cieloazul310/gatsby-theme-aoi-top-layout`,
      options: {
        siteId: options.siteId,
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
  ],
});
