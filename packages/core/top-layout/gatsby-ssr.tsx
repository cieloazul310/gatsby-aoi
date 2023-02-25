import * as React from 'react';
import type { WrapRootElementNodeArgs } from 'gatsby';
import TopLayout from './src/components/TopLayout';

export const wrapRootElement = (
  { element }: WrapRootElementNodeArgs,
  pluginOptions: { siteId: string | null }
) => (
  <TopLayout
    siteId={pluginOptions.siteId || 'palette'}
    storedItem={null}
    isMobile={false}
  >
    {element}
  </TopLayout>
);
