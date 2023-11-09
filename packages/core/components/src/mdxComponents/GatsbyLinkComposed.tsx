import * as React from "react";
import { Link as GatsbyLink, type GatsbyLinkProps } from "gatsby";

export type GatsbyLinkComposedProps<T = Record<string, unknown>> = Omit<
  GatsbyLinkProps<T>,
  "ref"
>;

const GatsbyLinkComposed = React.forwardRef<any, GatsbyLinkComposedProps>(
  (props, ref) => <GatsbyLink ref={ref} {...props} />,
);

export default GatsbyLinkComposed;
