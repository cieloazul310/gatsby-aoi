import * as React from 'react';
import { graphql, type PageProps } from 'gatsby';
import List from '@mui/material/List';
import {
  Layout,
  Jumbotron,
  Section,
  SectionDivider,
  Article,
  ListItemLink,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi';
import type { MdxPostMonth } from '@cieloazul310/gatsby-theme-aoi-blog';

type PageData = {
  months: MdxPostMonth[];
};

function ArchivePage({ data }: PageProps<PageData>) {
  const { months } = data;
  return (
    <Layout title="Archive" componentViewports={{ bottomNav: false }}>
      <article>
        <header>
          <Jumbotron title="Archive" maxWidth="md" />
        </header>
        <SectionDivider />
        <Section>
          <Article maxWidth="md">
            <List>
              {months.map(({ basePath, year, month, totalCount }, index) => (
                <ListItemLink
                  key={basePath}
                  href={basePath}
                  primaryText={`${year}年${month}月`}
                  secondaryText={`${totalCount} posts`}
                  divider={index !== months.length - 1}
                />
              ))}
            </List>
          </Article>
        </Section>
      </article>
    </Layout>
  );
}

export default ArchivePage;

export function Head() {
  return <Seo title="Archive" />;
}

export const query = graphql`
  query {
    months: allMdxPostMonths {
      basePath
      gte
      id
      lt
      month
      totalCount
      year
    }
  }
`;
