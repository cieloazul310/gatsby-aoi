import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type PageNavigationItemProps = {
  to: string;
  next?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
};

function PageNavigationItem({
  to,
  disabled,
  next,
  children,
}: PageNavigationItemProps) {
  return (
    <ButtonBase
      sx={{
        '&.MuiButtonBase-root': {
          width: { xs: '100%', sm: '50%' },
          flexShrink: 0,
          display: 'flex',
          borderRight: { xs: 'none', sm: undefined },
          transition: (theme) => theme.transitions.create('background'),
          '&:hover': {
            bgcolor: ({ palette }) =>
              palette.grey[palette.mode === 'light' ? 100 : 900],
          },
        },
        '&.Mui-disabled': {
          bgcolor: ({ palette }) =>
            palette.mode === 'light'
              ? palette.grey[100]
              : palette.background.default,
        },
      }}
      disabled={disabled}
      component={GatsbyLink}
      to={to}
    >
      {!disabled ? (
        <Box
          sx={{
            flexGrow: 1,
            paddingTop: 1,
            paddingRight: next ? 1 : 7,
            paddingBottom: 1,
            paddingLeft: next ? 7 : 1,
            display: 'flex',
            flexDirection: next ? 'row-reverse' : 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRight: next
              ? 'none'
              : (theme) => ({
                  xs: 'none',
                  sm: `1px solid ${theme.palette.divider}`,
                }),
          }}
        >
          <Box py={2} px={1} display="flex">
            {next ? <ArrowForwardIcon /> : <ArrowBackIcon />}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: next ? 'flex-end' : 'flex-start',
            }}
          >
            {children}
          </Box>
        </Box>
      ) : null}
    </ButtonBase>
  );
}

PageNavigationItem.defaultProps = {
  next: undefined,
  disabled: undefined,
};

export default PageNavigationItem;
