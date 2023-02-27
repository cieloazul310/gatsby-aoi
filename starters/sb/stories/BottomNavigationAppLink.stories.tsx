import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { BottomNavigationAppLink } from '@cieloazul310/gatsby-theme-aoi-components';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default {
  title: 'BottomNavigationAppLink',
  component: BottomNavigationAppLink,
};

export function Basic() {
  const [value, setValue] = React.useState(0);
  const onChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 300 }}>
      <BottomNavigation showLabels value={value} onChange={onChange}>
        <BottomNavigationAction label="Default" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Default 2" icon={<FavoriteIcon />} />
        <BottomNavigationAppLink
          label="Link"
          to="/"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
