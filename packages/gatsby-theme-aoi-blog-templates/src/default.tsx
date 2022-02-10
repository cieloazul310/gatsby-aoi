import * as React from 'react';
import { PageProps } from 'gatsby';
import {
  Article,
  Section,
  SectionDivider,
  Jumbotron,
} from '@cieloazul310/gatsby-theme-aoi-components';
import { muiComponents } from '@cieloazul310/gatsby-theme-aoi-blog-components';
import { MDXProvider } from '@mdx-js/react';
import { MDXRendererProps } from 'gatsby-plugin-mdx';
import Layout from './layout';
import shortcodes from './shortcodes';

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
        <header>
          <Jumbotron
            maxWidth="md"
            title={pageContext.frontmatter?.title ?? 'Title'}
          />
        </header>
        <SectionDivider />
        <Section>
          <Article maxWidth="md">
            <MDXProvider
              components={{
                ...muiComponents,
                ...shortcodes,
              }}
            >
              {children}
            </MDXProvider>
          </Article>
        </Section>
      </article>
    </Layout>
  );
}

export default DefaultTemplate;
