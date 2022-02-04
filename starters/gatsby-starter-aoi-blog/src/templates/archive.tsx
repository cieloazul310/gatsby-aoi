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
};

function ArchiveTemplate({
  data,
  pageContext,
}: PageProps<PageData, PageContext>) {
  const { allMdxPost } = data;
  const { previous, next, year, month, currentPage, numPages, basePath } =
    pageContext;
  const title = `${year}/${month} (${currentPage}/${numPages})`;

  return (
    <Layout
      title={title}
      drawerContents={
        <DrawerPageNavigation
          previous={
            previous
              ? {
                  to: previous.basePath,
                  title: `${previous.year}/${previous.month}`,
                }
              : null
          }
          next={
            next
              ? { to: next.basePath, title: `${next.year}/${next.month}` }
              : null
          }
        />
      }
    >
      <article>
        <header>
          <Jumbotron title={title} maxWidth="md" />
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
                <Typography variant="body2">{`${previous?.year}/${previous?.month}`}</Typography>
              </PageNavigationItem>
              <PageNavigationItem
                to={next?.basePath ?? '#'}
                next
                disabled={!next}
              >
                <Typography variant="body2">{`${next?.year}/${next?.month}`}</Typography>
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
