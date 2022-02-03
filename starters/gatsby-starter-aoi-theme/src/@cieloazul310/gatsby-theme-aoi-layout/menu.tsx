import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';

export type Menu = {
  title: string;
  path: string;
  icon: JSX.Element;
};

const menu: Menu[] = [
  { title: 'Top', path: '/', icon: <HomeIcon /> },
  { title: 'Catalogue', path: '/catalogue/', icon: <ListIcon /> },
  { title: 'Tab Layout', path: '/tab-page/', icon: <SportsHandballIcon /> },
  {
    title: 'Jumbotron Layout',
    path: '/jumbotron/',
    icon: <SportsHandballIcon />,
  },
  {
    title: 'Full Width',
    path: '/without-drawer/',
    icon: <SportsHandballIcon />,
  },
];

export default menu;
