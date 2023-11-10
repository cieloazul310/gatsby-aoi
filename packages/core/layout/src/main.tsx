import * as React from "react";
import Box from "@mui/material/Box";
import { type AppBarProps } from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import LinearProgress from "@mui/material/LinearProgress";
import {
  SectionWrapper,
  type SectionWrapperProps,
} from "@cieloazul310/gatsby-theme-aoi-components";
import {
  useMainStyles,
  usePermanentDrawerStyles,
  useFabStyles,
  useLayoutDisplay,
  useViewports,
  type ComponentViewports,
} from "@cieloazul310/gatsby-theme-aoi-utils";

// layout components are enable to override from your project
// https://www.gatsbyjs.org/docs/themes/shadowing/
import Header from "./Header";
import TabContainer from "./TabContainer";
import DrawerInner from "./DrawerInner";
import FooterMenu from "./FooterMenu";
import Footer from "./Footer";
import Fab from "./Fab";
import BottomNav from "./BottomNav";

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
export type LayoutProps<T extends object = Record<string, unknown>> = {
  children: React.ReactNode;
  title?: string;
  tabs?: React.ReactNode;
  drawerContents?: React.ReactNode;
  bottomNavigation?: React.ReactNode;
  fab?: React.ReactNode;
  componentViewports?: Partial<ComponentViewports>;
  loading?: boolean;
  /** @experimental */
  appBarPosition?: AppBarProps["position"];
  /** @experimental */
  disableSwipeableDrawer?: boolean;
  /** @experimental */
  disablePermanentDrawer?: boolean;
  /** @experimental */
  disableBottomNav?: boolean;
  /** @experimental */
  disableFab?: boolean;
  wrapperComponent?: SectionWrapperProps["component"];
  drawerWidth?: number;
  contentSpacing?: SectionWrapperProps["spacing"];
  tabSticky?: boolean;
} & T;

function Layout<T extends object = Record<string, unknown>>({
  children,
  title,
  tabs,
  drawerContents,
  bottomNavigation,
  fab,
  componentViewports,
  loading = false,
  appBarPosition = "fixed",
  wrapperComponent = "article",
  drawerWidth = 280,
  contentSpacing = 2,
  tabSticky = false,
  disableSwipeableDrawer = false,
  disablePermanentDrawer = false,
  disableBottomNav = false,
  disableFab = false,
  ...props
}: LayoutProps<T>) {
  const viewports = useViewports(componentViewports, {
    disableSwipeableDrawer,
    disablePermanentDrawer,
    disableBottomNav,
    disableFab,
  });
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const appBarFixed = appBarPosition === "fixed";
  const paddingTop = appBarFixed ? { xs: "56px", sm: "64px" } : undefined;
  const permanentDrawerStyles = usePermanentDrawerStyles(
    viewports.permanentDrawer,
    drawerWidth,
  );
  const mainStyles = useMainStyles(viewports.bottomNav);
  const fabStyles = useFabStyles(viewports.bottomNav);
  const display = useLayoutDisplay(viewports);

  const toggleDrawer = React.useCallback(() => {
    setDrawerOpen(!drawerOpen);
  }, [drawerOpen]);
  const handleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawer = React.useMemo(() => {
    if (!viewports.swipeableDrawer && !viewports.permanentDrawer) return null;
    return (
      <Box
        component="nav"
        sx={{
          ...permanentDrawerStyles,
          flexShrink: 0,
        }}
      >
        {viewports.swipeableDrawer !== false ? (
          <SwipeableDrawer
            sx={{
              display: display.swipeableDrawer,
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundImage: "none",
                paddingTop,
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
            <DrawerInner
              contents={drawerContents}
              title={title}
              appBarFixed={appBarFixed}
              {...props}
            />
          </SwipeableDrawer>
        ) : null}
        {viewports.permanentDrawer !== false ? (
          <Drawer
            sx={{
              display: display.permanentDrawer,
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                paddingTop,
              },
            }}
            variant="permanent"
            open
          >
            <DrawerInner
              contents={drawerContents}
              title={title}
              appBarFixed={appBarFixed}
              {...props}
            />
          </Drawer>
        ) : null}
      </Box>
    );
  }, [
    drawerOpen,
    drawerContents,
    title,
    viewports,
    permanentDrawerStyles,
    drawerWidth,
    appBarFixed,
    paddingTop,
    props,
  ]);

  const layoutTabs = React.useMemo(() => {
    if (!tabs) return null;
    return (
      <TabContainer
        tabSticky={tabSticky}
        appBarPosition={appBarPosition}
        {...props}
      >
        {tabs}
      </TabContainer>
    );
  }, [tabs, tabSticky, appBarPosition, props]);

  const layoutFab = React.useMemo(() => {
    if (viewports.fab === false) return null;
    return (
      <Box
        sx={{
          ...fabStyles,
          zIndex: "fab",
          display: display.fab,
          position: "fixed",
          right: ({ spacing }) => spacing(2),
          transition: ({ transitions }) => transitions.create("bottom"),
        }}
      >
        {fab || <Fab onClick={toggleDrawer} {...props} />}
      </Box>
    );
  }, [viewports, fabStyles, fab, display, toggleDrawer, props]);

  const layoutBottomNav = React.useMemo(() => {
    if (viewports.bottomNav === false) return null;
    return (
      <Box
        sx={{
          display: display.bottomNav,
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          zIndex: "appBar",
        }}
      >
        {bottomNavigation || <BottomNav {...props} />}
      </Box>
    );
  }, [viewports, display, bottomNavigation, props]);

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        minHeight: "100vh",
      }}
    >
      {loading ? (
        <LinearProgress
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: ({ zIndex }) => zIndex.drawer + 3,
          }}
          color="secondary"
        />
      ) : null}
      {drawer}
      <Box
        sx={{
          ...mainStyles,
          paddingTop,
          flexGrow: 1,
          maxWidth: "100%",
          minWidth: 0,
        }}
      >
        <Header
          title={title}
          appBarPosition={appBarPosition}
          toggleDrawer={toggleDrawer}
          componentViewports={viewports}
          {...props}
        />
        {layoutTabs}
        <SectionWrapper component={wrapperComponent} spacing={contentSpacing}>
          {children}
          <FooterMenu {...props} />
          <Footer {...props} />
        </SectionWrapper>
      </Box>
      {layoutFab}
      {layoutBottomNav}
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
  appBarPosition: "fixed",
  wrapperComponent: "article",
  contentSpacing: 2,
  tabSticky: false,
  loading: false,
  disableSwipeableDrawer: false,
  disablePermanentDrawer: false,
  disableBottomNav: false,
  disableFab: false,
  drawerWidth: 280,
};

export default Layout;
