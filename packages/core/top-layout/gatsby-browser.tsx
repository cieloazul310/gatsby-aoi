import * as React from 'react';
import type { WrapRootElementBrowserArgs } from 'gatsby';
import TopLayout from './src/components/TopLayout';

export const wrapRootElement = (
  { element }: WrapRootElementBrowserArgs,
  pluginOptions: { siteId: string }
) => {
  const { siteId = 'palette' } = pluginOptions;
  const stored = localStorage.getItem(siteId);
  const storedItem = stored ? JSON.parse(stored) : null;
  return (
    <TopLayout siteId={siteId} storedItem={storedItem ?? null}>
      {element}
    </TopLayout>
  );
};
