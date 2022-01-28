import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Typography from '@mui/material/Typography';
import {
  Layout,
  Jumbotron,
  Section,
  SectionDivider,
  Article,
  H3,
  H4,
  Paragraph,
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
      author: {
        name: string;
        description: string;
      };
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
      <article>
        <header>
          <Jumbotron title={title ?? 'Title'} maxWidth="md" />
        </header>
        <SectionDivider />
        <Section>
          <Article maxWidth="md">
            <MDXProvider components={{ ...muiComponents }}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </Article>
        </Section>
        <SectionDivider />
        <footer>
          <Section>
            <Article maxWidth="md">
              <H3>{title}</H3>
              <Typography>Date: {date}</Typography>
              <Typography>Categories: {categories?.join(',')}</Typography>
              <Typography>Tags: {tags?.join(',')}</Typography>
              <H4>Post by {author.name}</H4>
              <Paragraph>{author.description}</Paragraph>
            </Article>
          </Section>
        </footer>
      </article>
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
        author {
          name
          description
        }
      }
    }
  }
`;
