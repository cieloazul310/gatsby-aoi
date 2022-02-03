import * as React from 'react';
import {
  Layout,
  Section,
  Article,
  ArticleTitle,
  Paragraph,
} from '@cieloazul310/gatsby-theme-aoi';

function NotFoundPage() {
  return (
    <Layout title="404 not found">
      <Section>
        <Article>
          <ArticleTitle>404 not found</ArticleTitle>
          <Paragraph>This is Gatsby Aoi Theme Demo Page.</Paragraph>
        </Article>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;
