// import * as React from 'react';
import type { MDXComponents } from "mdx/types";

import headings from "./Heading";
import paragraph from "./Paragraph";
import links from "./Link";
import listComponents from "./List";
import tables from "./Table";

const mdxComponents: MDXComponents = {
  ...headings,
  ...paragraph,
  ...links,
  ...listComponents,
  ...tables,
};

export default mdxComponents;
