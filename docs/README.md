# Gatsby Theme Aoi

**Gatsby Theme Aoi** は、@cieloazul310 が作成した [**Gatsby テーマ**][Gatsby テーマ]です。

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fgatsby-theme-aoi.svg)](https://badge.fury.io/js/@cieloazul310%2Fgatsby-theme-aoi) [![Netlify Status](https://api.netlify.com/api/v1/badges/7e344c36-1d49-4331-8bfe-e29709401c91/deploy-status)](https://app.netlify.com/sites/gatsby-theme-aoi/deploys)

Gatsby Theme Aoi には以下のような機能があります。

- MUI v5 に対応
- MUI や emotion の設定不要
- レスポンシブで拡張性のあるレイアウト (Aoi レイアウト)
- 独自のコンポーネント
- サイト全体のグローバルな state を実装 (App State)
- ダークモードを実装

Gatsby テーマについて  
<https://gatsbyjs.com/docs/themes/>

Gatsby Theme Aoi デモ  
<https://cieloazul310.github.io/gatsby-aoi>

Gatsby Theme Aoi Blog デモ  
<https://gatsby-theme-aoi.netlify.app/>

## 1. インストール方法

**[Gatsby スターター]を使う方法**と、**マニュアルでインストールする方法**が選べます。

### Gatsby スターターを使う

Gatsby Theme Aoi を使った Gatsby スターターを使うと、複雑な設定をすることなく MUI コンポーネントや Gatsby Theme Aoi コンポーネント を使うことができます。  
Gatsby Theme Aoi には、以下の2つのスターターがあります。

1. **Gatsby Starter Aoi Theme**: 最低限の機能を持ったシンプルなスターター
2. **Gatsby Starter Aoi Blog**: ブログスターター

#### 1. Gatsby Starter Aoi Theme

```shell
curl https://codeload.github.com/cieloazul310/gatsby-aoi/tar.gz/main | tar -xz --strip=2  gatsby-aoi-main/starters/gatsby-starter-aoi-theme
cd gatsby-starter-aoi-theme
```

Gatsby Starter Aoi Theme のデモサイト  
<https://cieloazul310.github.io/gatsby-aoi>

#### 2. Gatsby Starter Aoi Blog

```shell
curl https://codeload.github.com/cieloazul310/gatsby-aoi/tar.gz/main | tar -xz --strip=2  gatsby-aoi-main/starters/gatsby-starter-aoi-blog
cd gatsby-starter-aoi-blog
```

Gatsby Starter Aoi Blog のデモサイト  
<https://gatsby-theme-aoi.netlify.app/>

```shell
# install
npm install

# develop
npm run dev

# build
npm run build
```

### マニュアルインストール

#### 1. インストール

```shell
npm install @cieloazul310/gatsby-theme-aoi
```

以下の peerDependencies パッケージが必要です。  
[`@mui/material`](https://www.npmjs.com/package/@mui/material) [`@mui/icons-material`](https://www.npmjs.com/package/@mui/icons-material) [`@emotion/react`](https://www.npmjs.com/package/@emotion/react) [`@emotion/styled`](https://www.npmjs.com/package/@emotion/styled)

```shell
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

#### 2. 設定

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@cieloazul310/gatsby-theme-aoi`,
      options: {
        siteId: `your-site-id`,
      },
    },
  ],
}
```

## 2. レイアウトを使う (Gatsby Theme Aoi Layout)

Gatsby Theme Aoi Layout は、MUI の `<AppBar>`, `<Drawer>`, `<BottomNavigation>`, `<Fab>` を組み込んだレイアウトです。

```tsx
import { Layout } from '@cieloazul310/gatsby-theme-aoi';

function Page() {
  return (
    <Layout title="Your Page Title">
      {...your page components}
    </Layout>
  );
}
export default Page;
```

詳細は [Gatsby Theme Aoi Layout API リファレンス](gatsby-theme-aoi-layout.md) へ

## 3. コンポーネントを使う (Gatsby Theme Aoi Components)

```tsx
import {
  AppLink,
  Section,
  SectionDivider,
  Article,
  ArticleTitle,
  Paragraph,
  Jumbotron,
} from '@cieloazul310/gatsby-theme-aoi';

function Contents() {
  return (
    <Layout title="Components">
      <Jumbotron title="Aoi Components" />
      <SectionDivider />
      <Section>
        <Article>
          <ArticleTitile>
            Page
          </ArticleTitle>
          <Paragraph>
            hogehogehoge
          </Paragrah>
          <AppLink to="/page-2/">
            Go to Page 2
          </AppLink>
        </Article>
      </Section>
    </Layout>
  );
}
```

### 主要なコンポーネント

#### `<AppLink>`

MUI の Link コンポーネントに、[Gatsby Link] の機能を加えたコンポーネント。

#### `<Jumbotron>`

なんかいい感じのページ内ヘッダー

#### `<Section>`, `<SectionDivider>`

ページ内のセクション

#### `<Article>`

記事のためのレイアウトコンポーネント。通常、`<Section>` 内で使用。

詳細は [Gatsby Theme Aoi Components API リファレンス](gatsby-theme-aoi-components.md) へ

## 4. Shadowing

Gatsby Theme Aoi では、MUI テーマの変更や、`AppState` の設定、`<Layout>`コンポーネントのカスタマイズが可能です。それには Gatsby テーマ の [Shadowing] という機能を知る必要があります。

Shadowing in Gatsby Themes  
<https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/>

### Shadowing について

Shadowing は Gatsby テーマ内の実装を、 Gatsby プロジェクト内で上書きできる機能です。

例えば、Gatsby Theme Aoi の `<Layout>` コンポーネントの一部だけを変更したいとします。`<Layout>` コンポーネントは [`@cieloazul310/gatsby-theme-aoi-layout`] で定義されているので、[`@cieloazul310/gatsby-theme-aoi-layout`] が **Shadowing の対象**ということになります。

Shadowing の対象である `gatsby-theme-aoi-layout` の `src` ディレクトリは以下のような構成になっています。

```txt
src
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

