import * as React from "react";
import type { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  type ComponentViewports,
  useSiteMetadata,
} from "@cieloazul310/gatsby-theme-aoi-utils";
import AppBar from "./AppBar";
import Title from "./Title";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";
import ButtonRightInner from "./ButtonRightInner";

export type HeaderProps = {
  title?: string;
  componentViewports: ComponentViewports;
  toggleDrawer?: () => void;
  appBarPosition?: MuiAppBarProps["position"];
};

function Header({
  title,
  componentViewports,
  appBarPosition,
  toggleDrawer = () => {
    // do nothing
  },
  ...props
}: HeaderProps) {
  const siteMetadata = useSiteMetadata();
  return (
    <AppBar {...props} appBarPosition={appBarPosition}>
      <Toolbar>
        <ButtonLeft
          componentViewports={componentViewports}
          toggleDrawer={toggleDrawer}
          {...props}
        />
        <Title {...props}>{title ?? siteMetadata.title}</Title>
        <ButtonRight {...props}>
          <ButtonRightInner {...props} title={title} />
        </ButtonRight>
      </Toolbar>
    </AppBar>
  );
}

Header.defaultProps = {
  title: undefined,
  toggleDrawer: () => {
    // do nothing
  },
  appBarPosition: undefined,
};

export default Header;
