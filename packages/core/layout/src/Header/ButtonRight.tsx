import * as React from 'react';
import Box from '@mui/material/Box';

export type ButtonRightProps = React.PropsWithChildren<Record<string, unknown>>;

function ButtonRight({ children }: ButtonRightProps) {
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>{children}</Box>
      <Box
        sx={{
          padding: 1.5,
          mr: -1.5,
          display: { xs: 'block', md: 'none' },
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 24,
            mr: -1.5,
          }}
        />
      </Box>
    </>
  );
}

export default ButtonRight;
