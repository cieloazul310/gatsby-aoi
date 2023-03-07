import * as React from 'react';
import { graphql, type PageProps } from 'gatsby';
import {
  Layout,
  Jumbotron,
  Section,
  SectionWrapper,
  Article,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi';
import { AuthorBox, type Author } from '@cieloazul310/gatsby-theme-aoi-blog';

type PageData = {
  allAuthor: {
    nodes: Pick<
      Author,
      | 'name'
      | 'slug'
      | 'description'
      | 'website'
      | 'websiteURL'
      | 'avatar'
      | 'socials'
      | 'posts'
    >[];
  };
};

function AuthorPage({ data }: PageProps<PageData>) {
  const { nodes } = data.allAuthor;
  return (
    <Layout title="Authors" componentViewports={{ bottomNav: false }}>
      <Jumbotron component="header" title="Authors" maxWidth="md" />
      <SectionWrapper>
        {nodes.map((node) => (
          <Section key={node.name} component="article">
            <Article maxWidth="md">
              <AuthorBox author={node} />
            </Article>
          </Section>
        ))}
      </SectionWrapper>
    </Layout>
  );
}

export default AuthorPage;

export function Head() {
  return <Seo title="Authors" />;
}

export const query = graphql`
  {
    allAuthor(sort: [{ posts: { totalCount: DESC } }, { name: ASC }]) {
      nodes {
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
          items {
            ...MdxPostList
          }
          totalCount
        }
      }
    }
  }
`;
