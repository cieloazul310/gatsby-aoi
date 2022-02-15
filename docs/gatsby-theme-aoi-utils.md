# Gatsby Theme Aoi Utils API

Gatsby Theme Aoi Uitls は Gatsby Theme Aoi のためのユーティリティパッケージです。

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fgatsby-theme-aoi-utils.svg)](https://badge.fury.io/js/@cieloazul310%2Fgatsby-theme-aoi-utils)

## Import

```tsx
import { useSiteMetadata } from '@cieloazul310/gatsby-theme-aoi';
```

全てのユーティリティーは `@cieloazul310/gatsby-theme-aoi` からインポートできます。

## Utilitys

### `useSiteMetadata`

*returns*: `Object`

```tsx
const { title } = useSiteMetadata();
```

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-utils/src/graphql-hooks/useSiteMetadata.ts>

### `useAbsoluteUrl`

*args*: `path?`: `string`  
*returns*: `string | undefined`

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-utils/src/useAbsoluteUrl.ts>

### `useBaseUrl`

*returns*: `string`

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-utils/src/useBaseUrl.ts>

### `useSocialShare`

*args*: `type`: `'twitter' | 'facebook' | 'line'`, `title?`: `string`
*returns*: `string`

```tsx
// https://your-site.netlify.app/page-2/

const twitterShareUrl = useSocialShare('twitter', 'page-2');
// => 'https://twitter.com/intent/tweet?text=page-2&url=https%3A%2F%2Fyour-site.netlify.app%2Fpage-2%2F'
```

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-utils/src/useSocialShare.ts>

### `withoutPrefix`

*args*: `pathname`: `string`
*returns*: `string`

```tsx
// baseUrl: 'https://cieloazul310.github.io';
// pathPrefix: '/gatsby-aoi'

const { pathname } = useLocation();
// => '/gatsby-aoi/page-2'

const path = withoutPrefix(pathname);
// => '/page-2'
```

### `usePathnameWithoutPrefix`

*returns*: `string`

## Gatsby Theme Aoi packages

- [`@cieloazul310/gatsby-theme-aoi`]
- [`@cieloazul310/gatsby-theme-aoi-components`]
- [`@cieloazul310/gatsby-theme-aoi-layout`]
- [`@cieloazul310/gatsby-theme-aoi-top-layout`]
- [`@cieloazul310/gatsby-theme-aoi-utils`]

[Gatsby]: https://www.gatsbyjs.com/ "Gatsby"
[MUI]: https://mui.org/ "MUI"

[Gatsby Themes]: https://gatsbyjs.com/docs/themes/ "Themes"
[Gatsby Starters]: https://www.gatsbyjs.com/docs/starters/ "Gatsby Starters"
[Shadowing]: https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/ "Shadowing in Gatsby Themes"
[Gatsby Link]: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/ "Gatsby Link API"

[`@cieloazul310/gatsby-theme-aoi`]: https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi
[`@cieloazul310/gatsby-theme-aoi-components`]: https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi-components
[`@cieloazul310/gatsby-theme-aoi-layout`]: https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi-layout
[`@cieloazul310/gatsby-theme-aoi-top-layout`]: https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi-top-layout
[`@cieloazul310/gatsby-theme-aoi-utils`]: https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi-utils
