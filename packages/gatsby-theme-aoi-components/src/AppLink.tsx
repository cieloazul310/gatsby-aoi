/* eslint react/jsx-props-no-spreading: "warn" */
import * as React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps, withPrefix } from 'gatsby';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import Button, { ButtonProps } from '@mui/material/Button';
import { useLocation } from '@reach/router';
import clsx from 'clsx';

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

interface LinkPropsBase {
  activeClassName?: string;
  innerRef?: React.Ref<HTMLAnchorElement>;
  naked?: boolean;
}

export type AppLinkProps = LinkPropsBase &
  GatsbyLinkComposedProps &
  Omit<MuiLinkProps, 'href'>;

function AppLink(props: AppLinkProps) {
  const {
    activeClassName = 'active',
    className: classNameProps,
    color = ({ palette }) =>
      palette.mode === 'light' ? 'secondary.dark' : 'secondary.main',
    underline = 'hover',
    innerRef,
    naked,
    to,
    ...other
  } = props;
  const { pathname } = useLocation();

  const className = clsx(classNameProps, {
    [activeClassName]: pathname === withPrefix(to) && activeClassName,
  });

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

  return (
    <MuiLink
      component={GatsbyLinkComposed}
      className={className}
      to={to}
      ref={innerRef}
      color={color}
      underline={underline}
      {...other}
    />
  );
}
export default AppLink;

interface ButtonPropsBase {
  innerRef?: React.Ref<HTMLAnchorElement>;
}

export type AppLinkButtonProps = ButtonPropsBase &
  GatsbyLinkComposedProps &
  Omit<ButtonProps, 'href'>;

export function AppLinkButton(props: AppLinkButtonProps) {
  const { className, color = 'secondary', innerRef, to, ...other } = props;

  return (
    <Button
      component={GatsbyLinkComposed}
      className={className}
      to={to}
      ref={innerRef}
      color={color}
      {...other}
    />
  );
}
