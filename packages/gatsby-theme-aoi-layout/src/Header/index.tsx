import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  ComponentViewports,
  useSiteMetadata,
} from '@cieloazul310/gatsby-theme-aoi-utils';
import ButtonLeft from './ButtonLeft';
import ButtonRight from './ButtonRight';

interface Props {
  title?: string;
  componentViewports: ComponentViewports;
  toggleDrawer?: () => void;
}

function Header({
  title,
  componentViewports,
  toggleDrawer = () => {
    // do nothing
  },
}: Props) {
  const siteMetadata = useSiteMetadata();
  return (
    <Toolbar>
      <ButtonLeft
        componentViewports={componentViewports}
        toggleDrawer={toggleDrawer}
      />
      <Typography
        sx={{
          flexGrow: 1,
          py: 0,
          px: 1,
          lineHeight: 1.2,
          display: 'flex',
          justifyContent: { xs: 'center', md: 'start' },
        }}
        variant="h6"
        component="h1"
        color="inherit"
        fontSize={{ xs: 'body1.fontSize', sm: 'h6.fontSize' }}
      >
        {title ?? siteMetadata.title}
      </Typography>
      <ButtonRight title={title} />
    </Toolbar>
  );
}

Header.defaultProps = {
  title: undefined,
  toggleDrawer: () => {
    // do nothing
  },
};

export default Header;
