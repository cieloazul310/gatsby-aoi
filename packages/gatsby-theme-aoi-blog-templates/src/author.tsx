import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import {
  Jumbotron,
  Section,
  SectionDivider,
  Article,
  Paragraph,
  ExternalLink,
  SocialLink,
} from '@cieloazul310/gatsby-theme-aoi-components';
import {
  Pagination,
  DrawerPageNavigation,
  PageNavigationContainer,
  PageNavigationItem,
} from '@cieloazul310/gatsby-theme-aoi-blog-components';
import {
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
    edges: {
      node: Pick<MdxPostBrowser, 'id' | 'title' | 'slug' | 'date' | 'author'>;
    }[];
  };
};

type PageContext = {
  previous: {
    node: {
      slug: string;
      name: string;
    };
  } | null;
  next: {
    node: {
      slug: string;
      name: string;
    };
  } | null;
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
  const { author, allMdxPost } = data;
  const { previous, next, numPages, currentPage, basePath, totalCount } =
    pageContext;
  const bgImage =
    author.avatar?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  const bgcolor =
    author.avatar?.childImageSharp?.gatsbyImageData?.backgroundColor;

  return (
    <Layout
      title={author.name}
      image={bgImage}
      drawerContents={
        <DrawerPageNavigation
          previous={
            previous
              ? { to: previous.node.slug, title: previous.node.name }
              : null
          }
          next={next ? { to: next.node.slug, title: next.node.name } : null}
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
                  <ExternalLink href={author.websiteURL}>
                    {author.website}
                  </ExternalLink>
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
            <MdxPostEdgesList edges={allMdxPost.edges} />
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
                to={previous?.node.slug ?? '#'}
                disabled={!previous}
              >
                <Typography variant="body2">{previous?.node.name}</Typography>
              </PageNavigationItem>
              <PageNavigationItem
                to={next?.node.slug ?? '#'}
                next
                disabled={!next}
              >
                <Typography variant="body2">{next?.node.name}</Typography>
              </PageNavigationItem>
            </PageNavigationContainer>
          </Section>
        </nav>
      </article>
    </Layout>
  );
}

export default AuthorTemplate;

export const query = graphql`
  query Author($fieldValue: String!, $skip: Int!, $limit: Int!) {
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
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          slug
          date(formatString: "YYYY-MM-DD")
          author {
            name
          }
        }
      }
    }
  }
`;
