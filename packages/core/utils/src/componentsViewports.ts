import * as React from "react";
import { useTheme, type Theme, type Breakpoint } from "@mui/material/styles";
import type {
  ResponsiveStyleValue,
  AllSystemCSSProperties,
  SxProps,
} from "@mui/system";

const breakpoints: Breakpoint[] = ["xs", "sm", "md", "lg", "xl"];
type ViewportUp = "xsUp" | "smUp" | "mdUp" | "lgUp" | "xlUp";
type ViewportDown = "xsDown" | "smDown" | "mdDown" | "lgDown" | "xlDown";
export type Viewport = ViewportUp | ViewportDown;
export type ViewDirection = "Up" | "Down";
export type Viewports = Viewport | boolean;

export type ComponentViewports = {
  swipeableDrawer: Exclude<Viewports, ViewportUp>;
  permanentDrawer: Exclude<Viewports, ViewportDown>;
  bottomNav: Exclude<Viewports, ViewportUp>;
  fab: Viewports;
};

export const defaultComponentViewports: ComponentViewports = {
  swipeableDrawer: "smDown",
  permanentDrawer: "mdUp",
  bottomNav: "xsDown",
  fab: "smDown",
};

function isBreakpoint(
  breakpoint: string | Breakpoint,
): breakpoint is Breakpoint {
  return (
    breakpoint === "xs" ||
    breakpoint === "sm" ||
    breakpoint === "md" ||
    breakpoint === "lg" ||
    breakpoint === "xl"
  );
}

function breakpointSlicer(viewports: Viewport): Breakpoint {
  const breakpoint = viewports.slice(0, 2);
  if (!isBreakpoint(breakpoint)) throw new Error();
  return breakpoint;
}

function isDirection(
  direction: string | ViewDirection,
): direction is ViewDirection {
  return direction === "Up" || direction === "Down";
}

function directionSlicer(viewports: Viewport): ViewDirection {
  const direction = viewports.slice(2);
  if (!isDirection(direction)) throw new Error();
  return direction;
}
/*
function isViewport(viewport: string | Viewport): viewport is Viewport {
  return (
    viewport === 'xsDown' ||
    viewport === 'xsUp' ||
    viewport === 'smDown' ||
    viewport === 'smUp' ||
    viewport === 'mdDown' ||
    viewport === 'mdUp' ||
    viewport === 'lgUp' ||
    viewport === 'lgDown' ||
    viewport === 'xlUp' ||
    viewport === 'xlDown'
  );
}
*/
export function viewportsHelper(
  componentViewPorts: Partial<ComponentViewports>,
): Partial<ComponentViewports> {
  return componentViewPorts;
}

/**
 * ex.
 * "mdUp" => "smDown"
 * "lgDown" => "xlUp"
 * false => true
 */
export function revertViewports(viewports: Viewports): Viewports {
  if (typeof viewports === "boolean") return !viewports;
  const breakpoint = breakpointSlicer(viewports);
  const direction = directionSlicer(viewports);
  const index = breakpoints.indexOf(breakpoint);
  if (direction === "Up") {
    // 'xsUp' => false
    if (index === 0) return false;
    return [breakpoints[index - 1], "Down"].join("") as ViewportDown;
  }
  // 'xlDown' => false
  if (index === breakpoints.length - 1) return false;
  return [breakpoints[index + 1], "Up"].join("") as ViewportUp;
}

/**
 * @deprecated
 */
export function mergeViewports(
  componentViewports: Partial<ComponentViewports> | undefined = undefined,
): ComponentViewports {
  return componentViewports
    ? {
        swipeableDrawer:
          componentViewports.swipeableDrawer ??
          defaultComponentViewports.swipeableDrawer,
        permanentDrawer:
          componentViewports.permanentDrawer ??
          defaultComponentViewports.permanentDrawer,
        bottomNav:
          componentViewports.bottomNav ?? defaultComponentViewports.bottomNav,
        fab: componentViewports.fab ?? defaultComponentViewports.fab,
      }
    : defaultComponentViewports;
}

