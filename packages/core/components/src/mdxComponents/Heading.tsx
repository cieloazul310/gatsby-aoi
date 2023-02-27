import * as React from 'react';
import Typography, { type TypographyProps } from '@mui/material/Typography';
import type { MDXComponents } from 'mdx/types';

export const H1: (
  props: Omit<TypographyProps<'h1'>, 'ref'>
) => JSX.Element | null = React.forwardRef<
  HTMLHeadingElement,
  TypographyProps<'h1'>
>((props, ref) => (
  <Typography
    ref={ref}
    variant="h3"
    component="h1"
    align="center"
    my={8}
    {...props}
  />
));

export const H2: (
  props: Omit<TypographyProps<'h2'>, 'ref'>
) => JSX.Element | null = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps<'h2'>, 'ref'>
>((props, ref) => (
  <Typography
    ref={ref}
    variant="h4"
    component="h2"
    color="inherit"
    mt={8}
    mb={4}
    borderBottom={1}
    borderColor="secondary.dark"
    {...props}
  />
));

export const H3: (
  props: Omit<TypographyProps<'h3'>, 'ref'>
) => JSX.Element | null = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps<'h3'>, 'ref'>
>((props, ref) => (
  <Typography
    ref={ref}
    variant="h5"
    component="h3"
    color="inherit"
    mt={8}
    mb={4}
    {...props}
  />
));

export const H4: (
  props: Omit<TypographyProps<'h4'>, 'ref'>
) => JSX.Element | null = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps<'h4'>, 'ref'>
>((props, ref) => (
  <Typography
    ref={ref}
    variant="h6"
    component="h4"
    color="inherit"
    mt={4}
    mb={2}
    {...props}
  />
));

export const H5: (
  props: Omit<TypographyProps<'h5'>, 'ref'>
) => JSX.Element | null = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps<'h5'>, 'ref'>
>((props, ref) => (
  <Typography
    ref={ref}
    variant="h6"
    component="h5"
    color="inherit"
    mt={4}
    mb={2}
    {...props}
  />
));

export const H6: (
  props: Omit<TypographyProps<'h6'>, 'ref'>
) => JSX.Element | null = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps<'h6'>, 'ref'>
>((props, ref) => (
  <Typography
    ref={ref}
    variant="body1"
    component="h6"
    color="text.secondary"
    mt={4}
    mb={2}
    {...props}
  />
));

const headings: MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
};

export default headings;
