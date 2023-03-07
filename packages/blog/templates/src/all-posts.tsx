import * as React from 'react';
import { graphql, type PageProps, type HeadProps } from 'gatsby';
import Typography from '@mui/material/Typography';
import {
  Jumbotron,
  Section,
  Article,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi-components';
import { Pagination } from '@cieloazul310/gatsby-theme-aoi-blog-components';
import type { MdxPostListFragment } from '@cieloazul310/gatsby-theme-aoi-blog-types';

import Layout from './layout';
import MdxPostList from './components/MdxPostList';

type PageData = {
  allMdxPost: {
    nodes: MdxPostListFragment[];
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
      <Jumbotron component="header" maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
          All Posts
        </Typography>
        <Typography>{`Total ${totalCount ?? 0} posts`}</Typography>
      </Jumbotron>
      <Section>
        <Article maxWidth="md">
          <MdxPostList posts={allMdxPost.nodes} />
          <Pagination
            numPages={numPages}
            currentPage={currentPage}
            basePath={basePath}
          />
        </Article>
      </Section>
    </Layout>
  );
}

export default AllPostsTemplate;

export function Head({ pageContext }: HeadProps<PageData, PageContext>) {
  const { currentPage, numPages } = pageContext;
  const title =
    numPages === 1 ? 'All Posts' : `All Posts (${currentPage}/${numPages})`;
  return <Seo title={title} />;
}

export const query = graphql`
  query AllPosts($skip: Int!, $limit: Int!) {
    allMdxPost(sort: { date: DESC }, limit: $limit, skip: $skip) {
      nodes {
        ...MdxPostList
      }
    }
  }
`;
