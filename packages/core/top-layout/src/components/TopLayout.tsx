import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import ThemeStateProvider from "./ThemeStateProvider";
import AppStateProvider from "./AppStateProvider";
import ThemeDispatchContext from "../utils/ThemeStateContext";
import themeReducer from "../utils/ThemeState";
import initialTheme from "../theme";

type TopLayoutProps = {
  children: React.ReactNode;
  storedItem: {
    paletteType?: string;
    useSystemTheme?: boolean;
  } | null;
  siteId: string;
  isMobile: boolean | null;
};

export default function TopLayout({
  children,
  storedItem,
  siteId,
  isMobile = false,
}: TopLayoutProps) {
  const defaultPaletteType = initialTheme.palette.mode;
  const storedPaletteType = storedItem?.paletteType ?? defaultPaletteType;

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [themeState, themeDispatch] = React.useReducer(themeReducer, {
    darkMode: false,
    useSystemTheme: false,
  });

  React.useEffect(() => {
    if (storedPaletteType === "dark") {
      themeDispatch({ type: "TOGGLE_DARKMODE" });
    }
    if (storedItem?.useSystemTheme) {
      themeDispatch({ type: "TOGGLE_USE_SYSTEM_THEME" });
    }
  }, []);
  const { darkMode, useSystemTheme } = themeState;
  const paletteType = React.useMemo(() => {
    if (useSystemTheme) {
      return prefersDarkMode ? "dark" : "light";
    }
    return darkMode ? "dark" : "light";
  }, [prefersDarkMode, useSystemTheme, darkMode]);

  // persist paletteType
  React.useEffect(() => {
    localStorage.setItem(
      siteId,
      JSON.stringify({
        paletteType: darkMode ? "dark" : "light",
        useSystemTheme,
      }),
    );
  }, [siteId, darkMode, useSystemTheme]);
  /**
   * once and deprecated old storage
   */
  React.useEffect(() => {
    localStorage.removeItem("paletteType");
    localStorage.removeItem("useSystemTheme");
  });

  return (
    <ThemeStateProvider paletteType={paletteType}>
      <ThemeDispatchContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{ state: themeState, dispatch: themeDispatch }}
      >
        <AppStateProvider isMobile={isMobile ?? false}>
          {children}
        </AppStateProvider>
      </ThemeDispatchContext.Provider>
    </ThemeStateProvider>
  );
}
