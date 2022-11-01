/* eslint react/jsx-props-no-spreading: "warn" */
import * as React from 'react';
import { Link as GatsbyLink, type GatsbyLinkProps } from 'gatsby';
import ListItem, { type ListItemProps } from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

type GatsbyLinkComposedProps<T = Record<string, unknown>> = Omit<
  GatsbyLinkProps<T>,
  'ref'
>;

const GatsbyLinkComposed = React.forwardRef<any, GatsbyLinkComposedProps>(
  (props, ref) => {
    // eslint-disable-next-line react/prop-types
    const { to, state, ...other } = props;
    return <GatsbyLink to={to} state={state} ref={ref} {...other} />;
  }
);

interface ListItemAppLinkPropsBase {
  innerRef?: React.Ref<unknown>;
  button?: boolean;
  naked?: boolean;
}

export type ListItemAppLinkProps = ListItemAppLinkPropsBase &
  GatsbyLinkComposedProps &
  Omit<ListItemProps, 'ref'>;

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

export default ListItemAppLink;
