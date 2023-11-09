import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";

export type BottomNavMenuItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
};

const bottomNavMenu: BottomNavMenuItem[] = [
  { title: "Top", path: "/", icon: <HomeIcon /> },
  { title: "Page 2", path: "/page-2/", icon: <SportsHandballIcon /> },
];

export default bottomNavMenu;
