import * as React from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { ListItemAppLink } from '@cieloazul310/gatsby-theme-aoi';

type DrawerPageNavigationProps = {
  previous?: {
    to: string;
    title: string;
  } | null;
  next?: {
    to: string;
    title: string;
  } | null;
};

function DrawerPageNavigation({ previous, next }: DrawerPageNavigationProps) {
  return (
    <List subheader={<ListSubheader>Navigation</ListSubheader>}>
      {previous ? (
        <ListItemAppLink to={previous.to} button>
          <ListItemIcon>
            <ArrowBackIcon />
          </ListItemIcon>
          <ListItemText primary={previous.title} secondary="Previous" />
        </ListItemAppLink>
      ) : null}
      {next ? (
        <ListItemAppLink to={next.to} button>
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
          <ListItemText primary={next.title} secondary="Next" />
        </ListItemAppLink>
      ) : null}
    </List>
  );
}

DrawerPageNavigation.defaultProps = {
  previous: undefined,
  next: undefined,
};

export default DrawerPageNavigation;
