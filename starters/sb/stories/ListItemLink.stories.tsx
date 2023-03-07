import * as React from 'react';
import List from '@mui/material/List';
import { ListItemLink } from '@cieloazul310/gatsby-theme-aoi-components';
import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'ListItemLink',
  component: ListItemLink,
} as ComponentMeta<typeof ListItemLink>;

export function Basic() {
  return (
    <List>
      <ListItemLink primaryText="Hoge" secondaryText="2023-02-28" href="/" />
      <ListItemLink
        primaryText="External"
        secondaryText="2023-02-27"
        href="https://cieloazul310.github.io"
      />
    </List>
  );
}
