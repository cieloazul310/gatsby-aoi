import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase, { type ButtonBaseProps } from '@mui/material/ButtonBase';
import type { Theme } from '@mui/material/styles';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { isInternal } from '@cieloazul310/gatsby-theme-aoi-utils';
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
      palette.grey[palette.mode === 'light' ? 100 : 900],
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
    ({ children, href, disableBorder, disableMargin, ...props }, ref) => {
      const borderStyles = {
        border: disableBorder ? 0 : 1,
        borderRadius: disableBorder ? 0 : 1,
        borderColor: 'divider',
      } as const;
      const sx = {
        my: disableMargin ? 0 : 4,
        '&.MuiButtonBase-root': { ...ButtonBaseRootStyle, ...borderStyles },
      } as const;
      const internal = isInternal(href);
      const host = React.useMemo(() => {
        if (internal) return null;
        try {
          const { hostname } = new URL(href);
          return (
            <Typography variant="caption" color="text.secondary">
              {hostname}
            </Typography>
          );
        } catch {
          return null;
        }
      }, [internal, href]);

      const inside = React.useMemo(
        () => (
          <Box display="flex" alignItems="center">
            <Box flexShrink={0} mr={2} display="flex">
              <ArrowCircleRightIcon />
            </Box>
            <Box flexGrow={1}>
              <Typography>{children}</Typography>
              {host}
            </Box>
          </Box>
        ),
        [host, children]
      );

      if (internal) {
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
          target="_blank"
          rel="noopener noreferrer"
          sx={sx}
          {...props}
        >
          {inside}
        </ButtonBase>
      );
    }
  );

export default PanelLink;
