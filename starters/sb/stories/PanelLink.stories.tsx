import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PanelLink } from '@cieloazul310/gatsby-theme-aoi-components';

export default {
  title: 'PanelLink',
  component: PanelLink,
};

export function Basic() {
  return (
    <Stack spacing={2}>
      <PanelLink href="/">Top</PanelLink>
      <PanelLink href="https://cieloazul310.github.io">External</PanelLink>
      <PanelLink href="https://cieloazul310.github.io" disableBorder>
        Borderless
      </PanelLink>
    </Stack>
  );
}
