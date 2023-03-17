import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const bottomNavMenu = [
  { title: 'Top', path: '/', icon: <HomeIcon /> },
  { title: 'Tips', path: '/tips/', icon: <TipsAndUpdatesIcon /> },
];

export default bottomNavMenu;