export function useViewports(
  componentViewports: Partial<ComponentViewports> | undefined = undefined,
  options: Partial<{
    disablePermanentDrawer: boolean;
    disableSwipeableDrawer: boolean;
    disableFab: boolean;
    disableBottomNav: boolean;
  }> = {},
): ComponentViewports {
  return React.useMemo(() => {
    const {
      disablePermanentDrawer,
      disableSwipeableDrawer,
      disableBottomNav,
      disableFab,
    } = options;
    const permanentDrawer =
      componentViewports?.swipeableDrawer !== undefined
        ? (revertViewports(componentViewports.swipeableDrawer) as
            | ViewportUp
            | boolean)
        : undefined;

    return {
      swipeableDrawer: disableSwipeableDrawer
        ? false
        : componentViewports?.swipeableDrawer ??
          defaultComponentViewports.swipeableDrawer,
      permanentDrawer: disablePermanentDrawer
        ? false
        : permanentDrawer ?? defaultComponentViewports.permanentDrawer,
      bottomNav: disableBottomNav
        ? false
        : componentViewports?.bottomNav ?? defaultComponentViewports.bottomNav,
      fab: disableFab
        ? false
        : componentViewports?.fab ?? defaultComponentViewports.fab,
    };
  }, [componentViewports, options]);
}

/**
 * @deprecated
 * use `useSxDisplay` instead
 *
 * usage
 * <Hidden sx={{ display: viewportsToHidden(componentViewPorts) }}>
 *  {component}
 * </Hidden>
 */
export function viewportsToSxDisplay(
  viewports: Viewports,
): ResponsiveStyleValue<AllSystemCSSProperties["display"]> {
  if (viewports === true || viewports === "xsUp" || viewports === "xlDown")
    return "block";
  if (viewports === false) return "none";
  const breakpoint: Breakpoint = breakpointSlicer(viewports);
  const direction: ViewDirection = directionSlicer(viewports);
  const index = breakpoints.indexOf(breakpoint);
  if (direction === "Up") return { xs: "none", [breakpoint]: "block" };
  return { xs: "block", [breakpoints[index + 1]]: "none" };
}

export function useSxDisplay(
  viewports: Viewports,
): ResponsiveStyleValue<AllSystemCSSProperties["display"]> {
  return React.useMemo(() => {
    if (viewports === true || viewports === "xsUp" || viewports === "xlDown")
      return "block";
    if (viewports === false) return "none";
    const breakpoint: Breakpoint = breakpointSlicer(viewports);
    const direction: ViewDirection = directionSlicer(viewports);
    const index = breakpoints.indexOf(breakpoint);
    if (direction === "Up") return { xs: "none", [breakpoint]: "block" };
    return { xs: "block", [breakpoints[index + 1]]: "none" };
  }, [viewports]);
}

export function useLayoutDisplay({
  swipeableDrawer,
  permanentDrawer,
  fab,
  bottomNav,
}: ComponentViewports) {
  const swipeableDrawerDisplay = useSxDisplay(swipeableDrawer);
  const permanentDrawerDisplay = useSxDisplay(permanentDrawer);
  const fabDisplay = useSxDisplay(fab);
  const bottomNavDisplay = useSxDisplay(bottomNav);

  return {
    swipeableDrawer: swipeableDrawerDisplay,
    permanentDrawer: permanentDrawerDisplay,
    fab: fabDisplay,
    bottomNav: bottomNavDisplay,
  };
}

/**
 * usage:
 * drawer: props =>
 *  permanentDrawerStyle(viewports.permanentDrawer)(theme, drawerWidth)
 *
 */
