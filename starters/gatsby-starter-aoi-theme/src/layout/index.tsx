/* eslint react/jsx-props-no-spreading: warn */
import * as React from "react";
import type { PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import {
  Layout as AoiLayout,
  Jumbotron,
  Section,
  Article,
  mdxComponents,
  type LayoutProps as AoiLayoutProps,
} from "@cieloazul310/gatsby-theme-aoi";
import { useAppState } from "../@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppStateContext";

type LayoutProps = AoiLayoutProps<{ bgImage?: string }> &
  PageProps<
    Record<string, unknown>,
    { frontmatter?: { title?: string | null } }
  >;

function Layout({ children, bgImage, pageContext, ...props }: LayoutProps) {
  const { appBarPosition } = useAppState();
  const title = pageContext.frontmatter?.title ?? "Gatsby Theme Aoi";
  return (
    <AoiLayout
      title={title}
      appBarPosition={props?.appBarPosition ?? appBarPosition}
      {...props}
    >
      <Jumbotron
        title={title}
        bgImage={bgImage}
        component="header"
        maxWidth="md"
      />
      <Section component="main">
        <Article maxWidth="md">
          <MDXProvider components={{ ...mdxComponents }}>
            {children}
          </MDXProvider>
        </Article>
      </Section>
    </AoiLayout>
  );
}

export default Layout;
