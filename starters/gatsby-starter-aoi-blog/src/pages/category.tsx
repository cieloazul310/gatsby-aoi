import * as React from 'react';
import { graphql, type PageProps } from 'gatsby';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {
  Layout,
  Section,
  SectionDivider,
  Jumbotron,
  Article,
  AppLink,
  ListItemLink,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi';
import {
  MdxPostEdgesList,
  type MdxPostBrowser,
} from '@cieloazul310/gatsby-theme-aoi-blog';

type PageData = {
  allMdxPost: {
    group: {
      totalCount: number;
      fieldValue: string;
      field: string;
      slug: string;
      nodes: Pick<
        MdxPostBrowser,
        'id' | 'title' | 'date' | 'slug' | 'author'
      >[];
    }[];
  };
};

function CategoryPage({ data }: PageProps<PageData>) {
  const { group } = data.allMdxPost;
  return (
    <Layout title="Categories" componentViewports={{ bottomNav: false }}>
      <article>
        <header>
          <Jumbotron title="Categories" maxWidth="md" />
        </header>
        <SectionDivider />
        {group
          .sort((a, b) => b.totalCount - a.totalCount)
          .map(({ totalCount, fieldValue, slug, nodes }, index) => (
            <React.Fragment key={fieldValue}>
              <Section>
                <Article maxWidth="md">
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={
                          <AppLink
                            href={slug}
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
                    <MdxPostEdgesList nodes={nodes} />
                    <List>
                      {totalCount > 2 ? (
                        <ListItemLink
                          sx={{ textAlign: { xs: undefined, sm: 'right' } }}
                          primaryText="More"
                          href={slug}
                          color="secondary"
                        />
                      ) : null}
                    </List>
                  </List>
                </Article>
              </Section>
              {index !== group.length - 1 ? <SectionDivider /> : null}
            </React.Fragment>
          ))}
      </article>
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
        field
        slug
        nodes {
          id
          title
          date(formatString: "YYYY-MM-DD")
          slug
          author {
            name
          }
        }
      }
    }
  }
`;
