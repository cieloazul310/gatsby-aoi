/* eslint @typescript-eslint/no-unused-vars: warn */
import * as React from 'react';
import { graphql, type PageProps, type HeadProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import Typography from '@mui/material/Typography';
import {
  Jumbotron,
  Section,
  SectionDivider,
  Article,
  AppLink,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi-components';
import {
  DrawerPageNavigation,
  PageNavigationContainer,
  PageNavigationItem,
} from '@cieloazul310/gatsby-theme-aoi-blog-components';
import type { Mdx } from '@cieloazul310/gatsby-theme-aoi-blog-types';

import Layout from './layout';
import AuthorBox from './components/AuthorBox';
import mdxComponents from './mdxComponents';
import shortcodes from './shortcodes';

type PageData = {
  // mdxPost: MdxPostBrowser;
  mdx: Mdx;
};

type PageContext = {
  id: string;
  next: { id: string; slug: string; title: string } | null;
  previous: { id: string; slug: string; title: string } | null;
};

function BlogPostTemplate({
  data,
  pageContext,
  children,
}: PageProps<PageData, PageContext>) {
  const { previous, next } = pageContext;
  const { mdx } = data;
  const { frontmatter, featuredImage } = mdx;
  const { title, date, author } = frontmatter;
  const staticImage =
    featuredImage?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  const bgcolor =
    featuredImage?.childImageSharp?.gatsbyImageData?.backgroundColor;
  return (
    <Layout
      title={title ?? 'Title'}
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
          <Jumbotron maxWidth="md" bgImage={staticImage} bgcolor={bgcolor}>
            <Typography>{date}</Typography>
            <Typography variant="h4" component="h2" gutterBottom>
              {title}
            </Typography>
            <Typography>post by {author?.name}</Typography>
          </Jumbotron>
        </header>
        <SectionDivider />
        <Section>
          <Article maxWidth="md">
            <MDXProvider components={{ ...mdxComponents, ...shortcodes }}>
              {children}
            </MDXProvider>
          </Article>
        </Section>
        <SectionDivider />
        <footer>
          <Section>
            {/*
            <Article maxWidth="md">
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
              <Typography>Date: {date}</Typography>
              <Typography>Post by {author.name}</Typography>
              <Typography>
                Categories:{' '}
                {categoriesSlug.map((category) => (
                  <AppLink key={category.name} href={category.slug} mr={1}>
                    {category.name}
                  </AppLink>
                ))}
              </Typography>
              {tagsSlug.length ? (
                <Typography>
                  {tagsSlug.map((tag) => (
                    <AppLink key={tag.name} href={tag.slug} mr={1}>
                      #{tag.name}
                    </AppLink>
                  ))}
                </Typography>
              ) : null}
            </Article>
                  */}
          </Section>
          <SectionDivider />
          <Section>
            <Article maxWidth="md">
              {/* <AuthorBox author={author} /> */}
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
                <Typography variant="body2" color="text.secondary">
                  Previous
                </Typography>
              </PageNavigationItem>
              <PageNavigationItem to={next?.slug ?? '#'} next disabled={!next}>
                <Typography variant="body2">{next?.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Next
                </Typography>
              </PageNavigationItem>
            </PageNavigationContainer>
          </Section>
        </nav>
      </article>
    </Layout>
  );
}

export default BlogPostTemplate;

/* { data }: HeadProps<PageData, PageContext> */
export function Head() {
  /*
  const { mdxPost } = data;
  const { title, image, excerpt } = mdxPost;
  const staticImage =
    image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  return <Seo title={title} description={excerpt} image={staticImage} />;
  */
  return <Seo />;
}

export const pageQuery = graphql`
  query PostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      slug
      tableOfContents(maxDepth: 2)
      excerpt(pruneLength: 140)
      frontmatter {
        title
        date
        categories
        tags
        author {
          name
          slug
        }
      }
      featuredImg {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
/*
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
        slug
        description
        website
        websiteURL
        avatar {
          childImageSharp {
            gatsbyImageData(width: 200)
          }
        }
        socials {
          name
          url
        }
        posts {
          totalCount
        }
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
*/
