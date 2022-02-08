// ex. src/pages/examples/page-01.tsx
import * as React from 'react';
import { Layout, AppLink } from '@cieloazul310/gatsby-theme-aoi';

function ExamplePage() {
  return (
    <Layout title="Aoi Layout Example Page">
      <p>Hello, Aoi Layout!</p>
      <p>
        <AppLink to="/posts/2022/01/gatsby-theme-aoi-using-layout">
          元のページに戻る
        </AppLink>
      </p>
    </Layout>
  );
}

export default ExamplePage;
