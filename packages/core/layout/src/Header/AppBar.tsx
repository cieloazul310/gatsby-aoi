import * as React from 'react';
import MuiAppBar, {
  type AppBarProps as MuiAppBarProps,
} from '@mui/material/AppBar';

export type AppBarProps = React.PropsWithChildren<{
  appBarPosition: MuiAppBarProps['position'];
}>;

function AppBar({ children, appBarPosition }: AppBarProps) {
  return (
    <MuiAppBar
      position={appBarPosition}
      sx={{
        zIndex: ({ zIndex }) => zIndex.drawer + 2,
        width: 1,
      }}
    >
      {children}
    </MuiAppBar>
  );
}

export default AppBar;
