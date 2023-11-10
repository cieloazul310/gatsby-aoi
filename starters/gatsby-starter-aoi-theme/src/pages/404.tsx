import * as React from "react";
import {
  Layout,
  Section,
  Article,
  H2,
  Paragraph,
} from "@cieloazul310/gatsby-theme-aoi";

function NotFoundPage() {
  return (
    <Layout title="404 not found">
      <Section component="main">
        <Article>
          <H2>404 not found</H2>
          <Paragraph>This is Gatsby Aoi Theme Demo Page.</Paragraph>
        </Article>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;
