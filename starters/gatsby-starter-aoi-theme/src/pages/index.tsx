import * as React from 'react';
import {
  Layout,
  Section,
  SectionDivider,
  H3,
  Paragraph,
} from '@cieloazul310/gatsby-theme-aoi';

function IndexPage() {
  return (
    <Layout title="Index Page">
      <Section>
        <H3>Gatsby Aoi Theme</H3>
        <Paragraph>This is Gatsby Aoi Theme Demo Page.</Paragraph>
      </Section>
      <SectionDivider />
      <Section>
        <H3>Gatsby Aoi Theme</H3>
        <Paragraph>This is Gatsby Aoi Theme Demo Page.</Paragraph>
      </Section>
    </Layout>
  );
}

export default IndexPage;
