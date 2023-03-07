import * as React from 'react';
import { graphql, type PageProps } from 'gatsby';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {
  Layout,
  Section,
  SectionWrapper,
  Jumbotron,
  Article,
  AppLink,
  ListItemLink,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi';
import {
  MdxPostList,
  useCategoryToSlug,
  type MdxPostListFragment,
} from '@cieloazul310/gatsby-theme-aoi-blog';

type PageData = {
  allMdxPost: {
    group: {
      totalCount: number;
      fieldValue: string;
      nodes: MdxPostListFragment[];
    }[];
  };
};

function CategoryPage({ data }: PageProps<PageData>) {
  const { group } = data.allMdxPost;
  const categoryToSlug = useCategoryToSlug();
  return (
    <Layout title="Categories" componentViewports={{ bottomNav: false }}>
      <Jumbotron component="header" title="Categories" maxWidth="md" />
      <SectionWrapper>
        {group
          .sort(
            (a, b) =>
              b.totalCount - a.totalCount ||
              a.fieldValue.localeCompare(b.fieldValue)
          )
          .map(({ totalCount, fieldValue, nodes }) => (
            <Section component="article" key={fieldValue}>
              <Article maxWidth="md">
                <List>
                  <ListItem>
                    <ListItemText
                      primary={
                        <AppLink
                          href={categoryToSlug(fieldValue)}
                          color="inherit"
                          fontSize="large"
                          fontWeight="bold"
                        >
                          {fieldValue}
                        </AppLink>
                      }
                      secondary={`${totalCount} posts`}
                    />
                  </ListItem>
                  <MdxPostList posts={nodes} />
                  <List>
                    {totalCount > 2 ? (
                      <ListItemLink
                        sx={{ textAlign: { xs: undefined, sm: 'right' } }}
                        primaryText="More"
                        href={categoryToSlug(fieldValue)}
                        color="secondary"
                      />
                    ) : null}
                  </List>
                </List>
              </Article>
            </Section>
          ))}
      </SectionWrapper>
    </Layout>
  );
}

export default CategoryPage;

export function Head() {
  return <Seo title="Categories" />;
}

export const query = graphql`
  {
    allMdxPost(sort: { date: DESC }) {
      group(field: { categories: SELECT }, limit: 2) {
        totalCount
        fieldValue
        nodes {
          ...MdxPostList
        }
      }
    }
  }
`;
