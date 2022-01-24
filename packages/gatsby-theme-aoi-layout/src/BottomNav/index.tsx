import * as React from 'react';
import { withPrefix } from 'gatsby';
import BottomNavigation from '@mui/material/BottomNavigation';
// icons
import Home from '@mui/icons-material/Home';
import MusicNote from '@mui/icons-material/MusicNote';
import { useLocation } from '@reach/router';
import { BottomNavItem } from '@cieloazul310/gatsby-theme-aoi-components';

function BottomNav() {
  const { pathname } = useLocation();

  return (
    <BottomNavigation
      sx={{ borderTop: 1, borderColor: 'divider' }}
      value={pathname.replace(withPrefix('/'), '/')}
      showLabels
    >
      <BottomNavItem label="Top" value="/" icon={<Home />} />
      <BottomNavItem label="Page2" value="/page-2/" icon={<MusicNote />} />
    </BottomNavigation>
  );
}

export default BottomNav;
