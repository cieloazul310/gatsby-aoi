import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { IGatsbyImageData } from 'gatsby-plugin-image';
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
  AppLink,
} from '@cieloazul310/gatsby-theme-aoi';
import muiComponents from '../utils/muiComponents';

function BlogPostTemplate({
  pageContext,
  data,
}: PageProps<{
  mdxPost: {
    id: string;
    body: string;
    title: string;
    date: string;
    author: {
      name: string;
      description: string;
    };
    categories?: string[];
    tags?: string[];
    /** expected */
    // image?: ImageDataLike;
    image?: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
  allMdxPost: {
    edges: {
      node: {
        id: string;
        title: string;
        slug: string;
      };
    }[];
  };
}>) {
  const { mdxPost, allMdxPost } = data;
  if (!mdxPost) return null;
  const { title, date, author, categories, tags, image } = mdxPost;
  // const { previous, next } = pageContext;
  const staticImage =
    image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  return (
    <Layout title={title ?? 'Title'} image={staticImage}>
      <article>
        <header>
          <Jumbotron
            title={title ?? 'Title'}
            maxWidth="md"
            bgImage={staticImage}
          />
        </header>
        <SectionDivider />
        <Section>
          <Article maxWidth="md">
            <MDXProvider components={{ ...muiComponents }}>
              <MDXRenderer>{mdxPost.body}</MDXRenderer>
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
        <SectionDivider />
        <nav>
          <Section>
            {allMdxPost.edges.map(({ node }) => (
              <Paragraph key={node.id}>
                <AppLink to={node.slug}>{node.title}</AppLink>
              </Paragraph>
            ))}
          </Section>
        </nav>
      </article>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query PostsQuery($id: String) {
    mdxPost(id: { eq: $id }) {
      id
      body
      title
      categories
      tags
      date(formatString: "YYYY-MM-DD")
      author {
        name
        description
      }
      image {
        childImageSharp {
          gatsbyImageData(width: 600)
        }
      }
    }
    allMdxPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;
