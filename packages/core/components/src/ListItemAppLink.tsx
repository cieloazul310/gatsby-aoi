import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton, {
  type ListItemButtonProps,
} from '@mui/material/ListItemButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GatsbyLinkComposed, {
  type GatsbyLinkComposedProps,
} from './mdxComponents/GatsbyLinkComposed';

export type ListItemAppLinkProps<
  TState extends object = Record<string, unknown>
> = Omit<GatsbyLinkComposedProps<TState>, 'to'> &
  Omit<
    ListItemButtonProps<
      any,
      {
        href: string;
      }
    >,
    'ref'
  >;

export const ListItemAppLink: (
  props: Omit<ListItemAppLinkProps, 'ref'>
) => JSX.Element | null = React.forwardRef<
  HTMLAnchorElement,
  ListItemAppLinkProps
>(({ href, ...props }, ref) => {
  const isInternal = href && /^\/(?!\/)/.test(href);
  const button = React.useMemo(() => {
    if (isInternal) {
      return (
        <ListItemButton
          ref={ref}
          component={GatsbyLinkComposed}
          to={href}
          {...props}
        />
      );
    }
    return (
      <ListItemButton
        ref={ref}
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  }, [href, ref, props]);

  return (
    <ListItem
      disablePadding
      secondaryAction={!isInternal ? <OpenInNewIcon /> : null}
    >
      {button}
    </ListItem>
  );
});

export default ListItemAppLink;
