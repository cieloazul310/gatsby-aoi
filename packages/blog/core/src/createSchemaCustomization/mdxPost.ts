import * as path from 'path';
import type { CreateSchemaCustomizationArgs } from 'gatsby';
import { slash } from 'gatsby-core-utils';
import type { FileSystemNode } from 'gatsby-source-filesystem';
import type {
  GraphQLFieldResolver,
  GraphQLResolveInfo,
  GraphQLObjectType,
} from 'gatsby/graphql';
import {
  withDefaults,
  isString,
} from '@cieloazul310/gatsby-theme-aoi-blog-utils';
import type {
  Author,
  Mdx,
  ThemeOptions,
  GatsbyGraphQLContext,
} from '@cieloazul310/gatsby-theme-aoi-blog-types';

function mdxResolverPassthrough(
  fieldName: string
): GraphQLFieldResolver<Mdx, GatsbyGraphQLContext> {
  return async (source, args, context, info) => {
    const type = info.schema.getType(`Mdx`) as GraphQLObjectType<
      Mdx,
      GatsbyGraphQLContext
    >;
    const mdxNode = context.nodeModel.getNodeById<Mdx>({
      id: source.parent as string,
    });
    const resolver = type?.getFields()[fieldName].resolve;
    if (!resolver) return {};
    if (!mdxNode) return {};
    const result = await resolver(mdxNode, args, context, {
      fieldName,
    } as GraphQLResolveInfo);
    return result;
  };
}

async function processMdxPostRelativeImage(
  source: Mdx,
  context: GatsbyGraphQLContext,
  type: keyof Mdx
): Promise<FileSystemNode | undefined> {
  // Image is a relative path - find a corresponding file
  const mdxFileNode = context.nodeModel.findRootNodeAncestor<FileSystemNode>(
    source,
    (node) => node.internal && node.internal.type === `File`
  );
  if (!mdxFileNode) {
    return undefined;
  }
  const imagePath = slash(
    path.join(mdxFileNode.dir, (source[type] ?? '') as string)
  );

  const fileNode = await context.nodeModel.findOne<FileSystemNode>({
    type: `File`,
    query: {
      filter: {
        absolutePath: {
          eq: imagePath,
        },
      },
    },
  });
  return fileNode ?? undefined;
}

/**
 * createMdxPostSchemaCustomization で何をするか
 *
 * `MdxPost` スキーマ(ノード)を拡張する
 * 1. author フィールドと `Author` ノードを連結する
 * 2. image フィールドと `File` ノードを連結する
 * 3. tableOfContents, excerpt フィールドを `Mdx` ノードから引用する
 */
export default function createMdxPostSchemaCustomization(
  { actions, schema }: CreateSchemaCustomizationArgs,
  themeOptions: ThemeOptions
) {
  const options = withDefaults(themeOptions);
  const { createTypes } = actions;
  /**
    type WithSlug @dontInfer {
      name: String!
      slug: String!
    }
    type MdxMonth {
      id: String!
      year: String!
      month: String!
      basePath: String!
      gte: String!
      lt: String!
      totalCount: Int!
    }
   */
  createTypes(
    schema.buildObjectType({
      name: `MdxPost`,
      fields: {
        id: { type: `ID!` },
        title: { type: `String!` },
        slug: { type: `String!` },
        date: { type: `Date!`, extensions: { dateformat: {} } },
        // 1. author フィールドと `Author` ノードを連結する
        author: {
          type: `Author!`,
          resolve: async (
            source: Mdx,
            args,
            context: GatsbyGraphQLContext,
            info
          ) => {
            const author = await context.nodeModel.findOne<Author<'bare'>>({
              type: 'Author',
              query: {
                filter: { name: { eq: source.author } },
              },
            });
            return (
              author ?? {
                name: source.author ?? 'Unknown author',
              }
            );
          },
        },
        categories: { type: `[String]!` },
        tags: { type: `[String]!` },
        // 2. image フィールドと `File` ノードを連結する
        image: {
          type: `File`,
          resolve: async (
            source: Mdx & { image___NODE?: string },
            args,
            context: GatsbyGraphQLContext,
            info
          ) => {
            if (source.image___NODE && isString(source.image___NODE)) {
              return context.nodeModel.getNodeById({ id: source.image___NODE });
            }
            return processMdxPostRelativeImage(source, context, `image`);
          },
        },
        imageAlt: { type: `String` },
        // 3. tableOfContents, excerpt フィールドを `Mdx` ノードから引用する
        tableOfContents: {
          type: `JSON`,
          args: {
            maxDepth: {
              type: `Int`,
            },
          },
          resolve: mdxResolverPassthrough(`tableOfContents`),
        },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: options.excerptLength,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
      },
      interfaces: [`Node`],
      extensions: {
        infer: false,
      },
    })
  );
}
