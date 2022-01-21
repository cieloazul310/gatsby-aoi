import * as React from 'react';
import Box from '@mui/material/Box';

export type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <Box>{children}</Box>;
}

export default Layout;
