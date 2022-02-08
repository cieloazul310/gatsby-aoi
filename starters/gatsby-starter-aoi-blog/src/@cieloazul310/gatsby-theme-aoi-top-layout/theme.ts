import { blue, red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
  typography: {
    body1: {
      lineHeight: 1.8,
    },
    body2: {
      lineHeight: 1.8,
    },
  },
});

export default responsiveFontSizes(theme);
