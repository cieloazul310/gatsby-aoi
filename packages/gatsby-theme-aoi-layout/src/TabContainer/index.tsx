import * as React from 'react';
import Box from '@mui/material/Box';

interface Props {
  children: React.ReactNode;
  tabSticky?: boolean;
}

function Tabs({ children, tabSticky = false }: Props) {
  return (
    <Box
      sx={{
        position: tabSticky ? 'sticky' : undefined,
        top: { xs: tabSticky ? 56 : undefined, sm: tabSticky ? 64 : undefined },
        backgroundColor: tabSticky ? 'background.default' : undefined,
        zIndex: tabSticky ? 'mobileStepper' : undefined,
        boxShadow: tabSticky ? 1 : undefined,
      }}
    >
      <nav>{children}</nav>
    </Box>
  );
}

Tabs.defaultProps = {
  tabSticky: false,
};

export default Tabs;