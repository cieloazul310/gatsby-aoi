import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import { ListItemAppLink } from '@cieloazul310/gatsby-theme-aoi-components';

export default {
  title: 'ListItemAppLink',
  component: ListItemAppLink,
};

export function Basic() {
  return (
    <List>
      <ListItemAppLink to="/">
        <ListItemText primary="Default" />
      </ListItemAppLink>
      <ListItemAppLink to="/">
        <ListItemText primary="Button" />
      </ListItemAppLink>
      <ListItemAppLink to="/">
        <ListItemText
          primary="Secondary Text"
          secondary="Secondary Text is here"
        />
      </ListItemAppLink>
      <ListItemAppLink to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="With Icon" />
      </ListItemAppLink>
      <ListItemAppLink to="/" selected>
        <ListItemText primary="Selected" />
      </ListItemAppLink>
      <ListItemAppLink to="https://cieloazul310.github.io">
        <ListItemText primary="External" />
      </ListItemAppLink>
    </List>
  );
}
