import * as React from 'react';
import MuiLink, { type LinkProps as MuiLinkProps } from '@mui/material/Link';
import LinkIcon from '@mui/icons-material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MaiOutlineIcon from '@mui/icons-material/MailOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import type { Theme } from '@mui/material/styles';
import { useLinkType } from '@cieloazul310/gatsby-theme-aoi-utils';
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
    (
      { href, color, children, download, underline = 'hover', ...props },
      ref
    ) => {
      const linkType = useLinkType(href);
      const linkColor =
        color ??
        (({ palette }: Theme) =>
          palette.mode === 'light' ? 'secondary.dark' : 'secondary.light');

      if (href && linkType === 'internal') {
        return (
          <MuiLink
            ref={ref}
            component={GatsbyLinkComposed}
            to={href}
            color={linkColor}
            underline={underline}
            {...props}
          >
            {children}
          </MuiLink>
        );
      }
      const linkIcon = React.useMemo(() => {
        if (download) return <FileDownloadIcon fontSize="inherit" />;
        if (linkType === 'external')
          return <OpenInNewIcon fontSize="inherit" />;
        if (linkType === 'mail') return <MaiOutlineIcon fontSize="inherit" />;
        if (linkType === 'section') return <LinkIcon fontSize="inherit" />;
        return null;
      }, [linkType, download]);

      return (
        <MuiLink
          ref={ref}
          href={href}
          color={linkColor}
          underline={underline}
          target={linkType === 'external' ? '_blank' : undefined}
          rel={linkType === 'external' ? 'noopener noreferrer' : undefined}
          download={download}
          {...props}
        >
          {children}
          {linkIcon}
        </MuiLink>
      );
    }
  );

const links: MDXComponents = {
  a: AppLink,
};

export default links;
