import * as React from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import { useLocation } from '@reach/router';
import ContentsItem from './ContentsItem';

import menu from '../menu';

function Contents() {
  const { pathname } = useLocation();
  return (
    <List subheader={<ListSubheader>Contents</ListSubheader>} role="menu">
      {menu.map(({ title, path, icon }) => (
        <ContentsItem
          key={title}
          title={title}
          path={path}
          currentPathname={pathname}
          icon={icon}
        />
      ))}
    </List>
  );
}

export default Contents;
