// import * as React from 'react';
import {
  AppLink,
  H3,
  H4,
  H5,
  H6,
  Hr,
  Paragraph,
  SubParagraph,
  Blockquote,
  Ul,
  Ol,
  Li,
  Alert,
  PanelLink,
} from '@cieloazul310/gatsby-theme-aoi-components';
import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  ul: Ul,
  ol: Ol,
  li: Li,
  /*
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  th: TableCellHead,
  td: TableCellBody,
  inlineCode: InlineCode,
  */
  blockquote: Blockquote,
  hr: Hr,
  AppLink,
  Paragraph,
  SubParagraph,
  Alert,
  PanelLink,
};

export default components;
