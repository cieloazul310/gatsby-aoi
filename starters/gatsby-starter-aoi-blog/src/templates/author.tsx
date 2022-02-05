import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Typography from '@mui/material/Typography';
import {
  Jumbotron,
  Section,
  SectionDivider,
  Article,
} from '@cieloazul310/gatsby-theme-aoi';
import {
  Pagination,
  DrawerPageNavigation,
  PageNavigationContainer,
  PageNavigationItem,
} from '@cieloazul310/gatsby-theme-aoi-blog-components';

import Layout from '../layout';
import MdxPostEdgesList from '../components/MdxPostList';
import { MdxPostBrowser, AuthorBrowser } from '../../types';

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
            <Typography variant="h4" component="h2" gutterBottom>
              {author.name}
            </Typography>
            <Typography>{totalCount} posts</Typography>
          </Jumbotron>
        </header>
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
