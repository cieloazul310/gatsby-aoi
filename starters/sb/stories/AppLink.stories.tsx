import * as React from 'react';
import Stack from '@mui/material/Stack';
import { AppLink } from '@cieloazul310/gatsby-theme-aoi-components';

export default {
  title: 'AppLink',
  component: AppLink,
};

export function Basic() {
  return (
    <Stack spacing={2}>
      <AppLink href="/">Internal</AppLink>
      <AppLink href="https://cieloazul310.github.io">External</AppLink>
      <AppLink href="/" color="primary.main">
        Primary Color
      </AppLink>
    </Stack>
  );
}
