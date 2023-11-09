import * as React from "react";
import Typography from "@mui/material/Typography";

export type HeaderTitleProps = React.PropsWithChildren;

function HeaderTitle({ children }: HeaderTitleProps) {
  return (
    <Typography
      sx={{
        flexGrow: 1,
        py: 0,
        px: 1,
        lineHeight: 1.2,
        display: "flex",
        justifyContent: { xs: "center", md: "start" },
      }}
      variant="h6"
      component="h1"
      color="inherit"
      fontSize={{ xs: "body1.fontSize", sm: "h6.fontSize" }}
    >
      {children}
    </Typography>
  );
}

HeaderTitle.defaultProps = {
  title: undefined,
};

export default HeaderTitle;
