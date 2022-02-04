import * as React from 'react';

import {
  HomeIcon,
  AllPostsIcon,
  CategoryIcon,
  TagIcon,
  AuthorIcon,
  ArchiveIcon,
} from '../../icons';

const menu = [
  {
    title: 'Top',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'All Posts',
    path: '/posts/',
    icon: <AllPostsIcon />,
  },
  {
    title: 'Archive',
    path: '/archive/',
    icon: <ArchiveIcon />,
  },
  {
    title: 'Categories',
    path: '/category/',
    icon: <CategoryIcon />,
  },
  {
    title: 'Tags',
    path: '/tag/',
    icon: <TagIcon />,
  },
  {
    title: 'Author',
    path: '/author/',
    icon: <AuthorIcon />,
  },
];

export default menu;
