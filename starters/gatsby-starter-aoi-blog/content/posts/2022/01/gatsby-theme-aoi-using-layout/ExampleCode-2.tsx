// ex. src/pages/examples/page-02.tsx
import * as React from 'react';
import { Layout, AppLink } from '@cieloazul310/gatsby-theme-aoi';

function FullWidthPage() {
  return (
    <Layout
      title="Full Width Page"
      componentViewports={{
        permanentDrawer: false, // permanentDrawer 非表示
        swipeableDrawer: 'xsUp', // swipeableDrawer 全ての画面サイズで表示
        fab: 'xsUp', // fab 全ての画面サイズで表示
      }}
    >
      <p>Hello, Aoi Layout!</p>
      <p>
        <AppLink to="/posts/2022/01/gatsby-theme-aoi-using-layout">
          元のページに戻る
        </AppLink>
      </p>
    </Layout>
  );
}

export default FullWidthPage;
