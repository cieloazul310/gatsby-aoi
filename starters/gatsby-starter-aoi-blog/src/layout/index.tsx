/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  Layout as AoiLayout,
  LayoutProps,
} from '@cieloazul310/gatsby-theme-aoi';

function Layout({ children, componentViewports, ...props }: LayoutProps) {
  return (
    <AoiLayout
      componentViewports={componentViewports ?? { bottomNav: false }}
      {...props}
    >
      {children}
    </AoiLayout>
  );
}

export default Layout;
