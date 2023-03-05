import * as React from 'react';
import Button, { type ButtonProps } from '@mui/material/Button';
import LinkIcon from '@mui/icons-material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MaiOutlineIcon from '@mui/icons-material/MailOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useLinkType } from '@cieloazul310/gatsby-theme-aoi-utils';
import GatsbyLinkComposed, {
  type GatsbyLinkComposedProps,
} from './mdxComponents/GatsbyLinkComposed';

export type AppLinkButtonProps<T extends object = Record<string, unknown>> =
  Omit<GatsbyLinkComposedProps<T>, 'to'> & ButtonProps;

const AppLinkButton: (props: AppLinkButtonProps) => JSX.Element | null =
  React.forwardRef<HTMLButtonElement, AppLinkButtonProps>(
    ({ href, download, ...props }, ref) => {
      const linkType = useLinkType(href);
      if (href && linkType === 'internal') {
        return (
          <Button
            ref={ref}
            component={GatsbyLinkComposed}
            to={href}
            {...props}
          />
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
        <Button
          ref={ref}
          href={href}
          target={linkType === 'external' ? '_blank' : undefined}
          rel={linkType === 'external' ? 'noopener noreferrer' : undefined}
          endIcon={linkIcon}
          {...props}
        />
      );
    }
  );

export default AppLinkButton;
