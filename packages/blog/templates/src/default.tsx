import * as React from 'react';
import type { PageProps, HeadProps } from 'gatsby';
import {
  Article,
  Section,
  Jumbotron,
  Seo,
  mdxComponents,
} from '@cieloazul310/gatsby-theme-aoi-components';
import { MDXProvider } from '@mdx-js/react';
import Layout from './layout';
import shortcodes from './shortcodes';

type PageContext = {
  frontmatter?: {
    title?: string;
  };
};

type Props = PageProps<null, PageContext>;

function DefaultTemplate({ children, pageContext }: Props) {
  return (
    <Layout title={pageContext.frontmatter?.title ?? 'Title'}>
      <Jumbotron
        component="header"
        maxWidth="md"
        title={pageContext.frontmatter?.title ?? 'Title'}
      />
      <Section component="main">
        <Article maxWidth="md">
          <MDXProvider
            components={{
              ...mdxComponents,
              ...shortcodes,
            }}
          >
            {children}
          </MDXProvider>
        </Article>
      </Section>
    </Layout>
  );
}

export default DefaultTemplate;

export function Head({ pageContext }: HeadProps<null, PageContext>) {
  return <Seo title={pageContext.frontmatter?.title} />;
}
