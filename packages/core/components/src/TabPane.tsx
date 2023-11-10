import * as React from "react";

export type TabPaneProps = {
  currentTab: number;
  index: number;
  children: React.ReactNode;
  // this is useful when using react-swipeable-views
  renderNeighbor?: boolean;
};

function TabPane({
  index,
  currentTab,
  children,
  renderNeighbor = false,
}: TabPaneProps) {
  const current = currentTab === index;
  const isNeighbor = currentTab === index - 1 || currentTab === index + 1;
  return (
    <div
      role="tabpanel"
      hidden={!current && !(renderNeighbor && isNeighbor)}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {current || (renderNeighbor && isNeighbor) ? children : null}
    </div>
  );
}

TabPane.defaultProps = {
  renderNeighbor: false,
};

export default TabPane;
