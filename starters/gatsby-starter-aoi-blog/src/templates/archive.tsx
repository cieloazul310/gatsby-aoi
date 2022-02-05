import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Typography from '@mui/material/Typography';
import {
  Jumbotron,
  Section,
  SectionDivider,
  Article,
} from '@cieloazul310/gatsby-theme-aoi';

import Layout from '../layout';
import MdxPostEdgesList from '../components/MdxPostList';
import Pagination from '../components/Pagination';
import DrawerPageNavigation from '../components/DrawerPageNavigation';
import PageNavigationContainer from '../components/PageNavigationContainer';
import PageNavigationItem from '../components/PageNavigationItem';
import { MdxPostBrowser } from '../../types';

function createTitleString(year: string, month: string) {
  return `${new Date(`${year}-${month}`).toLocaleString('en-us', {
    year: 'numeric',
    month: 'short',
  })}`;
}

type PageData = {
  allMdxPost: {
    edges: {
      node: Pick<MdxPostBrowser, 'id' | 'title' | 'slug' | 'date' | 'author'>;
    }[];
  };
};

type PageContext = {
  previous: {
    id: string;
    year: string;
    month: string;
    basePath: string;
    totalCount: number;
  } | null;
  next: {
    id: string;
    year: string;
    month: string;
    basePath: string;
    totalCount: number;
  } | null;
  type: string;
  year: string;
  month: string;
  gte: string;
  lt: string;
  limit: number;
  skip: number;
  numPages: number;
  currentPage: number;
  basePath: string;
  totalCount: number;
};

function ArchiveTemplate({
  data,
  pageContext,
}: PageProps<PageData, PageContext>) {
  const { allMdxPost } = data;
  const {
    previous,
    next,
    year,
    month,
    currentPage,
    numPages,
    basePath,
    totalCount,
  } = pageContext;
  const title = createTitleString(year, month);
  const previousTitle = previous
    ? createTitleString(previous.year, previous.month)
    : '';
  const nextTitle = next ? createTitleString(next.year, next.month) : '';

  return (
    <Layout
      title={title}
      drawerContents={
        <DrawerPageNavigation
          previous={
            previous
              ? {
                  to: previous.basePath,
                  title: previousTitle,
                }
              : null
          }
          next={next ? { to: next.basePath, title: nextTitle } : null}
        />
      }
    >
      <article>
        <header>
          <Jumbotron maxWidth="md">
            <Typography variant="h4" component="h2" gutterBottom>
              {title}
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
                to={previous?.basePath ?? '#'}
                disabled={!previous}
              >
                <Typography variant="body2">{previousTitle}</Typography>
              </PageNavigationItem>
              <PageNavigationItem
                to={next?.basePath ?? '#'}
                next
                disabled={!next}
              >
                <Typography variant="body2">{nextTitle}</Typography>
              </PageNavigationItem>
            </PageNavigationContainer>
          </Section>
        </nav>
      </article>
    </Layout>
  );
}

export default ArchiveTemplate;

export const query = graphql`
  query Archive($gte: Date!, $lt: Date!, $skip: Int!, $limit: Int!) {
    allMdxPost(
      filter: { date: { gte: $gte, lt: $lt } }
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