import { graphql, type PageProps, type HeadProps } from 'gatsby';
import Typography from '@mui/material/Typography';
import {
  Jumbotron,
  Section,
  SectionDivider,
  Article,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi-components';
import { Pagination } from '@cieloazul310/gatsby-theme-aoi-blog-components';
import type { MdxPostBrowser } from '@cieloazul310/gatsby-theme-aoi-blog-utils';

import Layout from './layout';
import MdxPostEdgesList from './components/MdxPostList';

type PageData = {
  allMdxPost: {
    nodes: Pick<MdxPostBrowser, 'id' | 'title' | 'slug' | 'date' | 'author'>[];
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
            <MdxPostEdgesList nodes={allMdxPost.nodes} />
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
