import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  Layout,
  Jumbotron,
  Section,
  SectionDivider,
  Article,
} from '@cieloazul310/gatsby-theme-aoi';
import muiComponents from '../utils/muiComponents';

function BlogPostTemplate({
  pageContext,
  data,
}: PageProps<{
  mdx: {
    id: string;
    body: string;
    frontmatter: {
      title: string;
      date: string;
      author: string;
      categories?: string[];
      tags?: string[];
    };
  };
}>) {
  const { mdx } = data;
  if (!mdx || !mdx.frontmatter) return null;
  const { title, date, author, categories, tags } = mdx.frontmatter;
  // const { previous, next } = pageContext;

  return (
    <Layout title={title ?? 'Title'}>
      <Jumbotron title={title ?? 'Title'} maxWidth="md" />
      <SectionDivider />
      <Section>
        <Article maxWidth="md">
          <MDXProvider components={{ ...muiComponents }}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Article>
      </Section>
      <SectionDivider />
      <Section>
        <p>{title}</p>
        <p>{date}</p>
        <p>{author}</p>
      </Section>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query PostsQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        categories
        tags
        date(formatString: "YYYY-MM-DD")
        author
      }
    }
  }
`;
