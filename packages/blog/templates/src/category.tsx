import * as React from 'react';
import { graphql, type PageProps, type HeadProps } from 'gatsby';
import Typography from '@mui/material/Typography';
import {
  Jumbotron,
  Section,
  SectionDivider,
  Article,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi-components';
import {
  Pagination,
  DrawerPageNavigation,
  PageNavigationContainer,
  PageNavigationItem,
} from '@cieloazul310/gatsby-theme-aoi-blog-components';
import type { MdxPostBrowser } from '@cieloazul310/gatsby-theme-aoi-blog-types';

import Layout from './layout';
import MdxPostEdgesList from './components/MdxPostList';

type PageData = {
  allMdxPost: {
    nodes: Pick<MdxPostBrowser, 'id' | 'title' | 'slug' | 'date' | 'author'>[];
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
  totalCount: number;
};

function CategoryTemplate({
  data,
  pageContext,
}: PageProps<PageData, PageContext>) {
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
            <Typography>Category</Typography>
            <Typography variant="h4" component="h2" gutterBottom>
              {fieldValue}
            </Typography>
            <Typography>{totalCount} posts</Typography>
          </Jumbotron>
        </header>
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

export default CategoryTemplate;

export function Head({ pageContext }: HeadProps<PageData, PageContext>) {
  const { fieldValue } = pageContext;
  return <Seo title={`Category: ${fieldValue}`} />;
}

export const query = graphql`
  query Category($fieldValue: String!, $skip: Int!, $limit: Int!) {
    allMdxPost(
      filter: { categories: { eq: $fieldValue } }
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
  }
`;
