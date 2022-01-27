import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
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
          <StaticImage src="../images/IMG_1568.jpeg" alt="A dinosaur" />
          <Paragraph>This is Gatsby Aoi Theme Demo Page.</Paragraph>
        </Article>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;
