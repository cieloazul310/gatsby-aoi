import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Switch from "@mui/material/Switch";
import { useTheme } from "@mui/material/styles";
import Bright4Icon from "@mui/icons-material/Brightness4";
import Bright5Icon from "@mui/icons-material/Brightness5";

import {
  useThemeContextState,
  useToggleDark,
  useToggleUseSystem,
} from "@cieloazul310/gatsby-theme-aoi-top-layout";

function ListItemToggleDarkMode({ label = "Dark Mode" }: { label?: string }) {
  const { darkMode, useSystemTheme } = useThemeContextState();
  const toggleDark = useToggleDark();
  return (
    <ListItem>
      <ListItemIcon>
        {darkMode ? <Bright4Icon /> : <Bright5Icon />}
      </ListItemIcon>
      <ListItemText primary={label} />
      <ListItemSecondaryAction>
        <Switch
          disabled={useSystemTheme}
          edge="end"
          color="secondary"
          onChange={toggleDark}
          checked={darkMode}
          inputProps={{ "aria-labelledby": "switch-list-label-darkmode" }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

ListItemToggleDarkMode.defaultProps = {
  label: "Dark Mode",
};

export default ListItemToggleDarkMode;

export function ListItemToggleUseSystemTheme({
  label = "Auto Dark Mode",
}: {
  label?: string;
}) {
  const paletteType = useTheme().palette.mode;
  const { useSystemTheme } = useThemeContextState();
  const toggleUseSystemTheme = useToggleUseSystem();
  return (
    <ListItem>
      <ListItemIcon>
        {paletteType === "dark" ? (
          <Bright4Icon color={useSystemTheme ? "inherit" : "disabled"} />
        ) : (
          <Bright5Icon color={useSystemTheme ? "inherit" : "disabled"} />
        )}
      </ListItemIcon>
      <ListItemText primary={label} />
      <ListItemSecondaryAction>
        <Switch
          edge="end"
          color="secondary"
          onChange={toggleUseSystemTheme}
          checked={useSystemTheme}
          inputProps={{
            "aria-labelledby": "switch-list-label-use-your-system-theme",
          }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

ListItemToggleUseSystemTheme.defaultProps = {
  label: "Auto Dark Mode",
};
