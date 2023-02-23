import * as React from 'react';
import Divider from '@mui/material/Divider';
// Drawer Contents
import Contents from './Contents';
import DrawerSharer from './DrawerSharer';
import StateHandler from './StateHandler';
import DrawerFooter from './DrawerFooter';

type DrawerInnerProps = {
  contents?: React.ReactNode;
  title?: string;
};

function DrawerInner({ contents, title }: DrawerInnerProps) {
  return (
    <div>
      {contents}
      {contents ? <Divider /> : null}
      <Contents />
      <Divider />
      <StateHandler />
      <Divider />
      <DrawerSharer title={title} />
      <Divider />
      <DrawerFooter />
    </div>
  );
}

DrawerInner.defaultProps = {
  contents: undefined,
  title: undefined,
};

export default DrawerInner;
