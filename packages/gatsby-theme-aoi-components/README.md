# @cieloazul310/gatsby-theme-aoi-components

> A components libary for [`@cieloazul310/gatsby-theme-aoi`] built with [MUI]

## Components

```tsx
import { AppLink } from '@cieloazul310/gatsby-theme-aoi';
```

The main package `@cieloazul310/gatsby-theme-aoi` includes all following components.

### Link

#### `<AppLink>`

MUI `<Link>` component composed with [Gatsby Link].

#### `<AppLinkButton>`

MUI `<Button>` component composed with [Gatsby Link].

#### `<ListItemAppLink>`

MUI `<ListItem>` component composed with [Gatsby Link].

#### `<ExternalLink>`

MUI Link component containing default props of `target="_blank"` and `rel="noopener noreferrer"`

### Article

#### `<Article>`

Article container components.

#### `<Paragraph>` `<SubParagraph>`

Equiveant to `<Typography paragrah>`

#### `<ArticleTitle>` `<H3>` `<H4>` `<H5>` `<H6>`

MUI based header components. MUI default Typography variants are too large, especially for Japanse text.

#### `<Blockquote>`

Simple `<blockquote>` component.

#### `<Hr>`

MUI `<Divider>` component.

### Layout

#### `<Jumbotron>`

#### `<Section>`

#### `<SectionDivider>`

### Dark mode

#### `<ListItemToggleDarkMode>`

MUI `<ListItem>` component incleding `<Switch>` to toggle dark mode.

#### `<ListItemToggleUseSystemTheme>`

MUI `<ListItem>` component including `<Switch>` to toggle using system theme.

See:  
[`@cieloazul310/gatsby-theme-aoi-top-layout`]

## Gatsby Theme Aoi packages

- [`@cieloazul310/gatsby-theme-aoi`]
- [`@cieloazul310/gatsby-theme-aoi-components`]
- [`@cieloazul310/gatsby-theme-aoi-layout`]
- [`@cieloazul310/gatsby-theme-aoi-top-layout`]
- [`@cieloazul310/gatsby-theme-aoi-utils`]

## References

- [Gatsby]
- [MUI]
- [gatsby-plugin-material-ui](https://github.com/hupe1980/gatsby-plugin-material-ui)
- [gatsby-theme-material-ui](https://github.com/hupe1980/gatsby-theme-material-ui)

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
