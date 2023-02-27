import * as React from 'react';
import BottomNavigationAction, {
  type BottomNavigationActionProps,
} from '@mui/material/BottomNavigationAction';
import GatsbyLinkComposed, {
  type GatsbyLinkComposedProps,
} from './mdxComponents/GatsbyLinkComposed';

export type BottomNavigationAppLinkProps<
  T extends object = Record<string, unknown>
> = GatsbyLinkComposedProps<T> & BottomNavigationActionProps;

const BottomNavigationAppLink: (
  props: BottomNavigationAppLinkProps
) => JSX.Element | null = React.forwardRef<
  HTMLButtonElement,
  BottomNavigationAppLinkProps
>((props, ref) => (
  <BottomNavigationAction ref={ref} component={GatsbyLinkComposed} {...props} />
));

export default BottomNavigationAppLink;
