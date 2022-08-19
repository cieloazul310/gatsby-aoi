import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import LinearProgress from '@mui/material/LinearProgress';
import { useTheme } from '@mui/material/styles';
import {
  Section,
  SectionDivider,
} from '@cieloazul310/gatsby-theme-aoi-components';
import {
  mergeViewports,
  mainStyles,
  permanentDrawerStyles,
  fabStyles,
  viewportsToSxDisplay,
  ComponentViewports,
} from '@cieloazul310/gatsby-theme-aoi-utils';

// layout components are enable to override from your project
// https://www.gatsbyjs.org/docs/themes/shadowing/
import Header from './Header';
import TabContainer from './TabContainer';
import DrawerInner from './DrawerInner';
import FooterMenu from './FooterMenu';
import Footer from './Footer';
import Fab from './Fab';
import BottomNav from './BottomNav';

/**
 * TODO: enable to change breakpoints via props
 * default layout and breakpoints
 * Header ['xs', 'sm', 'md', 'lg', 'xl']
 * TemporaryDrawer "smDown"
 * permanentDrawer "mdUp"
 * BottomNav "xsDown"
 * Fav "smDown"
 *
 * from props
 */
export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  loading?: boolean;
  componentViewports?: Partial<ComponentViewports>;
  drawerWidth?: number;
  tabSticky?: boolean;
  drawerContents?: React.ReactNode;
  tabs?: React.ReactNode;
  bottomNavigation?: React.ReactNode;
  fab?: React.ReactNode;
}

export function Layout({
  children,
  title,
  tabs,
  drawerContents,
  bottomNavigation,
  fab,
  componentViewports,
  tabSticky = false,
  loading = false,
  drawerWidth = 280,
}: LayoutProps) {
  const theme = useTheme();

  const viewports = mergeViewports(componentViewports);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = React.useCallback(() => {
    setDrawerOpen(!drawerOpen);
  }, [drawerOpen]);
  const handleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawer = React.useMemo(
    () => (
      <Box
        component="nav"
        sx={{
          ...permanentDrawerStyles(viewports.permanentDrawer, drawerWidth),
          flexShrink: 0,
        }}
      >
        {viewports.swipeableDrawer !== false ? (
          <SwipeableDrawer
            sx={{
              display: viewportsToSxDisplay(viewports.swipeableDrawer),
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                paddingTop: { xs: '56px', sm: '64px' },
                backgroundImage: 'none',
              },
            }}
            variant="temporary"
            onOpen={handleDrawer(true)}
            onClose={handleDrawer(false)}
            open={drawerOpen}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <DrawerInner contents={drawerContents} title={title} />
          </SwipeableDrawer>
        ) : null}
        {viewports.permanentDrawer !== false ? (
          <Drawer
            sx={{
              display: viewportsToSxDisplay(viewports.permanentDrawer),
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                paddingTop: { xs: '56px', sm: '64px' },
              },
            }}
            variant="permanent"
            open
          >
            <DrawerInner contents={drawerContents} title={title} />
          </Drawer>
        ) : null}
      </Box>
    ),
    [drawerOpen, drawerContents, title, viewports, drawerWidth]
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        minHeight: '100vh',
      }}
    >
      {loading ? (
        <LinearProgress
          sx={{
            position: 'fixed',
            top: { xs: theme.mixins.toolbar.minHeight, sm: 64 },
            left: 0,
            width: '100%',
            zIndex: theme.zIndex.drawer + 1,
          }}
          color="secondary"
        />
      ) : null}
      <AppBar
        sx={{
          zIndex: theme.zIndex.drawer + 2,
          width: '100%',
        }}
      >
        <Header
          title={title}
          toggleDrawer={toggleDrawer}
          componentViewports={viewports}
        />
      </AppBar>
      {viewports.swipeableDrawer || viewports.permanentDrawer ? drawer : null}
      <Box
        sx={{
          ...mainStyles(viewports.bottomNav),
          flexGrow: 1,
          maxWidth: '100%',
          minWidth: 0,
          paddingTop: { xs: '56px', sm: '64px' },
        }}
      >
        {tabs ? (
          <TabContainer tabSticky={tabSticky}>{tabs}</TabContainer>
        ) : null}
        <main>{children}</main>
        <SectionDivider />
        <Section>
          <FooterMenu />
        </Section>
        <SectionDivider />
        <Section>
          <Footer />
        </Section>
      </Box>
      {viewports.fab !== false ? (
        <Box
          sx={{
            ...fabStyles(viewports.bottomNav, theme),
            display: viewportsToSxDisplay(viewports.fab),
            position: 'fixed',
            right: theme.spacing(2),
            bottom: theme.spacing(2),
            transition: theme.transitions.create('bottom'),
          }}
        >
          {fab || <Fab onClick={toggleDrawer} />}
        </Box>
      ) : null}
      {viewports.bottomNav !== false ? (
        <Box
          sx={{
            display: viewportsToSxDisplay(viewports.bottomNav),
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
          }}
        >
          {bottomNavigation || <BottomNav />}
        </Box>
      ) : null}
    </Box>
  );
}

Layout.defaultProps = {
  title: undefined,
  tabs: undefined,
  drawerContents: undefined,
  bottomNavigation: undefined,
  fab: undefined,
  componentViewports: undefined,
  tabSticky: false,
  loading: false,
  drawerWidth: 280,
};
