# Gatsby Theme Aoi Monorepo

> Gatsby theme for MUI

## Quick Start with a starter

```shell
curl https://codeload.github.com/cieloazul310/gatsby-aoi/tar.gz/main | tar -xz --strip=2  gatsby-aoi-main/starters/gatsby-starter-aoi-theme
cd gatsby-starter-aoi-theme
```

```shell
# install
yarn install

# develop
yarn run dev

# build
yarn run build
```

## Manual install

### 1. Install

```shell
yarn add @cieloazul310/gatsby-theme-aoi
```

### 2. Configuration

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

### 3. Use components and layouts

```typescript
import { AppLink, Layout } from '@cieloazul310/gatsby-theme-aoi';

function Page() {
  return (
    <Layout title="Page Title">
      
    </Layout>
  );
}

export default Page;
```

## Guide

### Customizing MUI theme

```shell
mkdir -p src/@cieloazul310/gatsby-theme-aoi-top-layout/utils
touch src/@cieloazul310/gatsby-theme-aoi-top-layout/utils/theme.ts
```

```typescript
// src/@cieloazul310/gatsby-theme-aoi-top-layout/utils/theme.ts
import { teal, orange } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});

export default responsiveFontSizes(theme);
```

### Customizing global app state

```shell
mkdir -p src/@cieloazul310/gatsby-theme-aoi-top-layout/utils
touch src/@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppState.ts
touch src/@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppStateContext.ts
```

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

### Shadowing layout components

```shell
mkdir -p src/@cieloazul310/gatsby-theme-aoi-layout
```

[gatsby-theme-aoi]: https://github.com/cieloazul310/gatsby-aoi/
[@cieloazul310/gatsby-theme-aoi]: https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi
[@cieloazul310/gatsby-theme-aoi-top-layout]: https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi-top-layout
[@cieloazul310/gatsby-theme-aoi-utils]: https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi-utils
[@cieloazul310/gatsby-theme-aoi-components]: https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi-components
[@cieloazul310/gatsby-theme-aoi-layout]: https://github.com/cieloazul310/gatsby-aoi/tree/main/packages/gatsby-theme-aoi-layout
