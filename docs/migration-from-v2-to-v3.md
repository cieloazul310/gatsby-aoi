# Migrating from v2 to v3

## Update dependencies

### Gatsby

```json
{
  "dependencies": {
    "gatsby": "^5.0.0"
  }
}
```

### React

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

### MUI and emotion

```json
{
  "dependencies": {
    "@emotion/react": "^11.0.0",
    "@emotion/styled": "^11.0.0",
    "@mui/icons-material": "^5.0.0",
    "@mui/material": "^5.0.0"
  }
}
```

## BREAKING CHANGE: Components

### `<AppLink>`, `<AppLinkButton>`, `<ListItemAppLink>` and `<PanelLink>`

<del>`<AppLink to="/">Title</AppLink>`</del>  
<ins>`<AppLink href="/">Title</AppLink>`</ins>

Use `href` props instead of `to`.

## BREAKING CHANGE: Top Layout

### Shadowing theme

#### `./src/@cieloazul310/gatsby-theme-aoi-top-layout/theme.ts`

```tsx
import { blue, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});

export default theme;
// x export default respoinsiveFonts(theme);
```

Remove `responsiveFonts`

#### `./src/@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppState.ts`

```tsx
export const initialAppState: AppState = {
  // ...your app state
};

export function useInitialAppState(dispatch: React.Dispatch<Action>, isMobile: boolean) {
  React.useEffect(() => {
    // initial app state handler
    // dispatch({ type: 'Increment' });
  }, []);
}
```

Refactor `useInitialAppState` hook.
