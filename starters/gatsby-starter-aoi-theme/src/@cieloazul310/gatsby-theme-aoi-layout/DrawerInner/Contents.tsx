import * as React from 'react';
import { withPrefix } from 'gatsby';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// icons
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';

import { useLocation } from '@reach/router';
import { ListItemAppLink } from '@cieloazul310/gatsby-theme-aoi';

function Contents() {
  const { pathname } = useLocation();
  return (
    <List subheader={<ListSubheader>Contents</ListSubheader>} role="menu">
      <ListItemAppLink
        to="/"
        button
        selected={pathname === withPrefix('/')}
        role="menuitem"
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Top" />
      </ListItemAppLink>
      <ListItemAppLink
        to="/catalogue/"
        button
        selected={pathname === withPrefix('/catalogue/')}
        role="menuitem"
      >
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Catalogue" />
      </ListItemAppLink>
      <ListItemAppLink
        to="/tab-page/"
        button
        selected={pathname === withPrefix('/tab-page/')}
        role="menuitem"
      >
        <ListItemIcon>
          <SportsHandballIcon />
        </ListItemIcon>
        <ListItemText primary="Tab Layout" />
      </ListItemAppLink>
      <ListItemAppLink
        to="/jumbotron/"
        button
        selected={pathname === withPrefix('/jumbotron/')}
        role="menuitem"
      >
        <ListItemIcon>
          <SportsHandballIcon />
        </ListItemIcon>
        <ListItemText primary="Jumbotron Layout" />
      </ListItemAppLink>
      <ListItemAppLink
        to="/without-drawer/"
        button
        selected={pathname === withPrefix('/without-drawer/')}
        role="menuitem"
      >
        <ListItemIcon>
          <SportsHandballIcon />
        </ListItemIcon>
        <ListItemText primary="Full Width Layout" />
      </ListItemAppLink>
    </List>
  );
}

export default Contents;
