import {
  lighten,
  darken,
  type Theme,
  type ThemeOptions,
} from '@mui/material/styles';
import { type PaletteType } from './ThemeState';

function useGetDesignTokens(initialTheme: Theme) {
  return (mode: PaletteType): ThemeOptions => {
    if (mode === 'light') return initialTheme;
    return {
      ...initialTheme,
      palette: {
        mode: 'dark',
        primary: {
          ...initialTheme.palette.primary,
          light: lighten(initialTheme.palette.primary.light, 0.6),
          main: lighten(initialTheme.palette.primary.main, 0.4),
        },
        secondary: {
          light: lighten(initialTheme.palette.secondary.light, 0.6),
          main: lighten(initialTheme.palette.secondary.main, 0.4),
        },
        background: {
          default: darken(initialTheme.palette.primary.dark, 0.94),
          paper: darken(initialTheme.palette.primary.dark, 0.9),
        },
      },
    };
  };
}

export default useGetDesignTokens;
