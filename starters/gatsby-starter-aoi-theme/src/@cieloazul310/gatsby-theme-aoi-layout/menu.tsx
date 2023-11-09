import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HiveIcon from "@mui/icons-material/Hive";
import SubjectIcon from "@mui/icons-material/Subject";
import WebhookIcon from "@mui/icons-material/Webhook";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import TableChartIcon from "@mui/icons-material/TableChart";
import WidthFullIcon from "@mui/icons-material/WidthFull";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

export type Menu = {
  title: string;
  path: string;
  icon: JSX.Element;
};

const menu: Menu[] = [
  { title: "Top", path: "/", icon: <HomeIcon /> },
  { title: "Components", path: "/components/", icon: <HiveIcon /> },
  { title: "MDX Components", path: "/mdx-components/", icon: <SubjectIcon /> },
  { title: "Hooks", path: "/hooks/", icon: <WebhookIcon /> },
  { title: "Layout", path: "/layout/", icon: <ViewComfyIcon /> },
  { title: "Tab Layout", path: "/tab-layout/", icon: <TableChartIcon /> },
  {
    title: "Full Width Layout",
    path: "/full-width-layout/",
    icon: <WidthFullIcon />,
  },
  {
    title: "Tips",
    path: "/tips/",
    icon: <TipsAndUpdatesIcon />,
  },
];

export default menu;
