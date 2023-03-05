import * as React from 'react';
import Box from '@mui/material/Box';

export type SectionProps = {
  children: React.ReactNode;
};

function Section({ children }: SectionProps) {
  return <Box bgcolor="background.paper">{children}</Box>;
}

export default Section;

export function SectionDivider() {
  return (
    <Box
      py={1}
      bgcolor={({ palette }) =>
        palette.mode === 'light' ? '#fafafa' : 'background.default'
      }
    />
  );
}
