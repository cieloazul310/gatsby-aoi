/* eslint react/jsx-props-no-spreading: warn */
import {
  Layout as AoiLayout,
  type LayoutProps,
} from '@cieloazul310/gatsby-theme-aoi-layout';

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
