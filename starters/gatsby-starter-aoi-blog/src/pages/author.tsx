import * as React from 'react';
import { graphql, type PageProps } from 'gatsby';
import {
  Layout,
  Jumbotron,
  Section,
  SectionDivider,
  Article,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi';
import { AuthorBox, AuthorBrowser } from '@cieloazul310/gatsby-theme-aoi-blog';

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

export function Head() {
  return <Seo title="Authors" />;
}

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
