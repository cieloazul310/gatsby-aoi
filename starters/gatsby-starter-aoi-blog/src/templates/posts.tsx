import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  Layout,
  Jumbotron,
  Section,
  SectionDivider,
  Article,
  H3,
  H4,
  H5,
  Paragraph,
  ListItemAppLink,
  AppLink,
} from '@cieloazul310/gatsby-theme-aoi';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import PageNavigationContainer from '../components/PageNavigationContainer';
import PageNavigationItem from '../components/PageNavigationItem';
import muiComponents from '../utils/muiComponents';

type PageContext = {
  id: string;
  next: { id: string; slug: string; title: string } | null;
  previous: { id: string; slug: string; title: string } | null;
};

function BlogPostTemplate({
  pageContext,
  data,
}: PageProps<
  {
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
  },
  PageContext
>) {
  const { mdxPost, allMdxPost } = data;
  if (!mdxPost) return null;
  const { title, date, author, categories, tags, image } = mdxPost;
  const { previous, next } = pageContext;
  const staticImage =
    image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  return (
    <Layout
      title={title ?? 'Title'}
      image={staticImage}
      componentViewports={{ bottomNav: false }}
      drawerContents={
        <List subheader={<ListSubheader>Navigation</ListSubheader>}>
          {previous ? (
            <ListItemAppLink to={previous.slug} button>
              <ListItemIcon>
                <ArrowBackIcon />
              </ListItemIcon>
              <ListItemText primary={previous.title} secondary="prev" />
            </ListItemAppLink>
          ) : null}
          {next ? (
            <ListItemAppLink to={next.slug} button>
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>
              <ListItemText primary={next.title} secondary="next" />
            </ListItemAppLink>
          ) : null}
        </List>
      }
    >
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
            <PageNavigationContainer>
              <PageNavigationItem
                to={previous?.slug ?? '#'}
                disabled={!previous}
              >
                <Typography variant="body2">{previous?.title}</Typography>
              </PageNavigationItem>
              <PageNavigationItem to={next?.slug ?? '#'} next disabled={!next}>
                <Typography variant="body2">{next?.title}</Typography>
              </PageNavigationItem>
            </PageNavigationContainer>
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
