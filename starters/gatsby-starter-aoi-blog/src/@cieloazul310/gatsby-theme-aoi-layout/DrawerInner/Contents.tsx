import * as React from 'react';
import { withPrefix } from 'gatsby';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation } from '@reach/router';
import { ListItemAppLink } from '@cieloazul310/gatsby-theme-aoi';

import {
  HomeIcon,
  AllPostsIcon,
  CategoryIcon,
  TagIcon,
  AuthorIcon,
  ArchiveIcon,
} from '../../../icons';

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
    // path: '/archive/,
    path: '/',
    icon: <ArchiveIcon />,
  },
  {
    title: 'Category',
    path: '/category/',
    icon: <CategoryIcon />,
  },
  {
    title: 'Tags',
    // path: '/tag/',
    path: '/',
    icon: <TagIcon />,
  },
  {
    title: 'Author',
    // path: '/author/,
    path: '/',
    icon: <AuthorIcon />,
  },
];

type ContentsItemProps = {
  title: string;
  path: string;
  currentPathname: string;
  icon: JSX.Element;
};

function ContentsItem({
  title,
  path,
  currentPathname,
  icon,
}: ContentsItemProps) {
  return (
    <ListItemAppLink
      to={path}
      button
      selected={currentPathname === withPrefix(path)}
      role="menuitem"
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItemAppLink>
  );
}

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
