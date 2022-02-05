/* eslint arrow-body-style: warn */
/* eslint react/jsx-filename-extension: warn */
/* eslint import/prefer-default-export: warn */
import React from 'react';
import TopLayout from './src/components/TopLayout';

export const wrapRootElement = ({ element }, pluginOptions) => {
  return (
    <TopLayout siteId={pluginOptions.siteId || 'palette'} storedItem={null}>
      {element}
    </TopLayout>
  );
};
