import * as React from "react";
import { graphql, type PageProps, type HeadProps } from "gatsby";
import Typography from "@mui/material/Typography";
import {
  Jumbotron,
  Section,
  Article,
  Seo,
} from "@cieloazul310/gatsby-theme-aoi-components";
import {
  Pagination,
  DrawerPageNavigation,
  PageNavigationContainer,
  PageNavigationItem,
} from "@cieloazul310/gatsby-theme-aoi-blog-components";
import type {
  MdxPostListFragment,
  Terminology,
} from "@cieloazul310/gatsby-theme-aoi-blog-types";

import Layout from "./layout";
import MdxPostList from "./components/MdxPostList";

type PageData = {
  allMdxPost: {
    nodes: MdxPostListFragment[];
  };
};

type PageContext = {
  previous: Terminology | null;
  next: Terminology | null;
  type: string;
  name: string;
  slug: string;
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
  const { name, previous, next, numPages, currentPage, basePath, totalCount } =
    pageContext;

  return (
    <Layout
      title={name}
      drawerContents={
        <DrawerPageNavigation
          left={previous && { href: previous.slug, title: previous.name }}
          right={next && { href: next.slug, title: next.name }}
        />
      }
    >
      <Jumbotron component="header" maxWidth="md">
        <Typography>Category</Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          {name}
        </Typography>
        <Typography>{totalCount} posts</Typography>
      </Jumbotron>
      <Section component="main">
        <Article maxWidth="md">
          <MdxPostList posts={allMdxPost.nodes} />
          <Pagination
            numPages={numPages}
            currentPage={currentPage}
            basePath={basePath}
          />
        </Article>
      </Section>
      <Section component="nav">
        <PageNavigationContainer>
          <PageNavigationItem href={previous?.slug ?? "#"} disabled={!previous}>
            <Typography variant="body2">{previous?.name}</Typography>
          </PageNavigationItem>
          <PageNavigationItem href={next?.slug ?? "#"} right disabled={!next}>
            <Typography variant="body2">{next?.name}</Typography>
          </PageNavigationItem>
        </PageNavigationContainer>
      </Section>
    </Layout>
  );
}

export default CategoryTemplate;

export function Head({ pageContext }: HeadProps<PageData, PageContext>) {
  const { name } = pageContext;
  return <Seo title={`Category: ${name}`} />;
}

export const query = graphql`
  query Category($name: String!, $skip: Int!, $limit: Int!) {
    allMdxPost(
      filter: { categories: { eq: $name } }
      sort: { date: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        ...MdxPostList
      }
    }
  }
`;
