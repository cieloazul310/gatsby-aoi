import * as React from 'react';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';

export type FloationActionButtonProps = {
  onClick?: () => void;
};

function FloationActionButton({
  onClick = () => {
    // do nothing
  },
}: FloationActionButtonProps) {
  return (
    <Tooltip title="Menu" placement="top">
      <Fab onClick={onClick} color="secondary">
        <MenuIcon />
      </Fab>
    </Tooltip>
  );
}

FloationActionButton.defaultProps = {
  onClick: () => {
    // do nothing
  },
};

export default FloationActionButton;
