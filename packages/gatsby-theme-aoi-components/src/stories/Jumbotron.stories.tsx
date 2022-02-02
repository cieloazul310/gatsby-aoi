import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Jumbotron from '../Jumbotron';

export default {
  title: 'Jumbotron',
  component: Jumbotron,
};

export function withTitle() {
  return <Jumbotron title="With Title" />;
}

export function withChildren() {
  return (
    <Jumbotron>
      <Typography variant="h4" component="h1">
        Title
      </Typography>
      <Typography variant="h6" component="small">
        Sub Title
      </Typography>
    </Jumbotron>
  );
}

export function withFlexBox() {
  return (
    <Jumbotron maxWidth="md">
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: '#aaa',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            maxWidth: '50%',
            bgcolor: '#ccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: 200, height: 200, bgcolor: '#fff' }} />
        </Box>
        <Box sx={{ bgcolor: '#777', flexGrow: 1, pl: 1, py: 2 }}>
          <Typography variant="h6" component="h1">
            スピッツメンバーと漫遊記・2022新春 田村明浩編
          </Typography>
        </Box>
      </Box>
    </Jumbotron>
  );
}

export function bgcolor() {
  return <Jumbotron title="bgcolor" bgcolor="#f71" />;
}
