import * as React from 'react';
import ListItem, { type ListItemProps } from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import type { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AppLink, type AppLinkProps } from './mdxComponents/Link';

export type ListItemLinkProps<T extends object = Record<string, unknown>> =
  Omit<ListItemProps, 'ref'> & {
    href: string;
    primaryText: string;
    secondaryText?: string;
    inset?: boolean;
    avatar?: JSX.Element;
    secondaryAction?: JSX.Element;
  } & Omit<AppLinkProps<T>, 'ref'>;

const ListItemLink = React.forwardRef<HTMLLIElement, ListItemLinkProps>(
  (
    {
      href,
      primaryText,
      secondaryText,
      secondaryAction,
      avatar,
      color = 'inherit',
      inset = false,
      ...props
    },
    ref
  ) => {
    const isMobile = useMediaQuery((theme: Theme) =>
      theme.breakpoints.only('xs')
    );
    const primary = React.useMemo(() => {
      if (isMobile) return primaryText;
      return (
        <AppLink href={href} color={color}>
          {primaryText}
        </AppLink>
      );
    }, [primaryText, isMobile, color]);
    const content = React.useMemo(
      () => (
        <>
          {avatar ? <ListItemAvatar>{avatar}</ListItemAvatar> : null}
          <ListItemText
            primary={primary}
            secondary={secondaryText}
            inset={inset}
          />
          {secondaryAction ? (
            <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>
          ) : null}
        </>
      ),
      [avatar, primary, secondaryText, inset, secondaryAction, isMobile]
    );
    const inside = React.useMemo(() => {
      if (!isMobile) return content;
      return (
        <ListItemButton component={AppLink} href={href}>
          {content}
        </ListItemButton>
      );
    }, [content]);
    return (
      <ListItem ref={ref} {...props}>
        {inside}
      </ListItem>
    );
  }
);

ListItemLink.defaultProps = {
  secondaryText: undefined,
  inset: false,
  avatar: undefined,
  secondaryAction: undefined,
};

export default ListItemLink;
