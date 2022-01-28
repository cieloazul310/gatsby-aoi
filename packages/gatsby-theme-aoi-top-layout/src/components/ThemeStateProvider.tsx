import * as React from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme, lighten } from '@mui/material/styles';
import initialMuiTheme from '../theme';
import { PaletteType } from '../utils/ThemeState';

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
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        {/*
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet" />
        */}
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
}

export default TopThemeProvider;
