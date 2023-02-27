import * as React from 'react';
import ListItemButton, {
  type ListItemButtonProps,
} from '@mui/material/ListItemButton';
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
        href?: string;
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
  if (href && /^\/(?!\/)/.test(href)) {
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
});
/*
function ListItemAppLink(props: ListItemAppLinkProps) {
  const { className, innerRef, naked, to, button, ...other } = props;

  if (naked) {
    return (
      <GatsbyLinkComposed
        className={className}
        ref={innerRef}
        to={to}
        {...other}
      />
    );
  }
  if (button) {
    return (
      <ListItemButton
        component={GatsbyLinkComposed}
        className={className}
        to={to}
        ref={innerRef}
        {...other}
      />
    );
  }

  return (
    <ListItem
      component={GatsbyLinkComposed}
      className={className}
      to={to}
      ref={innerRef}
      {...other}
    />
  );
}

ListItemAppLink.defaultProps = {
  innerRef: undefined,
  button: undefined,
  naked: undefined,
};
*/
export default ListItemAppLink;
