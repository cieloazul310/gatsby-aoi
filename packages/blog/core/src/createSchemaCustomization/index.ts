import type { CreateSchemaCustomizationArgs } from "gatsby";
import type { ThemeOptions } from "@cieloazul310/gatsby-theme-aoi-blog-types";
import createAuthorSchemaCustomization from "./author";
import createMdxPostSchemaCustomization from "./mdxPost";

export default function createSchemaCustomization(
  args: CreateSchemaCustomizationArgs,
  themeOptions: ThemeOptions,
) {
  createAuthorSchemaCustomization(args);
  createMdxPostSchemaCustomization(args, themeOptions);
}
