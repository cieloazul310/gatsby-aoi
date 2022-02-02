import * as React from 'react';
import { graphql, Link as GatsbyLink, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import {
  Jumbotron,
  Section,
  SectionDivider,
  Article,
  H3,
  H4,
  Paragraph,
  AppLink,
} from '@cieloazul310/gatsby-theme-aoi';

import Layout from '../layout';
import DrawerPageNavigation from '../components/DrawerPageNavigation';
import PageNavigationContainer from '../components/PageNavigationContainer';
import PageNavigationItem from '../components/PageNavigationItem';
import muiComponents from '../utils/muiComponents';
import { MdxPostBrowser } from '../../types';

type PageData = {
  mdxPost: MdxPostBrowser;
};

type PageContext = {
  id: string;
  next: { id: string; slug: string; title: string } | null;
  previous: { id: string; slug: string; title: string } | null;
};

function BlogPostTemplate({
  data,
  pageContext,
}: PageProps<PageData, PageContext>) {
  const { mdxPost } = data;
  if (!mdxPost) return null;
  const { title, date, author, categoriesSlug, tagsSlug, image, excerpt } =
    mdxPost;
  const { previous, next } = pageContext;
  const staticImage =
    image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  const bgcolor = image?.childImageSharp?.gatsbyImageData?.backgroundColor;
  return (
    <Layout
      title={title ?? 'Title'}
      description={excerpt}
      image={staticImage}
      drawerContents={
        <DrawerPageNavigation
          previous={
            previous ? { to: previous.slug, title: previous.title } : null
          }
          next={next ? { to: next.slug, title: next.title } : null}
        />
      }
    >
      <article>
        <header>
          <Jumbotron
            title={title ?? 'Title'}
            maxWidth="md"
            bgImage={staticImage}
            bgcolor={bgcolor}
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
              <Typography>
                Categories:{' '}
                {categoriesSlug.map((category) => (
                  <Typography key={category.name} component="span" mr={1}>
                    <AppLink to={category.slug}>{category.name}</AppLink>
                  </Typography>
                ))}
              </Typography>
              <Typography>
                Tags:{' '}
                {tagsSlug.map((tag) => (
                  <Chip key={tag.name} label={tag.name} clickable />
                ))}
              </Typography>
              <H4>Post by {author?.name}</H4>
              <Paragraph>{author?.description}</Paragraph>
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
      excerpt
      title
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
      categoriesSlug {
        name
        slug
      }
      tagsSlug {
        name
        slug
      }
    }
  }
`;
