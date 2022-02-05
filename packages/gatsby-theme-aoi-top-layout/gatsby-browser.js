/* eslint arrow-body-style: warn */
/* eslint react/jsx-filename-extension: warn */
/* eslint import/prefer-default-export: warn */
import React from 'react';
import TopLayout from './src/components/TopLayout';

export const wrapRootElement = ({ element }, pluginOptions) => {
  const { siteId = 'palette' } = pluginOptions;
  const storedItem = JSON.parse(localStorage.getItem(siteId));
  return (
    <TopLayout siteId={siteId} storedItem={storedItem}>
      {element}
    </TopLayout>
  );
};
