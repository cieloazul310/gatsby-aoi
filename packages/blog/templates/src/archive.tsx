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
import type { MdxPostListFragment } from "@cieloazul310/gatsby-theme-aoi-blog-types";

import Layout from "./layout";
import MdxPostList from "./components/MdxPostList";

function createTitleString(year: string, month: string) {
  return `${new Date(`${year}-${month}`).toLocaleString("en-us", {
    year: "numeric",
    month: "short",
  })}`;
}

type PageData = {
  allMdxPost: {
    nodes: MdxPostListFragment[];
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
  glob: string;
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
    : "";
  const nextTitle = next ? createTitleString(next.year, next.month) : "";

  return (
    <Layout
      title={title}
      drawerContents={
        <DrawerPageNavigation
          left={
            previous && {
              href: previous.basePath,
              title: previousTitle,
            }
          }
          right={next && { href: next.basePath, title: nextTitle }}
        />
      }
    >
      <Jumbotron component="header" maxWidth="md">
        <Typography>Archive</Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          {title}
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
          <PageNavigationItem
            href={previous?.basePath ?? "#"}
            disabled={!previous}
          >
            <Typography variant="body2">{previousTitle}</Typography>
          </PageNavigationItem>
          <PageNavigationItem
            href={next?.basePath ?? "#"}
            right
            disabled={!next}
          >
            <Typography variant="body2">{nextTitle}</Typography>
          </PageNavigationItem>
        </PageNavigationContainer>
      </Section>
    </Layout>
  );
}

export default ArchiveTemplate;

export function Head({ pageContext }: HeadProps<PageData, PageContext>) {
  const { year, month } = pageContext;
  const title = createTitleString(year, month);
  return <Seo title={title} />;
}

export const query = graphql`
  query Archive($glob: String!, $skip: Int!, $limit: Int!) {
    allMdxPost(
      filter: { slug: { glob: $glob } }
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
