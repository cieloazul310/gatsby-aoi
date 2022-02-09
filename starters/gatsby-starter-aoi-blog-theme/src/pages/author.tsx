import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import {
  Layout,
  Jumbotron,
  Section,
  SectionDivider,
  Article,
} from '@cieloazul310/gatsby-theme-aoi';
import AuthorBox from '@cieloazul310/gatsby-theme-aoi-blog-core/src/components/AuthorBox';
import { AuthorBrowser } from '@cieloazul310/gatsby-theme-aoi-blog-core';
// import AuthorBox from '../components/AuthorBox';

type PageData = {
  allAuthor: {
    edges: {
      node: Pick<
        AuthorBrowser,
        | 'name'
        | 'slug'
        | 'description'
        | 'website'
        | 'websiteURL'
        | 'avatar'
        | 'socials'
        | 'posts'
      >;
    }[];
  };
};

function AuthorPage({ data }: PageProps<PageData>) {
  const { edges } = data.allAuthor;
  return (
    <Layout title="Authors" componentViewports={{ bottomNav: false }}>
      <article>
        <header>
          <Jumbotron title="Authors" maxWidth="md" />
        </header>
        <SectionDivider />
        {edges.map(({ node }, index) => (
          <React.Fragment key={node.name}>
            <Section>
              <article>
                <Article maxWidth="md">
                  <AuthorBox author={node} />
                </Article>
              </article>
            </Section>
            {index !== edges.length - 1 ? <SectionDivider /> : null}
          </React.Fragment>
        ))}
      </article>
    </Layout>
  );
}

export default AuthorPage;

export const query = graphql`
  query {
    allAuthor(
      sort: { fields: [posts___totalCount, name], order: [DESC, ASC] }
    ) {
      edges {
        node {
          name
          slug
          description
          website
          websiteURL
          avatar {
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
          socials {
            name
            url
          }
          posts {
            totalCount
          }
        }
      }
    }
  }
`;
