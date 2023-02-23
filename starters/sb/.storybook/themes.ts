import { createTheme, lighten } from '@mui/material/styles';
import initialMuiTheme from '@cieloazul310/gatsby-theme-aoi-top-layout/src/theme';

const light = initialMuiTheme;
const dark = createTheme({
  ...initialMuiTheme,
  palette: {
    ...initialMuiTheme.palette.primary,
    primary: {
      main: lighten(initialMuiTheme.palette.primary.main, 0.4)
    },
    secondary: {
      ...initialMuiTheme.palette.secondary,
      main: lighten(initialMuiTheme.palette.secondary.main, 0.4)
    },
    mode: 'dark',
  },
});

export default {
  light,
  dark,
};
