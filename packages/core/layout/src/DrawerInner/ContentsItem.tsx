import * as React from "react";
import { withPrefix } from "gatsby";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItemAppLink } from "@cieloazul310/gatsby-theme-aoi-components";

import { Menu } from "../menu";

export type ContentsItemProps = Menu & {
  currentPathname: string;
};

function ContentsItem({
  title,
  path,
  icon,
  currentPathname,
}: ContentsItemProps) {
  return (
    <ListItemAppLink
      href={path}
      selected={currentPathname === withPrefix(path)}
      role="menuitem"
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItemAppLink>
  );
}

export default ContentsItem;
