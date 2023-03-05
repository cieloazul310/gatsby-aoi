import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase, { type ButtonBaseProps } from '@mui/material/ButtonBase';
import { alpha, type Theme } from '@mui/material/styles';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import LinkIcon from '@mui/icons-material/Link';
// import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MaiOutlineIcon from '@mui/icons-material/MailOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useLinkType } from '@cieloazul310/gatsby-theme-aoi-utils';
import GatsbyLinkComposed, {
  type GatsbyLinkComposedProps,
} from './mdxComponents/GatsbyLinkComposed';

const ButtonBaseRootStyle = {
  width: 1,
  minHeight: 80,
  px: 2,
  py: 1,
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  bgcolor: 'background.paper',
  zIndex: 100,
  '&:hover': {
    bgcolor: ({ palette }: Theme) =>
      alpha(palette.primary.main, palette.action.hoverOpacity),
  },
} as const;

export type PanelLinkProps = Omit<
  ButtonBaseProps<
    any,
    {
      href: string;
      children: React.ReactNode;
      disableBorder?: boolean;
      disableMargin?: boolean;
    }
  >,
  'ref'
> &
  Omit<GatsbyLinkComposedProps, 'to'>;

const PanelLink: (props: Omit<PanelLinkProps, 'ref'>) => JSX.Element | null =
  React.forwardRef<HTMLAnchorElement, PanelLinkProps>(
    (
      {
        children,
        href,
        download,
        disableBorder = false,
        disableMargin = false,
        ...props
      },
      ref
    ) => {
      const borderStyles = {
        border: disableBorder ? 0 : 1,
        borderRadius: disableBorder ? 0 : 1,
        borderColor: 'divider',
      } as const;
      const sx = {
        my: disableMargin ? 0 : 4,
        '&.MuiButtonBase-root': { ...ButtonBaseRootStyle, ...borderStyles },
      } as const;
      const linkType = useLinkType(href);
      const host = React.useMemo(() => {
        if (linkType !== 'external') return null;
        try {
          const { hostname } = new URL(href);
          return (
            <Typography
              component="div"
              variant="caption"
              color="text.secondary"
            >
              {hostname}
            </Typography>
          );
        } catch {
          return null;
        }
      }, [linkType, href]);
      const linkIcon = React.useMemo(() => {
        if (download) return <FileDownloadIcon />;
        if (linkType === 'mail') return <MaiOutlineIcon />;
        if (linkType === 'section') return <LinkIcon />;
        return <ArrowCircleRightIcon />;
      }, [linkType, download]);

      const inside = React.useMemo(
        () => (
          <Box display="flex" alignItems="center">
            <Box flexShrink={0} mr={2} display="flex">
              {linkIcon}
            </Box>
            <Box flexGrow={1}>
              <Typography component="div">{children}</Typography>
              {host}
            </Box>
          </Box>
        ),
        [host, children]
      );

      if (href && linkType === 'internal') {
        return (
          <ButtonBase
            ref={ref}
            component={GatsbyLinkComposed}
            to={href}
            sx={sx}
            {...props}
          >
            {inside}
          </ButtonBase>
        );
      }
      return (
        <ButtonBase
          ref={ref}
          component="a"
          href={href}
          target={linkType === 'external' ? '_blank' : undefined}
          rel={linkType === 'external' ? 'noopener noreferrer' : undefined}
          sx={sx}
          {...props}
        >
          {inside}
        </ButtonBase>
      );
    }
  );

export default PanelLink;