例えば、Aoi レイアウトの `/SEO/index.tsx` を修正したい場合、Gatsby プロジェクト内に、

`${your_gatsby_project}/src/@cieloazul310/gatsby-theme-aoi-layout/SEO/index.tsx`

を作成するだけで、対象のファイルを上書きすることができます。

上記の例をまとめると、

- Shadowing 対象パッケージ: [`@cieloazul310/gatsby-theme-aoi-layout`]
- Shadowing 対象ファイル: `src/SEO/index.tsx`
- **作成するファイル**: `${your_gatsby_project}/src/@cieloazul310/gatsby-theme-aoi-layout/SEO/index.tsx`

### Shadowing 可能なパッケージ

| パッケージ名                                  | Shadowing | About  |
|---------------------------------------------|-----------|--------|
|[`@cieloazul310/gatsby-theme-aoi`]           | ❌        |        |
|[`@cieloazul310/gatsby-theme-aoi-components`]| ❌        |        |
|[`@cieloazul310/gatsby-theme-aoi-layout`]    | ✅        | Layout |
|[`@cieloazul310/gatsby-theme-aoi-top-layout`]| ✅        | Theme, AppState |
|[`@cieloazul310/gatsby-theme-aoi-utils`]     | ❌        |        |

Gatsby Theme Aoi では [`@cieloazul310/gatsby-theme-aoi-layout`] と [`@cieloazul310/gatsby-theme-aoi-top-layout`] が Shadowing 可能なパッケージです。

これから説明する Shadowing の例では、Gatsby プロジェクトは以下のようなディレクトリ構成になります。

```txt
.
├── gatsby-config.js
├── index.js
├── node_modules
├── package.json
└── src
    ├── @cieloazul310
    │   ├── gatsby-theme-aoi-layout
    │   │   └── menu.tsx
    │   └── gatsby-theme-aoi-top-layout
    │       ├── utils
    │       │   ├── AppState.ts
    │       │   └── AppStateContext.tsx
    │       └── theme.ts
    └── pages
```

### MUI テーマを変更する (Gatsby Theme Aoi Top Layout)

Shadowing で [MUI テーマ](https://mui.com/customization/theming/)を変更する例です。

`src/@cieloazul310/gatsby-theme-aoi-top-layout/theme.ts`

```typescript
// src/@cieloazul310/gatsby-theme-aoi-top-layout/theme.ts

import { teal, orange } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: orange,
  },
});

export default responsiveFontSizes(theme);
```

### App State を作成する (Gatsby Theme Aoi Top Layout)

`src/@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppState.ts`

```typescript
// src/@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppState.ts

export type AppState = {
  // set your app state
  count: number;
};

// set your initial app state
export const initialAppState: AppState = { count: 0 };

// set your action
export type Action = 
   { type: 'RESET' }
 | { type: 'INCREMENT' } 
 | { type: 'DECREMENT' } 
 | { type: 'SET_COUNT'; count: number };

export default function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'RESET':
      return initialAppState;
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SET_COUNT':
      return { ...state, count: action.count };
    default:
      throw new Error("Reducer don't match the action type.");
  }
}
```

### App State を使用する (Gatsby Theme Aoi Top Layout)

[`AppStateContext.tsx`](https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-top-layout/src/utils/AppStateContext.tsx)をコピーし、`src/@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppStateContext.tsx` 貼り付けると、TypeScript で型が崩れることなく `AppState` を使用できます。

```tsx
// src/pages/index.tsx
import { useAppState, useDispatch } from '../@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppStateContext';

function Page() {
  const { count } = useAppState();
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  return (
    <Layout>
      <p>Count: {count}</p>
      <Button onClick={increment}>
        Increment
      </Button>
    </Layout>
  )
}

export default Page;
```

詳細は [Gatsby Theme Aoi Top Layout API リファレンス](gatsby-theme-aoi-top-layout.md) へ

### メニューを作成する (Gatsby Theme Aoi Layout)

`src/@cieloazul310/gatsby-theme-aoi-layout/menu.tsx`

```tsx
// src/@cieloazul310/gatsby-theme-aoi-layout/menu.tsx
import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';

export type Menu = {
  title: string;
  path: string;
  icon: JSX.Element;
};

const menu: Menu[] = [
  { title: 'Top', path: '/', icon: <HomeIcon /> },
  { title: 'Page 2', path: '/page-2/', icon: <ListIcon /> },
  { title: 'About', path: '/about/', icon: <SportsHandballIcon /> },
];

export default menu;
```

詳細は [Gatsby Theme Aoi Layout API リファレンス](gatsby-theme-aoi-layout.md) へ

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

[Gatsby テーマ]: https://gatsbyjs.com/docs/themes/ "Themes"
[Gatsby スターター]: https://www.gatsbyjs.com/docs/starters/ "Gatsby Starters"
[Shadowing]: https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/ "Shadowing in Gatsby Themes"
[Gatsby Link]: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/ "Gatsby Link API"

[`@cieloazul310/gatsby-theme-aoi`]: https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi
[`@cieloazul310/gatsby-theme-aoi-components`]: https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi-components
[`@cieloazul310/gatsby-theme-aoi-layout`]: https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi-layout
[`@cieloazul310/gatsby-theme-aoi-top-layout`]: https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi-top-layout
[`@cieloazul310/gatsby-theme-aoi-utils`]: https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi-utils
