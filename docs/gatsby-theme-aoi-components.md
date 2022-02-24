# Gatsby Theme Aoi Components API

Gatsby Theme Aoi Components は Gatsby Theme Aoi のためのコンポーネントパッケージです。

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fgatsby-theme-aoi-components.svg)](https://badge.fury.io/js/@cieloazul310%2Fgatsby-theme-aoi-components)

## Import

```tsx
import { AppLink } from '@cieloazul310/gatsby-theme-aoi';
```

全てのコンポーネントは `@cieloazul310/gatsby-theme-aoi` からインポートできます。

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

MUI `Link` Props  
<https://mui.com/api/link/>)

@reach/router `Link` Props  
<https://reach.tech/router/api/Link>

### `<AppLinkButton>`

[Gatsby Link] を MUI [`Button`](https://mui.com/components/buttons/) でスタイリングしたコンポーネント

#### Example Code

```tsx
<AppLinkButton to="/page-2/" variant="contained" color="primary">
  Go to Page 2
</AppLinkButton>
```

#### Props

MUI `Button` Props  
<https://mui.com/api/button/>

@reach/router `Link` Props  
<https://reach.tech/router/api/Link>

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

MUI `BottomNavigationAction` Props  
<https://mui.com/api/bottom-navigation-action/>

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
MUI `Container` Props  
<https://mui.com/api/container/>

### `<ArticleTitle>`

記事のタイトルのためのコンポーネント。`<h2>`

#### Props

MUI `Typography` Props  
<https://mui.com/api/typography/>

### `<Paragraph>`

段落のためのコンポーネント

equivalent to:  
`<Typography variant="body1" paragraph>`

#### Props

MUI `Typography` Props  
<https://mui.com/api/typography/>

### `<SubParagraph>`

小さい文字で構成された段落のためのコンポーネント

equivalent to:  
`<Typography variant="body2" paragraph>`

#### Props

MUI `Typography` Props  
<https://mui.com/api/typography/>

### `<H3>`

Gatsby Theme Aoi のための `<h3>` コンポーネント

#### Props

MUI `Typography` Props  
<https://mui.com/api/typography/>

### `<H4>`

Gatsby Theme Aoi のための `<h4>` コンポーネント

#### Props

MUI `Typography` Props  
<https://mui.com/api/typography/>

### `<H5>`

Gatsby Theme Aoi のための `<h5>` コンポーネント

#### Props

MUI `Typography` Props  
<https://mui.com/api/typography/>

### `<H6>`

Gatsby Theme Aoi のための `<h6>` コンポーネント

#### Props

MUI `Typography` Props  
<https://mui.com/api/typography/>

### `<Blockquote>`

Gatsby Theme Aoi のための `<blockquote>` コンポーネント

#### Props

MUI `Typography` Props  
<https://mui.com/api/typography/>

### `<Hr>`

MUI の `Divider` に margin-top and margin-bottom を与えたコンポーネント

### `<InlineCode>`

Gatsby Theme Aoi のための `<code>` コンポーネント

#### Props

MUI `Typography` Props  
<https://mui.com/api/typography/>

### `<Ul>`

Gatsby Theme Aoi のための `<ul>` コンポーネント

#### Props

MUI `Typography` Props  
<https://mui.com/api/typography/>

### `<Ol>`

Gatsby Theme Aoi のための `<ol>` コンポーネント

#### Props

MUI `Typography` Props  
<https://mui.com/api/typography/>

### `<Li>`

Gatsby Theme Aoi のための `<li>` コンポーネント

#### Props

MUI `Typography` Props  
<https://mui.com/api/typography/>

### `<Alert>`

MUI の `<Alert>` を簡略化したもの。

#### Props

| name | type | default |
|------|------|---------|
| `title` | `string` | `undefiend` |

&  
MUI `Alert` Props  
<https://mui.com/api/alert/>

#### Example Code

```tsx
<Alert severity="error" title="Error">
  Error message hoge hoge hoge.
</Alert>

<Alert severity="success">
  Success message hoge hoge hoge.
</Alert>
```

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/Article.tsx>

---

### `<ExternalLink>`

デフォルトで `target="_blank" rel="noopener noreferrer"` の値がついた MUI [`Link`](https://mui.com/components/links/) コンポーネント

#### Example Code

```tsx
<ExternalLink href="https://www.mito-hollyhock.net/">
  Link
</ExternalLink>
```

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/ExternalLink.tsx>

---

### `<Jumbotron>`

Bootstarp の Jumbotron のようなコンポーネント

#### Example Code

```tsx
// with title
<Jumbotron title="Vamos" maxWidth="md" />

// with children
<Jumbotron maxWidth="md">
  <Typography variant="body2">Type</Typography>
  <Typography variant="h5" component="h2" gutterBottom>
    Title
  </Typography>
  <Button variant="contained">
    Getting Started
  </Button>
</Jumbotron>
```

#### Props

| name        | Type              | Default     | Description      |
|-------------|-------------------|-------------|------------------|
| `children?` | `React.ReactNode` | `undefined` | 子要素 |
| `title?`    | `string`          | `undefined` | タイトル (`children` がある場合は非表示) |
| `maxWidth?` | `Breakpoints`     | `undefined` | コンテナーの `maxWidth` |
| `height?`   | `number`          | `undefined` | 高さ           |
| `bgColor?`  | `string`          | `undefined` | 背景色 |
| `bgImage?`  | `string`          | `undefined` | 背景画像 |
| `gradient?` | `boolean`         | `undefined` | 背景色のグラデーションエフェクト |

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/Jumbotron.tsx>

---

### `<ListItemAppLink>`

[Gatsby Link] を MUI [`ListItem`](https://mui.com/components/links/) でスタイリングしたコンポーネント

#### Example Code

```tsx
<List>
  <ListItemAppLink to="/page-2/">
    <ListItemIcon>
      <PersonIcon>
    </ListItemIcon>
    <ListItemText primary="Page 2" />
  </ListItemAppLink>
</List>
```

#### Props

MUI `ListItem` Props  
<https://mui.com/api/list-item/>

@reach/router `Link` Props  
<https://reach.tech/router/api/Link>

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/ListItemAppLink.tsx>

---

### `<ListItemLink>`

[Gatsby Link] を装飾した Gatsby Theme Aoi 独自のコンポーネント。
`xs` サイズではボタンに、`sm` サイズ以上では `ListItem` の `primaryText` がリンクになる。

#### Example Code

```tsx
<List>
  <ListItemLink to="/page-2/" primaryText="Page-2" />
</List>
```

#### Props

| name               | type              | default      | description |
|--------------------|-------------------|--------------|--------|
| `to`               | `string`          | **Requried** | |
| `color?`           | `string`          | `'inherit'`  | MUI Link Color |
| `primaryText`      | `string`          | **Requried** | |
| `secondaryText?`   | `string`          | `undefined`  | |
| `button?`          | `boolean`         | `undefined`  | `'xs'` では常に `true` |
| `inset?`           | `boolean`         | `false`      | |
| `avatar?`          | `React.ReactNode` | `undefined`  | |
| `secondaryAction?` | `React.ReactNode` | `undefined`  | |

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/ListItemLink.tsx>

---

### `<ListItemToggleDarkMode>`

MUI [`ListItem`](https://mui.com/components/links/) に `@cieloazul310/gatsby-theme-aoi-top-layout` のダークモード切り替えのスイッチを組み込んだコンポーネント

#### Props

| name | type | default |
|------|------|---------|
| `label?` | `string` | `'Dark Mode'` |

### `<ListItemToggleUseSystemTheme>`

MUI [`ListItem`](https://mui.com/components/links/) に `@cieloazul310/gatsby-theme-aoi-top-layout` のシステムテーマ利用の切り替えのスイッチを組み込んだコンポーネント

#### Props

| name | type | default |
|------|------|---------|
| `label?` | `string` | `'Auto Dark Mode'` |

#### Example Code

```tsx
<List>
  <ListItemToggleDarkMode label="ダークモード" />
  <ListItemUseSystemTheme label="システムテーマ" />
</List>
```

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/ListItemToggleDarkMode.tsx>

---

### `<Section>`

`background.paper` の背景色を持った `<div>` コンポーネント

### `<SectionDivider>`

`<Section>` コンポーネントを区切るための空の `<div>` 要素。`<Section>` 要素より少し暗い背景色を持つ。

NOTE: Material-UI v4 以前は `background.default` は `background.paper` より暗く、空の `<div>` 要素を置くことでレイアウトにアクセントを付けられた。

#### Example Code

```tsx
<Layout title="Page Title">
  <Jumbotron title="Example" />
  <SectionDivider />
  <Section>
    <Article>
      {...article}
    </Article>
  </Section>
  <SectionDivider />
  <Section>
    <Article>
      {...footer}
    </Article>
  </Section>
</Layout>
```

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/Section.tsx>

---

### `<SocialIcon>`

MUI Icon にソーシャルアイコンを設定したコンポーネント

#### Props

| name   | Type              |
|--------|-------------------|
| `name` | `'email' | 'twitter' | 'facebook' | 'github' | 'instagram' | 'youtube' | 'linkedin' | string` |
&  
`IconProps`: <https://mui.com/api/icon/>

### `<SocialLink>`

`<SocialIcon>` に外部リンクを設定したコンポーネント

#### Props

| name   | Type              |
|--------|-------------------|
| `name` | `'email' | 'twitter' | 'facebook' | 'github' | 'instagram' | 'youtube' | 'linkedin' | string` |
| `url`  | `string` |
&  
`IconProps`: <https://mui.com/api/icon/>

#### Example Code

```tsx
const { socials } = useSiteMetadata();

return (
  <div>
    {social.map(({ name, url }, index) => (
      <SocialLink key={index.toString()} name={name} url={url} />
    ))}
  </div>
);
```

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/Socials.tsx>

---

### `<TabPane>`

Gatsby Theme Aoi のためのタブの枠コンポーネント

#### Example

```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Page() {
  const [tab, setTab] = React.useState(0);
  const handleTab = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  const handleTabIndex = (index: number) => () => {
    setTab(index);
  };
  return (
    <Layout
      tabs={
        <Tabs value={tab} onChange={handleTab}>
          <Tab label="Tab1" />
          <Tab label="Tab2" />
          <Tab label="Tab3" />
        </Tabs>
      }
    >
      <TabPane index={0} currentTab={tab}>
        {...children}
      </TabPane>
      <TabPane index={1} currentTab={tab}>
        {...children}
      </TabPane>
      <TabPane index={2} currentTab={tab}>
        {...children}
      </TabPane>
    </Layout>
  );
}
```

#### Props

| name | type | default |
|------|------|---------|
| `currentTab` | `number` | **Requried** |
| `index` | `number` | **Requried** |
| `children` | `React.ReactNode` | **Requried** |
| `renderNeightbor?` | `boolean` | `false` |

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-components/src/TabPane.tsx>

[Gatsby Link]: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/ "Gatsby Link API"
[`Typography`]: https://mui.com/components/typography/ "Typography"
[MUI `Typography` Props]: https://mui.com/api/typography/
