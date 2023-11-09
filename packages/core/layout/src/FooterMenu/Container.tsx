import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export type FooterMenuContainerProps = React.PropsWithChildren;

function FooterMenuContainer({ children }: FooterMenuContainerProps) {
  return (
    <Container maxWidth="md" disableGutters>
      <Grid container alignItems="center">
        {children}
      </Grid>
    </Container>
  );
}

export default FooterMenuContainer;
