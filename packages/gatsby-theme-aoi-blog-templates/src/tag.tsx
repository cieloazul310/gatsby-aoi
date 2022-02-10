import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import {
  Jumbotron,
  Section,
  SectionDivider,
  Article,
} from '@cieloazul310/gatsby-theme-aoi-components';
import {
  Pagination,
  DrawerPageNavigation,
  PageNavigationContainer,
  PageNavigationItem,
} from '@cieloazul310/gatsby-theme-aoi-blog-components';
import { MdxPostBrowser } from '@cieloazul310/gatsby-theme-aoi-blog-utils';

import Layout from './layout';
import MdxPostEdgesList from './components/MdxPostList';

type PageData = {
  allMdxPost: {
    edges: {
      node: Pick<MdxPostBrowser, 'id' | 'title' | 'slug' | 'date' | 'author'>;
    }[];
  };
};

type PageContext = {
  previous: {
    slug: string;
    totalCount: number;
    fieldValue: string;
    field: string;
  } | null;
  next: {
    slug: string;
    totalCount: number;
    fieldValue: string;
    field: string;
  } | null;
  type: string;
  fieldValue: string;
  limit: number;
  skip: number;
  numPages: number;
  currentPage: number;
  basePath: string;
  totalCount: string;
};

function TagTemplate({ data, pageContext }: PageProps<PageData, PageContext>) {
  const { allMdxPost } = data;
  const {
    fieldValue,
    previous,
    next,
    numPages,
    currentPage,
    basePath,
    totalCount,
  } = pageContext;
  return (
    <Layout
      title={fieldValue}
      drawerContents={
        <DrawerPageNavigation
          previous={
            previous ? { to: previous.slug, title: previous.fieldValue } : null
          }
          next={next ? { to: next.slug, title: next.fieldValue } : null}
        />
      }
    >
      <article>
        <header>
          <Jumbotron maxWidth="md">
            <Typography>Tag</Typography>
            <Typography variant="h4" component="h2" gutterBottom>
              {`#${fieldValue}`}
            </Typography>
            <Typography>{totalCount} posts</Typography>
          </Jumbotron>
        </header>
        <SectionDivider />
        <Section>
          <Article maxWidth="md">
            <List>
              <MdxPostEdgesList edges={allMdxPost.edges} />
            </List>
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
                <Typography variant="body2">{previous?.fieldValue}</Typography>
              </PageNavigationItem>
              <PageNavigationItem to={next?.slug ?? '#'} next disabled={!next}>
                <Typography variant="body2">{next?.fieldValue}</Typography>
              </PageNavigationItem>
            </PageNavigationContainer>
          </Section>
        </nav>
      </article>
    </Layout>
  );
}

export default TagTemplate;

export const query = graphql`
  query Tag($fieldValue: String!, $skip: Int!, $limit: Int!) {
    allMdxPost(
      filter: { tags: { eq: $fieldValue } }
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
