module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Aoi Blog`,
    description: `Gatsby Theme Aoi starter for blog.`,
    author: `@cieloazul310`,
    siteUrl: 'https://gatsby-theme-aoi.netlify.app',
    keywords: ['Gatsby', 'TypeScript', 'MUI'],
    lang: 'ja',
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
        url: 'cieloazul310@gmail.com',
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
    {
      resolve: `@cieloazul310/gatsby-theme-aoi-blog`,
      options: {
        // postsPerPage: 15,
        // contentPath: `content`,
        /*
        basePaths: {
          posts: '/posts',
          category: '/category',
          tag: '/tag',
          author: '/author',
        },
        */
        // assetPath: `content/assets`,
        // excerptLength: 140,
        imageMaxWidth: 800,
        gatsbyRemarkPlugins: [
          `gatsby-remark-embed-snippet`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: true,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    `gatsby-plugin-twitter`,
  ],
};
