import * as React from "react";
import Box from "@mui/material/Box";
import type { AppBarProps } from "@mui/material/AppBar";

export type TabContainerProps = React.PropsWithChildren<{
  tabSticky?: boolean;
  appBarPosition: AppBarProps["position"];
}>;

function TabContainer({
  children,
  appBarPosition,
  tabSticky = false,
}: TabContainerProps) {
  const isHeaderTop = appBarPosition === "fixed" || appBarPosition === "sticky";
  const top = React.useMemo(() => {
    if (!tabSticky) return undefined;
    if (!isHeaderTop) return 0;
    return { xs: 56, sm: 64 };
  }, [tabSticky, isHeaderTop]);

  return (
    <Box
      component="nav"
      sx={{
        position: tabSticky ? "sticky" : undefined,
        top,
        backgroundColor: tabSticky ? "background.default" : undefined,
        zIndex: tabSticky ? "mobileStepper" : undefined,
        boxShadow: tabSticky ? 1 : undefined,
      }}
    >
      {children}
    </Box>
  );
}

TabContainer.defaultProps = {
  tabSticky: false,
};

export default TabContainer;
