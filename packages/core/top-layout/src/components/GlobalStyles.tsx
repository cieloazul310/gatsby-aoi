import * as React from "react";
import MuiGlobalStyles from "@mui/material/GlobalStyles";

const GlobalStyles = (
  <MuiGlobalStyles
    styles={{
      html: {
        WebkitFontSmoothing: "auto",
      },
    }}
  />
);

export default GlobalStyles;
