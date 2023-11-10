# `@cieloazul310/gatsby-theme-aoi-blog`

> Gatsby Blog Theme built with Gatsby Theme Aoi

## Usage

### Install

```shell
npm install @cieloazul310/gatsby-theme-aoi @cieloazul310/gatsby-theme-aoi-blog
```

### Configuration

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@cieloazul310/gatsby-theme-aoi`,
      options: {
        siteId: `gatsby-aoi-blog`,
      },
    },
    {
      resolve: `@cieloazul310/gatsby-theme-aoi-blog`,
      options: {
        // contentPath: `content`,
        // assetPath: `content/assets`,
        // postsPerPage: 15,
        // basePaths: {
          // posts: '/posts',
          // category: '/category',
          // tag: '/tag',
          // author: '/author',
        // },
        // excerptLength: 140,
        // imageMaxWidth: 1380,
        // gatsbyRemarkPlugins: [
          // any remark plugins
        // ],
      },
    }
  ],
};
```

#### Plugin options

| option              | type                        | default            |
|---------------------|-----------------------------|--------------------|
| contentPath         | *string*                    | `"content"`        |
| assetPath           | *string*                    | `"content/assets"` |
| postsPerPage        | *number*                    | `15`               |
| excerptLength       | *number*                    | `140`              |
| imageMaxWidth       | *number*                    | `1380`             |
| gatsbyRemarkPlugins | *Array of GatsbyRemarkPlugin* | `[]`               |

### CLI

```shell
npm pkg set scripts.post="gatsby-aoi-blog new post"

npm run post "New page title"
# => Generate "/content/posts/2022/02/new-page-title.md"
```

#### CLI options

| option              | type                        | default            |
|---------------------|-----------------------------|--------------------|
| -a, --author        | *string*                    | `Unknown Author`   |
| -d, --date          | *string*  (Datestring)      | `new Date().toISOString()` |
| --canonical         | *boolean*                   | `false`            |
| --mdx               | *boolean*                   | `false`            |

#### Examples

```shell
# date option
npm run post "New page title" --date 2022-01-01
# => Generate "/content/posts/2022/01/new-page-title.md"

# canonical option
npm run post "New page title" --canonical
# => Generate "/content/posts/2022/02/new-page-title/index.md"

# mdx option
npm run post "New page title" --mdx
# => Generate "/content/posts/2022/02/new-page-title.mdx"
```
