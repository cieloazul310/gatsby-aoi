// ex. src/pages/examples/page-03.tsx
import * as React from 'react';
import {
  Layout,
  Section,
  SectionDivider,
  Jumbotron,
  Article,
  Paragraph,
  SubParagraph,
  AppLink,
} from '@cieloazul310/gatsby-theme-aoi';

function Page() {
  return (
    <Layout title="Aoi Components Example">
      <Jumbotron title="Aoi Components Example" maxWidth="md" />
      <SectionDivider />
      <Section>
        <Article maxWidth="md">
          <Paragraph>Some paragraph...</Paragraph>
          <AppLink to="/posts/2022/01/gatsby-theme-aoi-using-components">
            Back to the article
          </AppLink>
        </Article>
      </Section>
      <SectionDivider />
      <Section>
        <Article maxWidth="md">
          <SubParagraph>Author description.</SubParagraph>
        </Article>
      </Section>
    </Layout>
  );
}

export default Page;
