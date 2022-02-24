/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import MuiTable, { TableProps } from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import {
  AppLink,
  ArticleTitle,
  H3,
  H4,
  H5,
  H6,
  Hr,
  Paragraph,
  SubParagraph,
  Blockquote,
  ExternalLink,
  InlineCode,
  Ul,
  Ol,
  Li,
  Alert,
} from '@cieloazul310/gatsby-theme-aoi-components';

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

const components = {
  h2: ArticleTitle,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  a: ExternalLink,
  ul: Ul,
  ol: Ol,
  li: Li,
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  th: TableCellHead,
  td: TableCellBody,
  inlineCode: InlineCode,
  blockquote: Blockquote,
  hr: Hr,
  AppLink,
  SubParagraph,
  Alert,
};

export default components;
