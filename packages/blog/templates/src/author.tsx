import { graphql, type PageProps, type HeadProps } from 'gatsby';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import {
  Jumbotron,
  Section,
  SectionDivider,
  Article,
  AppLink,
  Paragraph,
  SocialLink,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi-components';
import {
  Pagination,
  DrawerPageNavigation,
  PageNavigationContainer,
  PageNavigationItem,
} from '@cieloazul310/gatsby-theme-aoi-blog-components';
import type {
  MdxPostBrowser,
  AuthorBrowser,
} from '@cieloazul310/gatsby-theme-aoi-blog-utils';

import Layout from './layout';
import { AuthorIcon } from './icons';
import MdxPostEdgesList from './components/MdxPostList';

type PageData = {
  author: Pick<
    AuthorBrowser,
    'name' | 'avatar' | 'description' | 'website' | 'websiteURL' | 'socials'
  >;
  allMdxPost: {
    nodes: Pick<MdxPostBrowser, 'id' | 'title' | 'slug' | 'date' | 'author'>[];
  };
  previous: (Pick<AuthorBrowser, 'name' | 'avatar'> & { slug: string }) | null;
  next: (Pick<AuthorBrowser, 'name' | 'avatar'> & { slug: string }) | null;
};

type PageContext = {
  previous: string | null;
  next: string | null;
  type: string;
  fieldValue: string;
  limit: number;
  skip: number;
  numPages: number;
  currentPage: number;
  basePath: string;
  totalCount: number;
};

function AuthorTemplate({
  data,
  pageContext,
}: PageProps<PageData, PageContext>) {
  const { author, allMdxPost, previous, next } = data;
  const { numPages, currentPage, basePath, totalCount } = pageContext;
  const bgImage =
    author.avatar?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  const bgcolor =
    author.avatar?.childImageSharp?.gatsbyImageData?.backgroundColor;

  return (
    <Layout
      title={author.name}
      drawerContents={
        <DrawerPageNavigation
          previous={
            previous ? { to: previous.slug, title: previous.name } : null
          }
          next={next ? { to: next.slug, title: next.name } : null}
        />
      }
    >
      <article>
        <header>
          <Jumbotron maxWidth="md" bgImage={bgImage} bgcolor={bgcolor}>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Box pr={{ xs: 2, sm: 4 }}>
                <Avatar
                  sx={{
                    width: { xs: 112, sm: 144 },
                    height: { xs: 112, sm: 144 },
                  }}
                  src={
                    author.avatar?.childImageSharp.gatsbyImageData.images
                      .fallback?.src
                  }
                  srcSet={
                    author.avatar?.childImageSharp.gatsbyImageData.images
                      .fallback?.srcSet
                  }
                  sizes={
                    author.avatar?.childImageSharp.gatsbyImageData.images
                      .fallback?.sizes
                  }
                  alt={author.name}
                >
                  <AuthorIcon sx={{ fontSize: { xs: 100, sm: 132 } }} />
                </Avatar>
              </Box>
              <Box>
                <Typography>Author</Typography>
                <Typography variant="h4" component="h2" gutterBottom>
                  {author.name}
                </Typography>
                <Typography>{totalCount} posts</Typography>
              </Box>
            </Box>
          </Jumbotron>
        </header>
        <SectionDivider />
        <Section>
          <Article maxWidth="md">
            <Paragraph>
              {author.description}
              <br />
              {author.websiteURL ? (
                <>
                  Website:{' '}
                  <AppLink href={author.websiteURL}>{author.website}</AppLink>
                </>
              ) : null}
            </Paragraph>
            <Stack spacing={1} direction="row">
              {author.socials?.map(({ name, url }) => (
                <SocialLink key={name} name={name} url={url} fontSize="large" />
              ))}
            </Stack>
          </Article>
        </Section>
        <SectionDivider />
        <Section>
          <Article maxWidth="md">
            <MdxPostEdgesList nodes={allMdxPost.nodes} />
            <Pagination
              numPages={numPages}
              currentPage={currentPage}
              basePath={basePath}
            />
          </Article>
        </Section>
        <SectionDivider />
        <nav>
          <Section>
            <PageNavigationContainer>
              <PageNavigationItem
                to={previous?.slug ?? '#'}
                disabled={!previous}
              >
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Avatar
                    sx={{ mr: 2 }}
                    src={
                      previous?.avatar?.childImageSharp.gatsbyImageData.images
                        .fallback?.src
                    }
                    srcSet={
                      previous?.avatar?.childImageSharp.gatsbyImageData.images
                        .fallback?.srcSet
                    }
                    sizes={
                      previous?.avatar?.childImageSharp.gatsbyImageData.images
                        .fallback?.sizes
                    }
                    alt={previous?.name}
                  >
                    <AuthorIcon />
                  </Avatar>
                  <Typography variant="body2">{previous?.name}</Typography>
                </Box>
              </PageNavigationItem>
              <PageNavigationItem to={next?.slug ?? '#'} next disabled={!next}>
                <Box
                  display="flex"
                  flexDirection="row-reverse"
                  alignItems="center"
                >
                  <Avatar
                    sx={{ ml: 2 }}
                    src={
                      next?.avatar?.childImageSharp.gatsbyImageData.images
                        .fallback?.src
                    }
                    srcSet={
                      next?.avatar?.childImageSharp.gatsbyImageData.images
                        .fallback?.srcSet
                    }
                    sizes={
                      next?.avatar?.childImageSharp.gatsbyImageData.images
                        .fallback?.sizes
                    }
                    alt={next?.name}
                  >
                    <AuthorIcon />
                  </Avatar>
                  <Typography variant="body2">{next?.name}</Typography>
                </Box>
              </PageNavigationItem>
            </PageNavigationContainer>
          </Section>
        </nav>
      </article>
    </Layout>
  );
}

export default AuthorTemplate;

export function Head({ data }: HeadProps<PageData, PageContext>) {
  const { author } = data;
  return <Seo title={`Author: ${author.name}`} />;
}

export const query = graphql`
  query Author(
    $fieldValue: String!
    $skip: Int!
    $limit: Int!
    $previous: String
    $next: String
  ) {
    author(name: { eq: $fieldValue }) {
      avatar {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      description
      name
      website
      websiteURL
      socials {
        name
        url
      }
    }
    allMdxPost(
      filter: { author: { name: { eq: $fieldValue } } }
      sort: { date: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        title
        slug
        date(formatString: "YYYY-MM-DD")
        author {
          name
        }
      }
    }
    previous: author(name: { eq: $previous }) {
      avatar {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      name
      slug
    }
    next: author(name: { eq: $next }) {
      avatar {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      name
      slug
    }
  }
`;
