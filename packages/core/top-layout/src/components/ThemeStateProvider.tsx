import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import initialMuiTheme from '../theme';
import useGetDesignTokens from '../utils/useGetDesignTokens';
import type { PaletteType } from '../utils/ThemeState';

type TopThemeProviderProps = {
  children: React.ReactNode;
  paletteType: PaletteType;
};

function TopThemeProvider({ children, paletteType }: TopThemeProviderProps) {
  const getDesignTokens = useGetDesignTokens(initialMuiTheme);
  const theme = React.useMemo(
    () => responsiveFontSizes(createTheme(getDesignTokens(paletteType))),
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
