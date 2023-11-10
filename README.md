# Gatsby Theme Aoi

> TypeScript based [Gatsby theme][Gatsby Themes] for [MUI] (Material-UI)

- TypeScript
- MUI
- Mobile friendlly responsive UI
- MUI components composed with Gatsby routing
- Holding global app state
- Dark mode

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fgatsby-theme-aoi.svg)](https://badge.fury.io/js/@cieloazul310%2Fgatsby-theme-aoi) [![Netlify Status](https://api.netlify.com/api/v1/badges/7e344c36-1d49-4331-8bfe-e29709401c91/deploy-status)](https://app.netlify.com/sites/gatsby-theme-aoi/deploys)

## Notice

See [Migration from v2 to v3](./docs/migration-from-v2-to-v3.md).

## Install

### Quick Start with starters

- **Gatsby Starter Aoi Theme**: Simple starter
- **Gatsby Starter Aoi Blog**: Blog starter

#### Gatsby Starter Aoi Theme

```shell
curl https://codeload.github.com/cieloazul310/gatsby-aoi/tar.gz/main | tar -xz --strip=2  gatsby-aoi-main/starters/gatsby-starter-aoi-theme
cd gatsby-starter-aoi-theme
```

See:  
<https://github.com/cieloazul310/gatsby-aoi/tree/main/starters/gatsby-starter-aoi-theme>

Default Theme Demo  
<https://cieloazul310.github.io/gatsby-aoi>

### Gatsby Starter Aoi Blog

```shell
curl https://codeload.github.com/cieloazul310/gatsby-aoi/tar.gz/main | tar -xz --strip=2  gatsby-aoi-main/starters/gatsby-starter-aoi-blog
cd gatsby-starter-aoi-blog
```

See:  
<https://github.com/cieloazul310/gatsby-aoi/tree/main/starters/gatsby-starter-aoi-blog>

Blog Starter Demo  
<https://gatsby-theme-aoi.netlify.app/>

```shell
# install
npm install

# develop
npm run dev

# build
npm run build
```

### Manual install

#### 1. Install

```shell
npm install @cieloazul310/gatsby-theme-aoi
```

and install following peer dependencies:  
[`@mui/material`](https://www.npmjs.com/package/@mui/material) [`@mui/icons-material`](https://www.npmjs.com/package/@mui/icons-material) [`@emotion/react`](https://www.npmjs.com/package/@emotion/react) [`@emotion/styled`](https://www.npmjs.com/package/@emotion/styled)

```shell
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

#### 2. Configuration

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

## 2. Using Aoi Layout

Gatsby Theme Aoi Layout is a simple layout built with MUI including `<AppBar>`, `<Drawer>`, `<BottomNavigation>`, `<Fab>`.

```typescript
import { Layout } from '@cieloazul310/gatsby-theme-aoi';

function Page() {
  return (
    <Layout title="Page Title">
      
    </Layout>
  );
}

export default Page;
```

See:  
[`@cieloazul310/gatsby-theme-aoi-layout`]

## 3. Using Aoi components

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

### Major components

#### `<AppLink>`

MUI Link component composed with [Gatsby Link].

#### `<Jumbotron>`

#### `<Section>`, `<SectionDivider>`

#### `<Article>`

See:  
[`@cieloazul310/gatsby-theme-aoi-components`]

## 4. Shadowing

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

Shadowing in Gatsby Themes  
<https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/>

### Shadowing enabled packages

| パッケージ名                                  | Shadowing | About  |
|---------------------------------------------|-----------|--------|
|[`@cieloazul310/gatsby-theme-aoi`]           | ❌        |        |
|[`@cieloazul310/gatsby-theme-aoi-components`]| ❌        |        |
|[`@cieloazul310/gatsby-theme-aoi-layout`]    | ✅        | Layout |
|[`@cieloazul310/gatsby-theme-aoi-top-layout`]| ✅        | Theme, AppState |
|[`@cieloazul310/gatsby-theme-aoi-utils`]     | ❌        |        |

### Customizing MUI theme

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

See:  
<https://mui.com/customization/theming/>

### Customizing global app state

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
export type Action = { type: 'RESET' } | { type: 'INCREMENT' } | { type: 'DECREMENT' } | { type: 'SET_COUNT'; count: number };

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

### Using global app state

Copy [`AppStateContext.tsx`](https://github.com/cieloazul310/gatsby-aoi/blob/main/packages/gatsby-theme-aoi-top-layout/src/utils/AppStateContext.tsx) and paste it to `src/@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppStateContext.tsx`.

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

### Shadowing layout components

### Customizing menu

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
