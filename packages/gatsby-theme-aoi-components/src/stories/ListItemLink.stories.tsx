/* eslint react/require-default-props: off */
/* eslint react/jsx-props-no-spreading: off */
import * as React from 'react';
import { GatsbyLinkProps } from 'gatsby';
import List from '@mui/material/List';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type ListItemLinkProps<T = Record<string, unknown>> = Omit<
  ListItemProps,
  'ref'
> &
  Pick<MuiLinkProps, 'color'> & {
    to: string;
    primaryText: string;
    secondaryText?: string;
    button?: boolean;
    inset?: boolean;
    avatar?: JSX.Element;
    secondaryAction?: JSX.Element;
  } & Omit<GatsbyLinkProps<T>, 'ref' | 'button'>;

function ListItemLink({
  color = 'inherit',
  button = undefined,
  inset = false,
  to,
  primaryText,
  secondaryText,
  avatar,
  secondaryAction,
  ...props
}: ListItemLinkProps) {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.only('xs')
  );

  return isMobile || button ? (
    <ListItemButton href={to} {...props}>
      {avatar ? <ListItemAvatar>{avatar}</ListItemAvatar> : null}
      <ListItemText
        primary={primaryText}
        secondary={secondaryText}
        inset={inset}
      />
      {secondaryAction ? (
        <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>
      ) : null}
    </ListItemButton>
  ) : (
    <ListItem {...props}>
      {avatar ? <ListItemAvatar>{avatar}</ListItemAvatar> : null}
      <ListItemText
        inset={inset}
        primary={
          <MuiLink href={to} color={color}>
            {primaryText}
          </MuiLink>
        }
        secondary={secondaryText || null}
      />
      {secondaryAction ? (
        <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>
      ) : null}
    </ListItem>
  );
}

export default {
  title: 'ListItemLink',
  component: ListItemLink,
};

export function Basic() {
  return (
    <List>
      <ListItemLink to="#" primaryText="Basic" />
      <ListItemLink to="#" primaryText="Inset" inset />
      <ListItemLink to="#" primaryText="Always Button" button />
      <ListItemLink to="#" primaryText="Divider" divider />
      <ListItemLink to="#" primaryText="Basic" />
    </List>
  );
}
