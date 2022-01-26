import * as React from 'react';
import { PageProps } from 'gatsby';
import { Layout, Article, Section } from '@cieloazul310/gatsby-theme-aoi';
import { MDXProvider } from '@mdx-js/react';
import { MDXRendererProps } from 'gatsby-plugin-mdx';
import muiComponents from '../utils/muiComponents';

type Props = Omit<PageProps, 'children'> &
  MDXRendererProps & {
    pageContext: {
      frontmatter?: {
        title?: string;
      };
    };
  };

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
