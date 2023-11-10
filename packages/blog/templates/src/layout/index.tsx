/* eslint react/jsx-props-no-spreading: warn */
import * as React from "react";
import {
  Layout as AoiLayout,
  type LayoutProps,
} from "@cieloazul310/gatsby-theme-aoi-layout";

function Layout({ children, disableBottomNav = true, ...props }: LayoutProps) {
  return (
    <AoiLayout disableBottomNav={disableBottomNav} {...props}>
      {children}
    </AoiLayout>
  );
}

export default Layout;
