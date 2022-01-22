module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Aoi`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@cieloazul310`,
    siteUrl: 'https://cieloazul310.github.io/gatsby-starter-aoi-theme',
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
      resolve: `@cieloazul310/gatsby-theme-aoi`,
      options: {
        siteId: `gatsby-starter-aoi-theme`,
      },
    },
  ],
};
