/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import MuiLink, { LinkProps } from '@mui/material/Link';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import MuiTable, { TableProps } from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Divider from '@mui/material/Divider';
import {
  AppLink,
  ArticleTitle,
  H3 as AoiH3,
  H4 as AoiH4,
  Paragraph,
} from '@cieloazul310/gatsby-theme-aoi';

function H2({ children }: TypographyProps) {
  return <ArticleTitle>{children}</ArticleTitle>;
}

function H3({ children }: Omit<TypographyProps, 'ref'>) {
  return (
    <Box pt={4} pb={2}>
      <AoiH3>{children}</AoiH3>
    </Box>
  );
}

function H4({ children }: Omit<TypographyProps, 'ref'>) {
  return (
    <Box pt={2} pb={1}>
      <AoiH4>{children}</AoiH4>
    </Box>
  );
}

function H5(props: Omit<TypographyProps, 'ref'>) {
  return (
    <Box pt={2} pb={1}>
      <Typography
        variant="body1"
        component="h5"
        color="text.secondary"
        fontWeight="bold"
        gutterBottom
        {...props}
      />
    </Box>
  );
}

function H6(props: Omit<TypographyProps, 'ref'>) {
  return (
    <Typography
      variant="body2"
      component="h6"
      color="text.secondary"
      fontWeight="bold"
      gutterBottom
      {...props}
    />
  );
}

function Link(props: LinkProps) {
  return <MuiLink color="secondary" {...props} />;
}

function Ul(props: Omit<TypographyProps, 'ref'>) {
  return (
    <Box py={2} m={0}>
      <Typography component="ul" {...props} />
    </Box>
  );
}

function Ol(props: Omit<TypographyProps, 'ref'>) {
  return (
    <Box py={2} m={0}>
      <Typography component="ol" {...props} />
    </Box>
  );
}

function Li(props: Omit<TypographyProps, 'ref'>) {
  return <Typography variant="body1" component="li" {...props} />;
}

function Table(props: TableProps) {
  return (
    <Box py={2}>
      <TableContainer>
        <MuiTable {...props} />
      </TableContainer>
    </Box>
  );
}

const components = {
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  a: Link,
  ul: Ul,
  ol: Ol,
  li: Li,
  table: Table,
  tr: TableRow,
  th: TableCell,
  td: TableCell,
  hr: Divider,
  AppLink,
};

export default components;
