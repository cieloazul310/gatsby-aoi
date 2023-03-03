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
import type {
  MdxPost,
  AuthorBoxFragment,
} from '@cieloazul310/gatsby-theme-aoi-blog-types';

import Layout from './layout';
import AuthorBox from './components/AuthorBox';
import mdxComponents from './mdxComponents';
import shortcodes from './shortcodes';

type PageData = {
  mdxPost: MdxPost;
  newer: Pick<MdxPost, 'id' | 'slug' | 'title' | 'date'>;
  older: Pick<MdxPost, 'id' | 'slug' | 'title' | 'date'>;
};

type PageContext = {
  id: string;
  newer: string | null;
  older: string | null;
};

function BlogPostTemplate({
  data,
  // pageContext,
  children,
}: PageProps<PageData, PageContext>) {
  // const { previous, next } = pageContext;
  const { mdxPost, newer, older } = data;
  const { title, date, author, image } = mdxPost;
  const staticImage =
    image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  const bgcolor = image?.childImageSharp?.gatsbyImageData?.backgroundColor;
  return (
    <Layout
      title={title ?? 'Title'}
      drawerContents={
        <DrawerPageNavigation
          right={older ? { href: older.slug, title: older.title } : null}
          left={newer ? { href: newer.slug, title: newer.title } : null}
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
            <Article maxWidth="md">
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
              <Typography>Date: {date}</Typography>
              <Typography>Post by {author?.name}</Typography>
              <Typography>
                Categories:{' '}
                {/*
                categoriesSlug.map((category) => (
                  <AppLink key={category.name} href={category.slug} mr={1}>
                    {category.name}
                  </AppLink>
                ))
                */}
              </Typography>
              {/*
              tagsSlug.length ? (
                <Typography>
                  {tagsSlug.map((tag) => (
                    <AppLink key={tag.name} href={tag.slug} mr={1}>
                      #{tag.name}
                    </AppLink>
                  ))}
                </Typography>
              ) : null
                  */}
            </Article>
          </Section>
          <SectionDivider />
          <Section>
            <Article maxWidth="md">
              {author ? <AuthorBox author={author} /> : null}
            </Article>
          </Section>
        </footer>
        <SectionDivider />
        <nav>
          <Section>
            <PageNavigationContainer>
              <PageNavigationItem href={newer?.slug ?? '#'} disabled={!newer}>
                <Typography variant="body2">{newer?.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Newer post
                </Typography>
              </PageNavigationItem>
              <PageNavigationItem
                href={older?.slug ?? '#'}
                right
                disabled={!older}
              >
                <Typography variant="body2">{older?.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Older post
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

export function Head({ data }: HeadProps<PageData, PageContext>) {
  const { mdxPost } = data;
  const { excerpt, title, image } = mdxPost;
  const staticImage =
    image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  return <Seo title={title} description={excerpt} image={staticImage} />;
}

export const pageQuery = graphql`
  query PostQuery($id: String!, $newer: String, $older: String) {
    mdxPost(id: { eq: $id }) {
      id
      slug
      title
      date(formatString: "YYYY-MM-DD")
      categories
      tags
      tableOfContents(maxDepth: 2)
      excerpt(pruneLength: 140)
      author {
        ...AuthorBox
      }
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
      imageAlt
    }
    newer: mdxPost(id: { eq: $newer }) {
      id
      slug
      title
      date(formatString: "YYYY-MM-DD")
    }
    older: mdxPost(id: { eq: $older }) {
      id
      slug
      title
      date(formatString: "YYYY-MM-DD")
    }
  }
  fragment AuthorBox on Author {
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
