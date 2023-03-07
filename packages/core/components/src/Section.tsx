import * as React from 'react';
import Stack, { StackProps } from '@mui/material/Stack';
import Box, { BoxProps } from '@mui/material/Box';

export type SectionProps = BoxProps;

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ bgcolor = 'background.paper', ...props }, ref) => (
    <Box ref={ref} bgcolor={bgcolor} {...props} />
  )
);

export default Section;

/**
 * @deprecated
 */
export function SectionDivider() {
  return (
    <Box
      py={1}
      bgcolor={({ palette }) =>
        palette.mode === 'light' ? '#fafafa' : 'background.default'
      }
    />
  );
}

export type SectionWrapperProps = StackProps<React.ElementType<any>>;

export const SectionWrapper: (
  props: SectionWrapperProps
) => JSX.Element | null = React.forwardRef<any, SectionWrapperProps>(
  (
    {
      spacing = 2,
      bgcolor = ({ palette }) =>
        palette.mode === 'light' ? '#fafafa' : 'background.default',
      ...props
    },
    ref
  ) => <Stack ref={ref} spacing={spacing} bgcolor={bgcolor} {...props} />
);
