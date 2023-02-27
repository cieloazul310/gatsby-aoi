// import * as React from 'react';
import type { MDXComponents } from 'mdx/types';

import headings from './Heading';
import paragraph from './Paragraph';
import listComponents from './List';
import tables from './Table';

const mdxComponents: MDXComponents = {
  ...headings,
  ...paragraph,
  ...listComponents,
  ...tables,
};

export default mdxComponents;