export function contentWidthStyles(
  permanentDrawerViewports: Viewports,
  drawerWidth: number,
): SxProps {
  if (
    permanentDrawerViewports === true ||
    permanentDrawerViewports === "xlDown" ||
    permanentDrawerViewports === "xsUp"
  )
    return {
      width: `calc(100% - ${drawerWidth}px)`,
    };
  if (permanentDrawerViewports === false)
    return {
      width: "100%",
    };

  const breakpoint: Breakpoint = breakpointSlicer(permanentDrawerViewports);
  const direction =
    directionSlicer(permanentDrawerViewports) === "Up" ? "up" : "down";
  const index = breakpoints.indexOf(breakpoint);
  if (direction === "down")
    return {
      width: {
        xs: `calc(100% - ${drawerWidth}px)`,
        [breakpoints[index + 1]]: "100%",
      },
    };
  return {
    width: { xs: "100%", [breakpoint]: `calc(100% - ${drawerWidth}px)` },
  };
}

/**
 * @deprecated
 * use `usePermanentDrawerStyles` instead
 */
export function permanentDrawerStyles(
  permanentDrawerViewports: Viewports,
  drawerWidth: number,
): SxProps {
  // ex. "mdUp"
  if (
    permanentDrawerViewports === true ||
    permanentDrawerViewports === "xlDown" ||
    permanentDrawerViewports === "xsUp"
  )
    return {
      width: drawerWidth,
    };
  if (permanentDrawerViewports === false)
    return {
      width: 0,
    };

  const breakpoint = breakpointSlicer(permanentDrawerViewports);
  const direction =
    directionSlicer(permanentDrawerViewports) === "Up" ? "up" : "down";
  const index = breakpoints.indexOf(breakpoint);
  if (direction === "down")
    return { width: { xs: drawerWidth, [breakpoints[index + 1]]: 0 } };
  return {
    width: { xs: 0, [breakpoint]: drawerWidth },
  };
}

export function usePermanentDrawerStyles(
  permanentDrawerViewports: Viewports,
  drawerWidth: number,
): SxProps {
  return React.useMemo(() => {
    // ex. "mdUp"
    if (
      permanentDrawerViewports === true ||
      permanentDrawerViewports === "xlDown" ||
      permanentDrawerViewports === "xsUp"
    )
      return {
        width: drawerWidth,
      };
    if (permanentDrawerViewports === false)
      return {
        width: 0,
      };

    const breakpoint = breakpointSlicer(permanentDrawerViewports);
    const direction =
      directionSlicer(permanentDrawerViewports) === "Up" ? "up" : "down";
    const index = breakpoints.indexOf(breakpoint);
    if (direction === "down")
      return { width: { xs: drawerWidth, [breakpoints[index + 1]]: 0 } };
    return {
      width: { xs: 0, [breakpoint]: drawerWidth },
    };
  }, [drawerWidth, permanentDrawerViewports]);
}

/**
 * @deprecated
 * use `useMainStyles` instead
 */
export function mainStyles(bottomNavViewports: Viewports): SxProps {
  // ex. "xsDown"
  if (
    bottomNavViewports === true ||
    bottomNavViewports === "xlDown" ||
    bottomNavViewports === "xsUp"
  )
    return {
      paddingBottom: "56px",
    };
  if (bottomNavViewports === false) return {};

  const breakpoint = breakpointSlicer(bottomNavViewports);
  const direction =
    directionSlicer(bottomNavViewports) === "Up" ? "up" : "down";
  const index = breakpoints.indexOf(breakpoint);

  if (direction === "down")
    return {
      paddingBottom: { xs: "56px", [breakpoints[index + 1]]: 0 },
    };
  return {
    paddingBottom: { xs: 0, [breakpoint]: "56px" },
  };
}

