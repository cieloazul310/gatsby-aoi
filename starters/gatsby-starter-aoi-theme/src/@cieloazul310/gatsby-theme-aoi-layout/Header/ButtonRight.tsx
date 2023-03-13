import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import type { HeaderButtonRightProps } from '@cieloazul310/gatsby-theme-aoi';

type ButtonRightProps = HeaderButtonRightProps & {
  onRightButtonClick?: () => void;
};

function ButtonRight({
  onRightButtonClick = () => {
    // noop
  },
}: ButtonRightProps) {
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <IconButton onClick={onRightButtonClick}>
          <ArrowRightIcon />
        </IconButton>
      </Box>
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

ButtonRight.defaultProps = {
  onRightButtonClick: () => {},
};

export default ButtonRight;
