import { createTheme } from '@mui/material/styles';
import initialMuiTheme from '@cieloazul310/gatsby-theme-aoi-top-layout/src/theme';
import { useGetDesignTokens } from '@cieloazul310/gatsby-theme-aoi-top-layout';

const getDesignTokens = useGetDesignTokens(initialMuiTheme);

const light = initialMuiTheme;
const dark = createTheme(getDesignTokens('dark'));

export default {
  light,
  dark,
};
