import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import List from '@mui/material/List';
import {
  Jumbotron,
  Section,
  SectionDivider,
  Article,
  ListItemLink,
} from '@cieloazul310/gatsby-theme-aoi';

import Layout from '../layout';
import Pagination from '../components/Pagination';

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
};

function AllPostsTemplate({
  data,
  pageContext,
}: PageProps<PageData, PageContext>) {
  const { allMdxPost } = data;
  const { currentPage, numPages, basePath } = pageContext;

  return (
    <Layout title="All Posts">
      <article>
        <header>
          <Jumbotron title="All Posts" maxWidth="md" />
        </header>
        <SectionDivider />
        <Section>
          <Article maxWidth="md">
            <List>
              {allMdxPost.edges.map(({ node }) => (
                <ListItemLink
                  key={node.id}
                  to={node.slug}
                  primaryText={node.title}
                  secondaryText={`${node.date} post by ${node.author?.name}`}
                  divider
                />
              ))}
            </List>
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
