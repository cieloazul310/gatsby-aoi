import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {
  Section,
  SectionDivider,
  Jumbotron,
  Article,
  AppLink,
  ListItemLink,
} from '@cieloazul310/gatsby-theme-aoi';
import Layout from '../layout';
import { MdxPost } from '../../types';

type PageData = {
  allMdxPost: {
    group: {
      totalCount: number;
      fieldValue: string;
      field: string;
      slug: string;
      edges: {
        node: Pick<MdxPost, 'id' | 'title' | 'date' | 'slug' | 'author'>;
      }[];
    }[];
  };
};

function CategoryPage({ data }: PageProps<PageData>) {
  const { group } = data.allMdxPost;
  return (
    <Layout title="Categories">
      <article>
        <header>
          <Jumbotron title="Categories" maxWidth="md" />
        </header>
        <SectionDivider />
        <Section>
          <Article maxWidth="md">
            <List>
              {group
                .sort((a, b) => b.totalCount - a.totalCount)
                .map(({ totalCount, fieldValue, slug, edges }) => (
                  <React.Fragment key={fieldValue}>
                    <ListItem>
                      <ListItemText
                        primary={
                          <AppLink to={`/category/${slug}`} color="inherit">
                            {fieldValue}
                          </AppLink>
                        }
                        secondary={`${totalCount} posts`}
                      />
                    </ListItem>
                    <List>
                      {edges.map(({ node }) => (
                        <ListItemLink
                          // className={classes.nested}
                          key={node.id}
                          primaryText={node.title}
                          secondaryText={`${node.date} post by ${
                            node.author?.name ?? 'Author'
                          }`}
                          to={node.slug}
                          dense
                          divider
                        />
                      ))}
                      <ListItemLink
                        // className={classes.footer}
                        primaryText="More"
                        to={`/category/${slug}`}
                        color="secondary"
                      />
                    </List>
                  </React.Fragment>
                ))}
            </List>
          </Article>
        </Section>
      </article>
    </Layout>
  );
}

export default CategoryPage;

export const query = graphql`
  query {
    allMdxPost {
      group(field: categories, limit: 5) {
        totalCount
        fieldValue
        field
        slug
        edges {
          node {
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
  }
`;
