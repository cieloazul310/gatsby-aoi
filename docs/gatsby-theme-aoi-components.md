# Gatsby Theme Aoi Components API

Gatsby Theme Aoi Components は Gatsby Theme Aoi のためのコンポーネントパッケージです。

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fgatsby-theme-aoi-components.svg)](https://badge.fury.io/js/@cieloazul310%2Fgatsby-theme-aoi-components)

## Import

```tsx
import { AppLink } from '@cieloazul310/gatsby-theme-aoi';
```

全てのコンポーネントは `@cieloazul310/gatsby-theme-aoi` からインポートできます；

## Components

### `<AppLink>`

[Gatsby Link] を MUI [`Link`](https://mui.com/components/links/) でスタイリングしたコンポーネント

#### Example Code

```tsx
<AppLink to="/page-2/">
  Go to Page 2
</AppLink>
```

#### Props

- [MUI `Link` Props](https://mui.com/api/link/)
&
- [@reach/router `Link` Props](https://reach.tech/router/api/Link)

### `<AppLinkButton>`

[Gatsby Link] を MUI [`Button`](https://mui.com/components/buttons/) でスタイリングしたコンポーネント

#### Example Code

```tsx
<AppLinkButton to="/page-2/" variant="contained" color="primary">
  Go to Page 2
</AppLinkButton>
```

#### Props

[MUI `Button` Props](https://mui.com/api/button/)  
&  
[@reach/router `Link` Props](https://reach.tech/router/api/Link)

### `<BottomNavigationAppLink>`

[Gatsby Link] を MUI [`BottomNavigationAction`](https://mui.com/api/bottom-navigation-action/) でスタイリングしたコンポーネント

#### Example Code

```tsx
import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAppLink, usePathnameWithoutPrefix } from '@cieloazul310/gatsby-theme-aoi';

function BottomNav() {
  const pathname = usePathnameWithoutPrefix();
  return (
    <BottomNavigation 
      value={pathname}
      showLabels
    >
      <BottomNavigationAppLink
       value="/"
       label="Home"
       icon={<HomeIcon />} 
      />
      <BottomNavigationAppLink
       value="/page-2/" 
       label="Page 2"
       icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
}
```

#### Props

[MUI `BottomNavigationAction` Props](https://mui.com/api/bottom-navigation-action/)

NOTE: Gatsby Link の `to` prop は `value` prop と同一の値を取ります.

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/AppLink.tsx>

---

### `<Article>`

記事のためのコンポーネント

#### Props

| Name       | Type              | Default |
|------------|-------------------|---------|
| `children` | `React.ReactNode` |         |
| `maxWidth` | `string`          | `'sm'`  |

&  
[MUI `Container` Props](https://mui.com/api/container/)

### `<ArticleTitle>`

記事のタイトルのためのコンポーネント。`<h2>`に

#### Props

[MUI `Typography` Props]

### `<Paragraph>`

段落のためのコンポーネント

equivalent to:  
`<Typography variant="body1" paragraph>`

#### Props

[MUI `Typography` Props]

### `<SubParagraph>`

小さい文字で構成された段落のためのコンポーネント

equivalent to:  
`<Typography variant="body2" paragraph>`

#### Props

[MUI `Typography` Props]

### `<H3>`

Gatsby Theme Aoi `<h3>` component.

#### Props

[MUI `Typography` Props]

### `<H4>`

Gatsby Theme Aoi `<h4>` component.

#### Props

[MUI `Typography` Props]

### `<H5>`

Gatsby Theme Aoi `<h5>` component.

#### Props

[MUI `Typography` Props]

### `<H6>`

Gatsby Theme Aoi `<h6>` component.

#### Props

[MUI `Typography` Props]

### `<Blockquote>`

Gatsby Theme Aoi `<blockquote>` component.

#### Props

[MUI `Typography` Props]

### `<Hr>`

MUI `Divider` with margin-top and margin-bottom.

### `<InlineCode>`

Gatsby Theme Aoi `<code>` component.

#### Props

[MUI `Typography` Props]

### `<Ul>`

Gatsby Theme Aoi `<ul>` component.

#### Props

[MUI `Typography` Props]

### `<Ol>`

Gatsby Theme Aoi `<ol>` component.

#### Props

[MUI `Typography` Props]

### `<Li>`

Gatsby Theme Aoi `<li>` component.

#### Props

[MUI `Typography` Props]

### `<ErrorMessage>`

A paragraph component with muiTheme `palette.error` color background.

#### Props

[MUI `Typography` Props]

### `<Warning>`

A paragraph component with muiTheme `palette.warning` color background.

#### Props

[MUI `Typography` Props]

### `<Info>`

A paragraph component with muiTheme `palette.info` color background.

#### Props

[MUI `Typography` Props]

### `<Success>`

A paragraph component with muiTheme `palette.success` color background.

#### Props

[MUI `Typography` Props]

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/Article.tsx>

---

### `<ExternalLink>`

MUI [`Link`](https://mui.com/components/links/) component with `target="_blank" rel="noopener noreferrer"`

#### Example Code

```tsx
<ExternalLink href="https://www.mito-hollyhock.net/">
  Link
</ExternalLink>
```

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/ExternalLink.tsx>

---

### `<Jumbotron>`

#### Example Code

```tsx
<Jumbotron title="Vamos" maxWidth="md" />
```

#### Props

| name        | Type              | Default     | Description      |
|-------------|-------------------|-------------|------------------|
| `children?` | `React.ReactNode` | `undefined` | children element |
| `title?`    | `string`          | `undefined` | title (children or title) |
| `maxWidth?` | `string`          | `undefined` | inner container  |
| `height?`   | `number`          | `undefined` | height           |
| `bgColor?`  | `string`          | `undefined` | background color |
| `bgImage?`  | `string`          | `undefined` | background image |
| `gradient?` | `boolean`         | `undefined` | background gradient |

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/Jumbotron.tsx>

---

### `<ListItemAppLink>`

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/ListItemAppLink.tsx>

---

### `<ListItemLink>`

`xs` size: `ListItemButton`
larger than `sm`: `ListItem`

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/ListItemLink.tsx>

---

### `<ListItemToggleDarkMode>`

### `<ListItemToggleUseSystemTheme>`

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/ListItemToggleDarkMode.tsx>

---

### `<Section>`

### `<SectionDivider>`

An empty `<div>` component

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/Section.tsx>

---

### `<SocialIcon>`

MUI Icon component with social icons.

#### Props

| name   | Type              |
|--------|-------------------|
| `name` (*Required*) | `'email' | 'twitter' | 'facebook' | 'github' | 'instagram' | 'youtube' | 'linkedin' | string` |
&  
`IconProps`: <https://mui.com/api/icon/>

### `<SocialLink>`

#### Props

| name   | Type              |
|--------|-------------------|
| `name` | `'email' | 'twitter' | 'facebook' | 'github' | 'instagram' | 'youtube' | 'linkedin' | string` |
| `url`  | `string` |
&  
`IconProps`: <https://mui.com/api/icon/>

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/Socials.tsx>

---

### `<TabPane>`

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/TabPane.tsx>

[Gatsby Link]: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/ "Gatsby Link API"
[`Typography`]: https://mui.com/components/typography/ "Typography"
[MUI `Typography` Props]: https://mui.com/api/typography/
