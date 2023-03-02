import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {
  ListItemAppLink,
  type ListItemAppLinkProps,
} from '@cieloazul310/gatsby-theme-aoi-components';

type DrawerPageNavigationProps = {
  title?: string;
  newer?: {
    href: string;
    title: string;
    secondaryText?: string;
  } | null;
  older?: {
    href: string;
    title: string;
    secondaryText?: string;
  } | null;
  linkProps?: Partial<Omit<ListItemAppLinkProps, 'href' | 'button'>>;
};

function DrawerPageNavigation({
  title,
  newer,
  older,
  linkProps,
}: DrawerPageNavigationProps) {
  return (
    <List subheader={<ListSubheader>{title ?? 'Navigation'}</ListSubheader>}>
      {newer ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ListItemAppLink href={newer.href} {...linkProps}>
          <ListItemIcon>
            <ArrowBackIcon />
          </ListItemIcon>
          <ListItemText
            primary={newer.title}
            secondary={newer.secondaryText ?? 'Newer post'}
          />
        </ListItemAppLink>
      ) : null}
      {older ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ListItemAppLink href={older.href} {...linkProps}>
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
          <ListItemText
            primary={older.title}
            secondary={older.secondaryText ?? 'Older post'}
          />
        </ListItemAppLink>
      ) : null}
    </List>
  );
}

DrawerPageNavigation.defaultProps = {
  title: undefined,
  newer: undefined,
  older: undefined,
  linkProps: undefined,
};

export default DrawerPageNavigation;
