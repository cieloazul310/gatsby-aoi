import * as React from 'react';
import {
  Layout,
  Article,
  Section,
  H2,
  Paragraph,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi';

function NotFoundPage() {
  return (
    <Layout title="404 Page">
      <Section component="main">
        <Article>
          <H2>404 page</H2>
          <Paragraph>This is Gatsby Aoi Theme Demo Page.</Paragraph>
        </Article>
      </Section>
    </Layout>
  );
}

export function Head() {
  return <Seo title="404 Not Found" />;
}

export default NotFoundPage;
