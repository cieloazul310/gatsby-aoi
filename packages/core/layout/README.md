# @cieloazul310/gatsby-theme-aoi-layout

> A layout component for [`@cieloazul310/gatsby-theme-aoi`]

## Layout component

```tsx
import { Layout } from '@cieloazul310/gatsby-theme-aoi';
```

Main package `@cieloazul310/gatsby-theme-aoi` includes a following component.

### `<Layout>`

#### `LayoutProps`

- **children (Required)**: `React.ReactNode`
- **title?**: `string`
- **description?**: `string`
- **keywords?**: `string[]`
- **image?**: `string`
- **loading?**: `boolean`
- **componentViewports?**: `Partial<ComponentViewports>`
- **drawerWidth?**: `number`
- **tabSticky?**: `boolean`
- **drawerContents?**: `React.ReactNode`
- **tabs?**: `React.ReactNode`
- **bottomNavigation?**: `React.ReactNode`
- **fab?**: `React.ReactNode`

#### `ComponentViewports`

Component viewports is a configuration for `<SwipeableDrawer>` `<PermanentDrawer>` `<BottomNavigation>` `<Fab>` viewports.

| key               | default    |
|-------------------|------------|
| `swipeableDrawer` | `"smDown"` |
| `permanentDrawer` | `"mdUp"`   |
| `bottomNav`       | `"xsDown"` |
| `fab`             | `"smDown"` |

MUI `breakpoints` (ex. `"smDown"`, `"mdUp"`) or `boolean`

## Shadowing components

```txt
.
├── BottomNav
│   └── index.tsx
├── DrawerInner
│   ├── Contents.tsx
│   ├── DrawerFooter.tsx
│   ├── DrawerSharer.tsx
│   ├── StateHandler.tsx
│   └── index.tsx
├── Fab
│   └── index.tsx
├── Footer
│   ├── Copyrights.tsx
│   ├── Socials.tsx
│   └── index.tsx
├── FooterMenu
│   └── index.tsx
├── Header
│   ├── ButtonLeft.tsx
│   ├── ButtonRight.tsx
│   ├── ShareButtons.tsx
│   └── index.tsx
├── SEO
│   └── index.tsx
├── TabContainer
│   └── index.tsx
├── index.tsx
└── menu.tsx
```

<https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi-layout/src>

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
