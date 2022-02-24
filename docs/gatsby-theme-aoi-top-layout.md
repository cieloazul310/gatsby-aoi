# Gatsby Theme Aoi Top Layout API

Gatsby Theme Aoi Top Layout は Gatsby Theme Aoi のためのトップレイアウトプラグインです。

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fgatsby-theme-aoi-top-layout.svg)](https://badge.fury.io/js/@cieloazul310%2Fgatsby-theme-aoi-top-layout)

## Shadowing

### MUI theme をカスタムする

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

### グローバルな App State をカスタムする

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

### グローバルな App State を使う

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

## Hooks

### `useAppState`

*returns*: `AppState`

```tsx
function AppStateViewer() {
  const appState = useAppState();
  return (
    <div>
      <p>count: {appState.count}</p>
    </div>
  );
}
```

### `useDispatch`

*returns*: `React.Dispatch<Action>`

```tsx
function IncrementButton() {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };
  return (
    <Button onClick={increment}>
      Increment
    </Button>
  );
}
```

### `useThemeContextState`

*returns*: `ThemeState { darkMode: boolean; useSystemTheme: boolean }`

```tsx
function ThemeContextStateViewer() {
  const { darkmode, useSystemTheme } = useThemeContextState();
  return (
    <div>
      <p>Dark Mode: {darkmode}</p>
      <p>Use System Theme: {useSystemTheme}</p>
    </div>
  );
}
```

### `useToggleDark`

*returns*: `() => void`

```tsx
function ToggleDarkModeButton() {
  const toggleDark = useToggleDark();
  return (
    <Button onClick={toggleDark}>
      Toggle Dark
    </Button>
  );
}
```

### `useToggleUseSystem`

*returns*: `() => void`

```tsx
function ToggleUseSystemButton() {
  const toggleUseSystem = useToggleUseSystem();
  return (
    <Button onClick={toggleUseSystem}>
      Toggle Use System
    </Button>
  );
}
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