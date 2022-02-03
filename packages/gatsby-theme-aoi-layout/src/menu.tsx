import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';

export type Menu = {
  title: string;
  path: string;
  icon: JSX.Element;
};

const menu: Menu[] = [
  { title: 'Top', path: '/', icon: <HomeIcon /> },
  { title: 'Page 2', path: '/page-2/', icon: <SportsHandballIcon /> },
];

export default menu;
