import * as React from 'react';
import type { PageProps, HeadProps } from 'gatsby';
import {
  Article,
  Section,
  SectionDivider,
  Jumbotron,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi-components';
import { muiComponents } from '@cieloazul310/gatsby-theme-aoi-blog-components';
import { MDXProvider } from '@mdx-js/react';
import type { MDXRendererProps } from 'gatsby-plugin-mdx';
import Layout from './layout';
import shortcodes from './shortcodes';

type PageContext = {
  frontmatter?: {
    title?: string;
  };
};

type Props = Omit<PageProps<null, PageContext>, 'children'> & MDXRendererProps;

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

export function Head({ pageContext }: HeadProps<null, PageContext>) {
  return <Seo title={pageContext.frontmatter?.title} />;
}
