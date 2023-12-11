import * as React from "react";
import Typography, { type TypographyProps } from "@mui/material/Typography";
import MuiAlert, { type AlertProps } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export const SubParagraph: (
  props: Omit<TypographyProps<"p">, "ref">,
) => React.ReactNode = React.forwardRef<
  HTMLParagraphElement,
  TypographyProps<"p">
>((props, ref) => (
  <Typography ref={ref} variant="body2" paragraph lineHeight={1.8} {...props} />
));

export const Alert: (props: Omit<AlertProps, "ref">) => React.ReactNode =
  React.forwardRef<HTMLDivElement, AlertProps>(
    ({ children, title, ...props }, ref) => (
      <MuiAlert ref={ref} {...props} sx={{ ...props.sx, my: 4 }}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {children}
      </MuiAlert>
    ),
  );
