import * as React from 'react';
import {
  Layout,
  Article,
  Section,
  ArticleTitle,
  Paragraph,
} from '@cieloazul310/gatsby-theme-aoi';

function NotFoundPage() {
  return (
    <Layout title="404 Page">
      <Section>
        <Article>
          <ArticleTitle>404 page</ArticleTitle>
          <Paragraph>This is Gatsby Aoi Theme Demo Page.</Paragraph>
        </Article>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;