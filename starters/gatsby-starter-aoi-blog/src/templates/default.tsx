import * as React from 'react';
import { PageProps } from 'gatsby';
import { Article, Section } from '@cieloazul310/gatsby-theme-aoi';
import { MDXProvider } from '@mdx-js/react';
import { MDXRendererProps } from 'gatsby-plugin-mdx';
import Layout from '../layout';
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
    <Layout title={pageContext.frontmatter?.title ?? 'Title'}>
      <article>
        <Section>
          <Article maxWidth="md">
            <MDXProvider components={muiComponents}>{children}</MDXProvider>
          </Article>
        </Section>
      </article>
    </Layout>
  );
}

export default DefaultTemplate;
