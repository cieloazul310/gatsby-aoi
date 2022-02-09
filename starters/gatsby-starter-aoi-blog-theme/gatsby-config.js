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
      resolve: `@cieloazul310/gatsby-theme-aoi-blog-core`,
      options: {
        assetPath: `content/images`,
        gatsbyRemarkPlugins: [
          `gatsby-remark-embed-snippet`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: true,
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
        ],
      },
    },
  ],
};
