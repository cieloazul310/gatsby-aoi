import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import ThemeStateProvider from './ThemeStateProvider';
import AppStateProvider from './AppStateProvider';
import ThemeDispatchContext from '../utils/ThemeStateContext';
import themeReducer, { PaletteType } from '../utils/ThemeState';
import initialTheme from '../theme';
import useUpdateOnClient from '../utils/useUpdateOnClient';

type TopLayoutProps = {
  children: React.ReactNode;
  storedItem: {
    paletteType: string;
    useSystemTheme: boolean;
  };
  siteId: string;
  isMobile: boolean;
};

export default function TopLayout({
  children,
  storedItem,
  siteId,
  isMobile,
}: TopLayoutProps) {
  const isClient = useUpdateOnClient();
  const defaultPaletteType = initialTheme.palette.mode;
  const storedPaletteType =
    storedItem !== null ? storedItem.paletteType : defaultPaletteType;
  const storedUseSystemTheme =
    storedItem !== null ? storedItem.useSystemTheme : false;

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeState, themeDispatch] = React.useReducer(themeReducer, {
    darkMode: storedPaletteType === 'dark',
    useSystemTheme: storedUseSystemTheme || false,
  });
  const { darkMode, useSystemTheme } = themeState;

  let paletteType: PaletteType;
  if (useSystemTheme) {
    paletteType = prefersDarkMode ? 'dark' : 'light';
  } else {
    paletteType = darkMode ? 'dark' : 'light';
  }

  // persist paletteType
  React.useEffect(() => {
    localStorage.setItem(
      siteId,
      JSON.stringify({
        paletteType: darkMode ? 'dark' : 'light',
        useSystemTheme,
      })
    );
  }, [siteId, darkMode, useSystemTheme]);
  /**
   * once and deprecated old storage
   */
  React.useEffect(() => {
    localStorage.removeItem('paletteType');
    localStorage.removeItem('useSystemTheme');
  });

  return (
    <ThemeStateProvider paletteType={paletteType} key={isClient}>
      <ThemeDispatchContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{ state: themeState, dispatch: themeDispatch }}
      >
        <AppStateProvider isMobile={isMobile}>{children}</AppStateProvider>
      </ThemeDispatchContext.Provider>
    </ThemeStateProvider>
  );
}
