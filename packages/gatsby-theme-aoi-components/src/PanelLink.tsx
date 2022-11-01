import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import type { Theme } from '@mui/material/styles';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function isInternal(to: string) {
  return /^\/(?!\/)/.test(to);
}

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

type PanelLinkProps = {
  to: string;
  children: React.ReactNode;
  disableBorder?: boolean;
  disableMargin?: boolean;
};

function PanelLink({
  to,
  children,
  disableBorder = false,
  disableMargin = false,
}: PanelLinkProps) {
  const borderStyles = {
    border: disableBorder ? 0 : 1,
    borderRadius: disableBorder ? 0 : 1,
    borderColor: 'divider',
  } as const;
  const internal = isInternal(to);

  if (!internal) {
    const { hostname } = new URL(to);

    return (
      <ButtonBase
        component="a"
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          my: disableMargin ? 0 : 4,
          '&.MuiButtonBase-root': { ...ButtonBaseRootStyle, ...borderStyles },
        }}
      >
        <Box display="flex" alignItems="center">
          <Box mr={2} display="flex">
            <ArrowCircleRightIcon />
          </Box>
          <Box>
            <Typography>{children}</Typography>
            <Typography variant="caption" color="text.secondary">
              {hostname}
            </Typography>
          </Box>
        </Box>
      </ButtonBase>
    );
  }
  return (
    <ButtonBase
      component={GatsbyLink}
      to={to}
      sx={{
        my: disableMargin ? 0 : 4,
        '&.MuiButtonBase-root': { ...ButtonBaseRootStyle, ...borderStyles },
      }}
    >
      <Box display="flex" alignItems="center">
        <Box mr={2} display="flex">
          <ArrowCircleRightIcon />
        </Box>
        <Box>
          <Typography>{children}</Typography>
        </Box>
      </Box>
    </ButtonBase>
  );
}

PanelLink.defaultProps = {
  disableBorder: false,
  disableMargin: false,
};

export default PanelLink;
