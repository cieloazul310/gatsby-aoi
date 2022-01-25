import * as React from 'react';
import { Layout, Article, Section } from '@cieloazul310/gatsby-theme-aoi';
import { MDXProvider } from '@mdx-js/react';
import muiComponents from '../utils/muiComponents';

interface Props {
  children: React.ReactNode;
  pageContext: {
    frontmatter?: {
      title?: string;
    };
  };
}

function DefaultTemplate({ children, pageContext }: Props) {
  return (
    <Layout
      title={pageContext.frontmatter?.title ?? 'Title'}
      componentViewports={{ bottomNav: false }}
    >
      <Section>
        <Article maxWidth="md">
          <MDXProvider components={muiComponents}>{children}</MDXProvider>
        </Article>
      </Section>
    </Layout>
  );
}

export default DefaultTemplate;
