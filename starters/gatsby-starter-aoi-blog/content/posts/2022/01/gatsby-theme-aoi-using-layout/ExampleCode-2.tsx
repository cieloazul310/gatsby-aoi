// ex. src/pages/page-2.tsx

import * as React from 'react';
import { Layout } from '@cieloazul310/gatsby-theme-aoi';

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
    </Layout>
  );
}

export default FullWidthPage;
