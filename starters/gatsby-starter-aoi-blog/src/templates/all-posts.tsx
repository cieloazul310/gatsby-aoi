import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Typography from '@mui/material/Typography';
import {
  Jumbotron,
  Section,
  SectionDivider,
  Article,
} from '@cieloazul310/gatsby-theme-aoi';
import { Pagination } from '@cieloazul310/gatsby-theme-aoi-blog-components';

import Layout from '../layout';
import MdxPostEdgesList from '../components/MdxPostList';
// import Pagination from '../components/Pagination';

import { MdxPostBrowser } from '../../types';

type PageData = {
  allMdxPost: {
    edges: {
      node: Pick<MdxPostBrowser, 'id' | 'title' | 'slug' | 'date' | 'author'>;
    }[];
  };
};

type PageContext = {
  title: string;
  limit: number;
  skip: number;
  numPages: number;
  currentPage: number;
  basePath: string;
  totalCount: number;
};

function AllPostsTemplate({
  data,
  pageContext,
}: PageProps<PageData, PageContext>) {
  const { allMdxPost } = data;
  const { currentPage, numPages, basePath, totalCount } = pageContext;

  return (
    <Layout title="All Posts">
      <article>
        <header>
          <Jumbotron maxWidth="md">
            <Typography variant="h4" component="h2" gutterBottom>
              All Posts
            </Typography>
            <Typography>{`Total ${totalCount ?? 0} posts`}</Typography>
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
      </article>
    </Layout>
  );
}

export default AllPostsTemplate;

export const query = graphql`
  query AllPosts($skip: Int!, $limit: Int!) {
    allMdxPost(
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
