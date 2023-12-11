import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
// Drawer Contents
import Contents from "./Contents";
import DrawerSharer from "./DrawerSharer";
import StateHandler from "./StateHandler";
import DrawerFooter from "./DrawerFooter";

export type DrawerInnerProps = {
  contents?: React.ReactNode;
  title?: string;
  appBarFixed?: boolean;
};

function DrawerInner({
  contents,
  title,
  appBarFixed,
  ...props
}: DrawerInnerProps) {
  return (
    <>
      {!appBarFixed && <Toolbar />}
      <Divider />
      {contents}
      {contents && <Divider />}
      <Contents {...props} />
      <Divider />
      <StateHandler {...props} />
      <Divider />
      <DrawerSharer title={title} {...props} />
      <Divider />
      <DrawerFooter {...props} />
    </>
  );
}

DrawerInner.defaultProps = {
  contents: undefined,
  title: undefined,
  appBarFixed: undefined,
};

export default DrawerInner;
