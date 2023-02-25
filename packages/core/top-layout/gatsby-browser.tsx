import * as React from 'react';
import type { WrapRootElementBrowserArgs } from 'gatsby';
import TopLayout from './src/components/TopLayout';

export const wrapRootElement = (
  { element }: WrapRootElementBrowserArgs,
  pluginOptions: { siteId: string  }
) => {
  const { siteId = 'palette' } = pluginOptions;
  const storedItem = JSON.parse(localStorage.getItem(siteId) ?? '');
  const isMobile = window.matchMedia('(max-width: 600px)').matches;
  return (
    <TopLayout siteId={siteId} storedItem={storedItem ?? null} isMobile={isMobile}>
      {element}
    </TopLayout>
  );
};