export function useMainStyles(bottomNavViewports: Viewports): SxProps {
  return React.useMemo(() => {
    // ex. "xsDown"
    if (
      bottomNavViewports === true ||
      bottomNavViewports === "xlDown" ||
      bottomNavViewports === "xsUp"
    )
      return {
        paddingBottom: "56px",
      };
    if (bottomNavViewports === false) return {};

    const breakpoint = breakpointSlicer(bottomNavViewports);
    const direction =
      directionSlicer(bottomNavViewports) === "Up" ? "up" : "down";
    const index = breakpoints.indexOf(breakpoint);

    if (direction === "down")
      return {
        paddingBottom: { xs: "56px", [breakpoints[index + 1]]: 0 },
      };
    return {
      paddingBottom: { xs: 0, [breakpoint]: "56px" },
    };
  }, [bottomNavViewports]);
}

/**
 * @deprecated
 */
export function fabStyles(
  bottomNavViewports: Viewports,
  theme: Theme,
): SxProps {
  // ex. "xsDown"
  if (
    bottomNavViewports === true ||
    bottomNavViewports === "xlDown" ||
    bottomNavViewports === "xsUp"
  )
    return {
      bottom: `calc(${theme.spacing(2)} + 56px)`,
    };
  if (bottomNavViewports === false)
    return {
      bottom: theme.spacing(2),
    };

  const breakpoint = breakpointSlicer(bottomNavViewports);
  const direction =
    directionSlicer(bottomNavViewports) === "Up" ? "up" : "down";
  const index = breakpoints.indexOf(breakpoint);

  if (direction === "down")
    return {
      bottom: {
        xs: `calc(${theme.spacing(2)} + 56px)`,
        [breakpoints[index + 1]]: theme.spacing(2),
      },
    };
  return {
    bottom: {
      xs: theme.spacing(2),
      [breakpoint]: `calc(${theme.spacing(2)} + 56px)`,
    },
  };
}

export function useFabStyles(bottomNavViewports: Viewports): SxProps {
  const { spacing } = useTheme();
  return React.useMemo(() => {
    // ex. "xsDown"
    if (
      bottomNavViewports === true ||
      bottomNavViewports === "xlDown" ||
      bottomNavViewports === "xsUp"
    )
      return {
        bottom: `calc(${spacing(2)} + 56px)`,
      };
    if (bottomNavViewports === false)
      return {
        bottom: spacing(2),
      };

    const breakpoint = breakpointSlicer(bottomNavViewports);
    const direction =
      directionSlicer(bottomNavViewports) === "Up" ? "up" : "down";
    const index = breakpoints.indexOf(breakpoint);

    if (direction === "down")
      return {
        bottom: {
          xs: `calc(${spacing(2)} + 56px)`,
          [breakpoints[index + 1]]: spacing(2),
        },
      };
    return {
      bottom: {
        xs: spacing(2),
        [breakpoint]: `calc(${spacing(2)} + 56px)`,
      },
    };
  }, [bottomNavViewports, spacing]);
}

/**
 * pernamentDrawer
 * smUp => 'none'
 * mdUp => { xs: 'none', sm: 'block', md: 'none' }
 * lgUp => { xs: 'none', sm: 'block', lg: 'none' }
 * xlUp => { xs: 'none', sm: 'block', xl: 'none' }
 */
export function useHeaderMenuButtonDisplay({
  swipeableDrawer,
  permanentDrawer,
}: Pick<
  ComponentViewports,
  "swipeableDrawer" | "permanentDrawer"
>): ResponsiveStyleValue<AllSystemCSSProperties["display"]> {
  const defaultDisplay = { xs: "none", sm: "block" };
  return React.useMemo(() => {
    if (swipeableDrawer === false) return "none";
    if (permanentDrawer === true) return "none";
    if (permanentDrawer === "xsUp" || permanentDrawer === "smUp") return "none";
    if (permanentDrawer === false) return defaultDisplay;
    const breakpoint = breakpointSlicer(permanentDrawer);
    return { ...defaultDisplay, [breakpoint]: "none" };
  }, [swipeableDrawer, permanentDrawer]);
}
