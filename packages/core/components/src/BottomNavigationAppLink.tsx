import * as React from "react";
import BottomNavigationAction, {
  type BottomNavigationActionProps,
} from "@mui/material/BottomNavigationAction";
import GatsbyLinkComposed, {
  type GatsbyLinkComposedProps,
} from "./mdxComponents/GatsbyLinkComposed";

export type BottomNavigationAppLinkProps<
  T extends object = Record<string, unknown>,
> = Omit<GatsbyLinkComposedProps<T>, "to"> &
  BottomNavigationActionProps & {
    href: string;
  };

const BottomNavigationAppLink = React.forwardRef<
  HTMLButtonElement,
  BottomNavigationAppLinkProps
>(({ href, ...props }, ref) => (
  <BottomNavigationAction
    ref={ref}
    component={GatsbyLinkComposed}
    to={href}
    {...props}
  />
));

export default BottomNavigationAppLink;
