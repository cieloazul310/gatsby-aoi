// src/@cieloazul310/gatsby-theme-aoi-top-layout/theme.ts
import { blue, red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});

export default responsiveFontSizes(theme);
