import * as React from 'react';
import Button, { type ButtonProps } from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GatsbyLinkComposed, {
  type GatsbyLinkComposedProps,
} from './mdxComponents/GatsbyLinkComposed';

export type AppLinkButtonProps<T extends object = Record<string, unknown>> =
  Omit<GatsbyLinkComposedProps<T>, 'to'> & ButtonProps;

const AppLinkButton: (props: AppLinkButtonProps) => JSX.Element | null =
  React.forwardRef<HTMLButtonElement, AppLinkButtonProps>(
    ({ href, ...props }, ref) => {
      if (href && /^\/(?!\/)/.test(href)) {
        return (
          <Button
            ref={ref}
            component={GatsbyLinkComposed}
            to={href}
            {...props}
          />
        );
      }
      return (
        <Button
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNewIcon />}
          {...props}
        />
      );
    }
  );

export default AppLinkButton;
