import * as React from 'react';
import {
  Layout,
  Article,
  Section,
  H3,
  Paragraph,
} from '@cieloazul310/gatsby-theme-aoi';

function IndexPage() {
  return (
    <Layout title="Index Page">
      <Article>
        <Section>
          <H3>404 page</H3>
          <Paragraph>This is Gatsby Aoi Theme Demo Page.</Paragraph>
        </Section>
      </Article>
    </Layout>
  );
}

export default IndexPage;
