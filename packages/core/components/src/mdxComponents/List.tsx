import * as React from "react";
import Typography, { type TypographyProps } from "@mui/material/Typography";
import type { MDXComponents } from "mdx/types";

export const Ul: (
  props: Omit<TypographyProps<"ul">, "ref">,
) => React.ReactNode = React.forwardRef<
  HTMLUListElement,
  TypographyProps<"ul">
>((props, ref) => (
  <Typography
    ref={ref}
    component="ul"
    my={4}
    mx={0}
    variant="inherit"
    sx={{
      "li > &": {
        my: 0,
      },
    }}
    {...props}
  />
));

export const Ol: (
  props: Omit<TypographyProps<"ol">, "ref">,
) => React.ReactNode = React.forwardRef<
  HTMLOListElement,
  TypographyProps<"ol">
>((props, ref) => (
  <Typography
    ref={ref}
    component="ol"
    my={4}
    mx={0}
    variant="inherit"
    sx={{
      "li > &": {
        my: 0,
      },
    }}
    {...props}
  />
));

export const Li: (
  props: Omit<TypographyProps<"li">, "ref">,
) => React.ReactNode = React.forwardRef<HTMLLIElement, TypographyProps<"li">>(
  (props, ref) => (
    <Typography
      ref={ref}
      component="li"
      variant="inherit"
      lineHeight={1.8}
      {...props}
    />
  ),
);

const listComponents: MDXComponents = {
  ul: Ul,
  ol: Ol,
  li: Li,
};

export default listComponents;
