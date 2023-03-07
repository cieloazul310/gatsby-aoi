/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  Layout as AoiLayout,
  type LayoutProps,
} from '@cieloazul310/gatsby-theme-aoi-layout';

function Layout({
  children,
  componentViewports = { bottomNav: false },
  ...props
}: LayoutProps) {
  return (
    <AoiLayout componentViewports={componentViewports} {...props}>
      {children}
    </AoiLayout>
  );
}

export default Layout;
