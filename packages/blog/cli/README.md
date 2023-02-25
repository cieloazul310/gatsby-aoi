# `@cieloazul310/gatsby-theme-aoi-blog-cli`

> CLI package for Gatsby Theme Aoi Blog

## Usage

```shell
npm set-script post "gatsby-aoi-blog new post"

yarn run post "New page title"
# => Generate "/content/posts/2022/02/new-page-title.md"
```

### Options

| option              | type                        | default            |
|---------------------|-----------------------------|--------------------|
| -a, --author        | *string*                    | `Unknown Author`   |
| -d, --date          | *string*  (Datestring)      | `new Date().toISOString()` |
| --canonical         | *boolean*                   | `false`            |
| --mdx               | *boolean*                   | `false`            |

### Examples

```shell
# date option
yarn run post "New page title" --date 2022-01-01
# => Generate "/content/posts/2022/01/new-page-title.md"

# canonical option
yarn run post "New page title" --canonical
# => Generate "/content/posts/2022/02/new-page-title/index.md"

# mdx option
yarn run post "New page title" --mdx
# => Generate "/content/posts/2022/02/new-page-title.mdx"
```
