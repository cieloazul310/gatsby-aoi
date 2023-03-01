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
  previous?: {
    to: string;
    title: string;
    secondaryText?: string;
  } | null;
  next?: {
    to: string;
    title: string;
    secondaryText?: string;
  } | null;
  linkProps?: Partial<Omit<ListItemAppLinkProps, 'to' | 'button'>>;
};

function DrawerPageNavigation({
  title,
  previous,
  next,
  linkProps,
}: DrawerPageNavigationProps) {
  return (
    <List subheader={<ListSubheader>{title ?? 'Navigation'}</ListSubheader>}>
      {previous ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ListItemAppLink href={previous.to} {...linkProps}>
          <ListItemIcon>
            <ArrowBackIcon />
          </ListItemIcon>
          <ListItemText
            primary={previous.title}
            secondary={previous.secondaryText ?? 'Previous'}
          />
        </ListItemAppLink>
      ) : null}
      {next ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ListItemAppLink href={next.to} {...linkProps}>
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
          <ListItemText
            primary={next.title}
            secondary={next.secondaryText ?? 'Next'}
          />
        </ListItemAppLink>
      ) : null}
    </List>
  );
}

DrawerPageNavigation.defaultProps = {
  title: undefined,
  previous: undefined,
  next: undefined,
  linkProps: undefined,
};

export default DrawerPageNavigation;
