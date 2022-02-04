import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import {
  Jumbotron,
  Section,
  SectionDivider,
  Article,
  AppLink,
} from '@cieloazul310/gatsby-theme-aoi';
import Layout from '../layout';
import { MdxPostMonth } from '../../types';

type PageData = {
  months: MdxPostMonth[];
};

function ArchivePage({ data }: PageProps<PageData>) {
  const { months } = data;
  return (
    <Layout title="Archive">
      <article>
        <header>
          <Jumbotron title="Archive" maxWidth="md" />
        </header>
        <SectionDivider />
        <Section>
          <Article maxWidth="md">
            {months.map(({ basePath, year, month }) => (
              <AppLink key={basePath} to={basePath}>
                {`${year}年${month}月`}
              </AppLink>
            ))}
          </Article>
        </Section>
      </article>
    </Layout>
  );
}

export default ArchivePage;

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
