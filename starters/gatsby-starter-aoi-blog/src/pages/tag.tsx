import * as React from 'react';
import { graphql, type PageProps } from 'gatsby';
import {
  Layout,
  Section,
  SectionDivider,
  Jumbotron,
  Article,
  AppLink,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi';

type PageData = {
  allMdxPost: {
    group: {
      field: string;
      fieldValue: string;
      totalCount: number;
      slug: string;
    }[];
  };
};

function TagPage({ data }: PageProps<PageData>) {
  const { group } = data.allMdxPost;
  return (
    <Layout title="Tags" componentViewports={{ bottomNav: false }}>
      <article>
        <header>
          <Jumbotron title="Tags" maxWidth="md" />
        </header>
        <SectionDivider />
        <Section>
          <Article maxWidth="md">
            {group
              .sort((a, b) => b.totalCount - a.totalCount)
              .map((tag) => (
                <AppLink
                  key={tag.slug}
                  href={tag.slug}
                  mr={1}
                >{`#${tag.fieldValue}`}</AppLink>
              ))}
          </Article>
        </Section>
      </article>
    </Layout>
  );
}

export default TagPage;

export function Head() {
  return <Seo title="Tags" />;
}

export const query = graphql`
  {
    allMdxPost(sort: { date: DESC }) {
      group(field: { tags: SELECT }) {
        totalCount
        fieldValue
        field
        slug
      }
    }
  }
`;
