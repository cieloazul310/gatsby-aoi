import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton, {
  type ListItemButtonProps,
} from "@mui/material/ListItemButton";
import LinkIcon from "@mui/icons-material/Link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import MaiOutlineIcon from "@mui/icons-material/MailOutline";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useLinkType } from "@cieloazul310/gatsby-theme-aoi-utils";
import GatsbyLinkComposed, {
  type GatsbyLinkComposedProps,
} from "./mdxComponents/GatsbyLinkComposed";

export type ListItemAppLinkProps<
  TState extends object = Record<string, unknown>,
> = Omit<GatsbyLinkComposedProps<TState>, "to"> &
  Omit<
    ListItemButtonProps<
      any,
      {
        href: string;
      }
    >,
    "ref"
  >;

export const ListItemAppLink: (
  props: Omit<ListItemAppLinkProps, "ref">,
) => React.ReactNode = React.forwardRef<
  HTMLAnchorElement,
  ListItemAppLinkProps
>(({ href, download, ...props }, ref) => {
  const linkType = useLinkType(href);
  const linkIcon = React.useMemo(() => {
    if (download) return <FileDownloadIcon fontSize="inherit" />;
    if (linkType === "external") return <OpenInNewIcon fontSize="inherit" />;
    if (linkType === "mail") return <MaiOutlineIcon fontSize="inherit" />;
    if (linkType === "section") return <LinkIcon fontSize="inherit" />;
    return null;
  }, [linkType, download]);
  const button = React.useMemo(() => {
    if (href && linkType === "internal") {
      return (
        <ListItemButton
          ref={ref}
          component={GatsbyLinkComposed}
          to={href}
          {...props}
        />
      );
    }
    return (
      <ListItemButton
        ref={ref}
        component="a"
        href={href}
        target={linkType === "external" ? "_blank" : undefined}
        rel={linkType === "external" ? "noopener noreferrer" : undefined}
        {...props}
      />
    );
  }, [href, ref, props]);

  return (
    <ListItem disablePadding secondaryAction={linkIcon}>
      {button}
    </ListItem>
  );
});

export default ListItemAppLink;
