import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import {
  ListItemAppLink,
  type ListItemAppLinkProps,
} from "@cieloazul310/gatsby-theme-aoi-components";

type DrawerPageNavigationProps = {
  title?: string;
  left?: {
    href: string;
    title: string;
    secondaryText?: string;
  } | null;
  right?: {
    href: string;
    title: string;
    secondaryText?: string;
  } | null;
  linkProps?: Partial<Omit<ListItemAppLinkProps, "href" | "button">>;
};

function DrawerPageNavigation({
  title,
  left,
  right,
  linkProps,
}: DrawerPageNavigationProps) {
  return (
    <List subheader={<ListSubheader>{title ?? "Navigation"}</ListSubheader>}>
      {left && (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ListItemAppLink href={left.href} {...linkProps}>
          <ListItemIcon>
            <ArrowBackIcon />
          </ListItemIcon>
          <ListItemText
            primary={left.title}
            secondary={left.secondaryText ?? "Newer post"}
          />
        </ListItemAppLink>
      )}
      {right && (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ListItemAppLink href={right.href} {...linkProps}>
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
          <ListItemText
            primary={right.title}
            secondary={right.secondaryText ?? "Older post"}
          />
        </ListItemAppLink>
      )}
    </List>
  );
}

DrawerPageNavigation.defaultProps = {
  title: undefined,
  left: undefined,
  right: undefined,
  linkProps: undefined,
};

export default DrawerPageNavigation;
