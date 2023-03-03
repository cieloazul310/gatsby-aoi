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
import { useTagToSlug } from '@cieloazul310/gatsby-theme-aoi-blog';

type PageData = {
  allMdxPost: {
    group: {
      field: string;
      fieldValue: string;
      totalCount: number;
    }[];
  };
};
function TagPage({ data }: PageProps<PageData>) {
  const { group } = data.allMdxPost;
  const tagToSlug = useTagToSlug();
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
              .sort(
                (a, b) =>
                  b.totalCount - a.totalCount ||
                  a.fieldValue.localeCompare(b.fieldValue)
              )
              .map((tag) => (
                <AppLink
                  key={tag.fieldValue}
                  href={tagToSlug(tag.fieldValue)}
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
      group(field: { tags: { name: SELECT } }) {
        totalCount
        fieldValue
        field
      }
    }
  }
`;
