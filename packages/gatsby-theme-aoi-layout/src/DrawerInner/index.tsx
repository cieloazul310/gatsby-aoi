import * as React from 'react';
import Divider from '@mui/material/Divider';
// Drawer Contents
import Contents from './Contents';
import DrawerSharer from './DrawerSharer';
import StateHandler from './StateHandler';
import DrawerFooter from './DrawerFooter';

interface Props {
  contents?: React.ReactNode;
  title?: string;
}

function DrawerInner({ contents, title }: Props) {
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
