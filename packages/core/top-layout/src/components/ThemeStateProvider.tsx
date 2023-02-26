import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
  lighten,
} from '@mui/material/styles';
import initialMuiTheme from '../theme';
import type { PaletteType } from '../utils/ThemeState';

type TopThemeProviderProps = {
  children: React.ReactNode;
  paletteType: PaletteType;
};

function TopThemeProvider({ children, paletteType }: TopThemeProviderProps) {
  const theme = React.useMemo(
    () =>
      createTheme({
        ...initialMuiTheme,
        palette: {
          ...initialMuiTheme.palette.primary,
          primary: {
            main:
              paletteType === 'dark'
                ? lighten(initialMuiTheme.palette.primary.main, 0.4)
                : initialMuiTheme.palette.primary.main,
          },
          secondary: {
            ...initialMuiTheme.palette.secondary,
            main:
              paletteType === 'dark'
                ? lighten(initialMuiTheme.palette.secondary.main, 0.4)
                : initialMuiTheme.palette.secondary.main,
          },
          mode: paletteType,
        },
      }),
    [paletteType]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default TopThemeProvider;
