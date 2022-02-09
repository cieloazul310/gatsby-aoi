// src/@cieloazul310/gatsby-theme-aoi-layout/menu.tsx
import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SubjectIcon from '@mui/icons-material/Subject';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import LabelIcon from '@mui/icons-material/Label';
import PersonIcon from '@mui/icons-material/Person';
import ScheduleIcon from '@mui/icons-material/Schedule';

const menu = [
  {
    title: 'Top',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'All Posts',
    path: '/posts/',
    icon: <SubjectIcon />,
  },
  {
    title: 'Archive',
    path: '/archive/',
    icon: <ScheduleIcon />,
  },
  {
    title: 'Categories',
    path: '/category/',
    icon: <ViewModuleIcon />,
  },
  {
    title: 'Tags',
    path: '/tag/',
    icon: <LabelIcon />,
  },
  {
    title: 'Authors',
    path: '/author/',
    icon: <PersonIcon />,
  },
];

export default menu;
