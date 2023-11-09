import * as React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  useHeaderMenuButtonDisplay,
  type ComponentViewports,
} from "@cieloazul310/gatsby-theme-aoi-utils";

export type ButtonLeftProps = {
  componentViewports: ComponentViewports;
  toggleDrawer: () => void;
};

function ButtonLeft({
  toggleDrawer,
  componentViewports: { swipeableDrawer, permanentDrawer },
}: ButtonLeftProps) {
  const showMenuButton = swipeableDrawer !== false;
  const menuButtonDisplay = useHeaderMenuButtonDisplay({
    swipeableDrawer,
    permanentDrawer,
  });
  const onBackButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (typeof window === "object") window.history.back();
  };
  return (
    <>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Tooltip title="Back">
          <IconButton
            color="inherit"
            onClick={onBackButtonClick}
            edge="start"
            aria-label="Get back to where you once belonged"
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ display: menuButtonDisplay }}>
        {showMenuButton ? (
          <Tooltip title="Menu">
            <IconButton
              color="inherit"
              onClick={toggleDrawer}
              edge="start"
              aria-label="Open Menu"
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
        ) : null}
      </Box>
    </>
  );
}

export default ButtonLeft;
