import * as React from 'react';
import MuiLink, { type LinkProps as MuiLinkProps } from '@mui/material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import type { Theme } from '@mui/material/styles';
import type { MDXComponents } from 'mdx/types';
import GatsbyLinkComposed, {
  type GatsbyLinkComposedProps,
} from './GatsbyLinkComposed';

export type AppLinkProps<T extends object = Record<string, unknown>> = Omit<
  GatsbyLinkComposedProps<T>,
  'ref' | 'to'
> &
  Omit<MuiLinkProps, 'ref'>;

export const AppLink: (props: AppLinkProps) => JSX.Element | null =
  React.forwardRef<HTMLAnchorElement, AppLinkProps>(
    ({ href, color, children, ...props }, ref) => {
      const linkColor =
        color ??
        (({ palette }: Theme) =>
          palette.mode === 'light' ? 'secondary.dark' : 'secondary.main');

      if (href && /^\/(?!\/)/.test(href)) {
        return (
          <MuiLink
            ref={ref}
            component={GatsbyLinkComposed}
            to={href}
            color={linkColor}
            underline="hover"
            {...props}
          >
            {children}
          </MuiLink>
        );
      }
      return (
        <MuiLink
          ref={ref}
          href={href}
          color={linkColor}
          underline="hover"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
          <OpenInNewIcon fontSize="inherit" />
        </MuiLink>
      );
    }
  );

const links: MDXComponents = {
  a: AppLink,
};

export default links;
