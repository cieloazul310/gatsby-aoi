import * as React from "react";
import Typography, { type TypographyProps } from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import Divider, { DividerProps } from "@mui/material/Divider";
import { alpha } from "@mui/material/styles";
import type { MDXComponents } from "mdx/types";

export const Paragraph: (
  props: Omit<TypographyProps<"p">, "ref">,
) => React.ReactNode = React.forwardRef<
  HTMLParagraphElement,
  TypographyProps<"p">
>((props, ref) => (
  <Typography
    ref={ref}
    variant="inherit"
    paragraph
    lineHeight={1.8}
    {...props}
  />
));

export type BlockquoteProps = Omit<
  TypographyProps<
    "blockquote",
    {
      url?: string;
      title?: string;
    }
  >,
  "ref"
>;

export const Blockquote: (props: BlockquoteProps) => React.ReactNode =
  React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
    ({ children, title, url, ...props }, ref) => (
      <Typography
        ref={ref}
        variant="inherit"
        component="blockquote"
        py={4}
        px={2}
        my={4}
        borderRadius={1}
        bgcolor={({ palette }) =>
          alpha(palette.primary.main, palette.action.hoverOpacity)
        }
        sx={{
          // equivalent to first-child
          "& > *:not(:is(*:not(style) ~ *))": {
            mt: 0,
          },
          "& > p:last-of-type": {
            mb: 0,
          },
        }}
        {...props}
      >
        {children}
        {title ? (
          <Typography textAlign="right" variant="body2">
            {url ? (
              <MuiLink
                color="inherit"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </MuiLink>
            ) : (
              title
            )}
          </Typography>
        ) : null}
      </Typography>
    ),
  );

export const Hr: (props: Omit<DividerProps, "ref">) => React.ReactNode =
  React.forwardRef<HTMLHRElement, DividerProps>((props, ref) => (
    <Divider ref={ref} sx={{ ...props.sx, my: 8 }} {...props} />
  ));

export const Code: (
  props: Omit<TypographyProps<"code">, "ref">,
) => React.ReactNode = React.forwardRef<HTMLElement, TypographyProps<"code">>(
  (props, ref) => (
    <Typography
      ref={ref}
      variant="body2"
      component="code"
      fontFamily="'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono', 'monospace'"
      px={0.5}
      borderRadius={1}
      fontSize=".875em"
      bgcolor={({ palette }) =>
        alpha(palette.secondary.main, palette.action.selectedOpacity)
      }
      sx={{ "pre > &": { background: "none", color: "inherit" } }}
      {...props}
    />
  ),
);

export const CodeBlock: (
  props: Omit<TypographyProps<"pre">, "ref">,
) => React.ReactNode = React.forwardRef<HTMLPreElement, TypographyProps<"pre">>(
  (props, ref) => (
    <Typography
      ref={ref}
      variant="body2"
      component="pre"
      display="block"
      whiteSpace="pre"
      fontFamily="'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono', 'monospace'"
      py={4}
      px={2}
      my={4}
      borderRadius={1}
      fontSize=".875em"
      bgcolor={({ palette }) =>
        alpha(palette.primary.main, palette.action.hoverOpacity)
      }
      sx={{ overflowX: "auto" }}
      {...props}
    />
  ),
);

const paragraph: MDXComponents = {
  p: Paragraph,
  blockquote: Blockquote,
  hr: Hr,
  code: Code,
  pre: CodeBlock,
};

export default paragraph;
