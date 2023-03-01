import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAppLink } from '@cieloazul310/gatsby-theme-aoi-components';
import { usePathnameWithoutPrefix } from '@cieloazul310/gatsby-theme-aoi-utils';
import bottomNavMenu from '../bottomnav-menu';

function BottomNav() {
  const pathname = usePathnameWithoutPrefix();
  return (
    <BottomNavigation
      sx={{ borderTop: 1, borderColor: 'divider' }}
      value={pathname}
      showLabels
    >
      {bottomNavMenu.map(({ title, path, icon }) => (
        <BottomNavigationAppLink
          key={path}
          value={path}
          label={title}
          icon={icon}
          href={path}
        />
      ))}
    </BottomNavigation>
  );
}

export default BottomNav;
