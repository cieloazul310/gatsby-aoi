import { createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";
import { useGetDesignTokens } from "@cieloazul310/gatsby-theme-aoi-top-layout";

const initialMuiTheme = createTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});

const getDesignTokens = useGetDesignTokens(initialMuiTheme);

const light = initialMuiTheme;
const dark = createTheme(getDesignTokens("dark"));

export default {
  light,
  dark,
};
