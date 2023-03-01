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
  mdxComponents,
} from '@cieloazul310/gatsby-theme-aoi-components';
import {
  DrawerPageNavigation,
  PageNavigationContainer,
  PageNavigationItem,
} from '@cieloazul310/gatsby-theme-aoi-blog-components';
import type { MdxPostBrowser } from '@cieloazul310/gatsby-theme-aoi-blog-utils';

import Layout from './layout';
import AuthorBox from './components/AuthorBox';
import shortcodes from './shortcodes';

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
  children,
}: PageProps<PageData, PageContext>) {
  const { mdxPost } = data;
  if (!mdxPost) return null;
  const { title, date, author, categoriesSlug, tagsSlug, image } = mdxPost;
  const { previous, next } = pageContext;
  const staticImage =
    image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  const bgcolor = image?.childImageSharp?.gatsbyImageData?.backgroundColor;
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
            <Typography>post by {author.name}</Typography>
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
          </Section>
          <SectionDivider />
          <Section>
            <Article maxWidth="md">
              <AuthorBox author={author} />
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

export function Head({ data }: HeadProps<PageData, PageContext>) {
  const { mdxPost } = data;
  const { title, image, excerpt } = mdxPost;
  const staticImage =
    image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  return <Seo title={title} description={excerpt} image={staticImage} />;
}

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
