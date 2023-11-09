import * as React from "react";
import Grid from "@mui/material/Grid";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItemAppLink } from "@cieloazul310/gatsby-theme-aoi-components";
import type { Menu } from "../menu";

export type FooterMenuItemProps = Menu;

function FooterMenuItem({ title, path, icon }: FooterMenuItemProps) {
  return (
    <Grid item xs={12} sm={6} md={3} xl={2}>
      <ListItemAppLink href={path}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemAppLink>
    </Grid>
  );
}

export default FooterMenuItem;
