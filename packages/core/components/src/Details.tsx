import * as React from "react";
import Box, { type BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { alpha } from "@mui/material/styles";

export type DetailsProps = BoxProps &
  React.PropsWithChildren<{
    summary: React.ReactNode;
    url?: string;
    title?: string;
  }>;

function Details({ children, summary, url, title, ...props }: DetailsProps) {
  return (
    <Box
      component="details"
      {...props}
      sx={{
        ...props.sx,
        my: 4,
        borderRadius: 1,
        bgcolor: ({ palette }) =>
          alpha(palette.primary.main, palette.action.selectedOpacity),
      }}
    >
      <Typography
        component="summary"
        py={2}
        px={2}
        color={({ palette }) =>
          palette.mode === "light" ? "primary.dark" : "primary.light"
        }
        fontWeight="bold"
        bgcolor={({ palette }) =>
          alpha(palette.primary.main, palette.action.selectedOpacity)
        }
      >
        {summary}
      </Typography>
      <Box
        py={2}
        px={2}
        sx={{
          maxHeight: "4rem",
          overflowY: "auto",
          transition: ({ transitions }) => transitions.create("max-height"),
          "details[open] > &": {
            maxHeight: "50vh",
          },
          // equivalent to first-child
          "& > *:not(:is(*:not(style) ~ *))": {
            mt: 0,
          },
          "& > p:last-of-type": {
            mb: 0,
          },
        }}
      >
        {children}
        {title && (
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
        )}
      </Box>
    </Box>
  );
}

Details.defaultProps = {
  url: undefined,
  title: undefined,
};

export default Details;
