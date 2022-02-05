import * as React from 'react';
import Box from '@mui/material/Box';

function PageNavigationContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      {children}
    </Box>
  );
}

export default PageNavigationContainer;
