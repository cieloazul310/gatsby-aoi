import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import MuiTable, { type TableProps } from "@mui/material/Table";
import MuiTableHead, { type TableHeadProps } from "@mui/material/TableHead";
import MuiTableBody, { type TableBodyProps } from "@mui/material/TableBody";
import MuiTableRow, { type TableRowProps } from "@mui/material/TableRow";
import MuiTableCell, { type TableCellProps } from "@mui/material/TableCell";
import type { MDXComponents } from "mdx/types";

export const Table: (props: Omit<TableProps, "ref">) => React.ReactNode =
  React.forwardRef<HTMLTableElement, TableProps>(
    ({ children, ...props }, ref) => (
      <Box component={Paper} elevation={0} variant="outlined" my={4}>
        <TableContainer sx={{ maxHeight: "calc(100vh - 100px)" }}>
          <MuiTable ref={ref} stickyHeader {...props}>
            {children}
          </MuiTable>
        </TableContainer>
      </Box>
    ),
  );

export const THead: (props: Omit<TableHeadProps, "ref">) => React.ReactNode =
  React.forwardRef<HTMLTableSectionElement, TableHeadProps>((props, ref) => (
    <MuiTableHead ref={ref} {...props} />
  ));

export const TBody: (props: Omit<TableBodyProps, "ref">) => React.ReactNode =
  React.forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => (
    <MuiTableBody ref={ref} {...props} />
  ));

export const Tr: (props: Omit<TableRowProps, "ref">) => React.ReactNode =
  React.forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => (
    <MuiTableRow ref={ref} {...props} />
  ));

type TdProps = Omit<TableCellProps, "align"> & {
  // eslint-disable-next-line react/require-default-props
  align?: TableCellProps["align"] | "char";
};

function isTextAlign(
  align: TdProps["align"],
): align is "center" | "left" | "right" {
  return align === "center" || align === "left" || align === "right";
}

export const Td: (props: Omit<TdProps, "ref">) => React.ReactNode =
  React.forwardRef<HTMLTableCellElement, TdProps>(
    ({ align, ...props }, ref) => {
      const textAlign = isTextAlign(align) ? align : undefined;
      return <MuiTableCell ref={ref} align={textAlign} {...props} />;
    },
  );

const tables: MDXComponents = {
  table: Table,
  thead: THead,
  tbody: TBody,
  tr: Tr,
  th: Td,
  td: Td,
};

export default tables;
