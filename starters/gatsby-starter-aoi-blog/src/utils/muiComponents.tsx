/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography, { TypographyProps } from '@mui/material/Typography';
import MuiLink, { LinkProps } from '@mui/material/Link';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import MuiTable, { TableProps } from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import MuiDivider from '@mui/material/Divider';
import { StaticImage } from 'gatsby-plugin-image';
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
  return (
    <MuiLink
      color="secondary"
      target="_blank"
      rel="noopener noreferrer"
      underline="hover"
      {...props}
    />
  );
}

function Code({ children, className }: Omit<TypographyProps, 'ref'>) {
  return (
    <Typography
      className={className ?? undefined}
      variant="body2"
      component="code"
      fontFamily="monospace"
      px={{ xs: 1, sm: 2 }}
      py={1}
      borderRadius={1}
      bgcolor="divider"
      display="block"
    >
      {children}
    </Typography>
  );
}

function InlineCode({ children }: Omit<TypographyProps, 'ref'>) {
  return (
    <Typography
      variant="body2"
      component="code"
      fontFamily="monospace"
      px={0.5}
      borderRadius={1}
      bgcolor="divider"
    >
      {children}
    </Typography>
  );
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

function Divider() {
  return <MuiDivider sx={{ pt: 4 }} />;
}

function Table({ children }: TableProps) {
  return (
    <Box py={2}>
      <TableContainer component={Paper}>
        <MuiTable>{children}</MuiTable>
      </TableContainer>
    </Box>
  );
}

function TableCellHead({ children, align }: TableCellProps) {
  return (
    <TableCell component="th" align={align ?? undefined}>
      {children}
    </TableCell>
  );
}

function TableCellBody({ children, align }: TableCellProps) {
  return (
    <TableCell component="td" align={align ?? undefined}>
      {children}
    </TableCell>
  );
}

function Blockquote({ children }: Omit<TypographyProps, 'ref'>) {
  return (
    <Typography
      component="blockquote"
      sx={{
        borderLeft: 2,
        borderColor: 'text.secondary',
        py: 2,
        px: 2,
      }}
    >
      {children}
    </Typography>
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
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  th: TableCellHead,
  td: TableCellBody,
  code: Code,
  inlineCode: InlineCode,
  blockquote: Blockquote,
  hr: Divider,
  AppLink,
};

export default components;
