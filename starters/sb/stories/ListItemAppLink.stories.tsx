import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import { ListItemAppLink } from '@cieloazul310/gatsby-theme-aoi-components';
import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'ListItemAppLink',
  component: ListItemAppLink,
} as ComponentMeta<typeof ListItemAppLink>;

export function Basic() {
  return (
    <List>
      <ListItemAppLink href="/">
        <ListItemText primary="Default" />
      </ListItemAppLink>
      <ListItemAppLink href="/">
        <ListItemText
          primary="Secondary Text"
          secondary="Secondary Text is here"
        />
      </ListItemAppLink>
      <ListItemAppLink href="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="With Icon" />
      </ListItemAppLink>
      <ListItemAppLink href="/" selected>
        <ListItemText primary="Selected" />
      </ListItemAppLink>
      <ListItemAppLink href="https://cieloazul310.github.io">
        <ListItemText primary="External" />
      </ListItemAppLink>
      <ListItemAppLink href="mailto:hoge@hoge.com">
        <ListItemText primary="Mail" />
      </ListItemAppLink>
      <ListItemAppLink href="#id">
        <ListItemText primary="Link to section" />
      </ListItemAppLink>
    </List>
  );
}
