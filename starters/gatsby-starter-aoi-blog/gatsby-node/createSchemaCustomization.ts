import * as path from 'path';
import { CreateSchemaCustomizationArgs, Node } from 'gatsby';
import { GatsbyIterable } from 'gatsby/dist/datastore/common/iterable';
import { slash } from 'gatsby-core-utils';
import { FileSystemNode } from 'gatsby-source-filesystem';
import {
  GraphQLFieldResolver,
  GraphQLResolveInfo,
  // GraphQLNamedType,
  GraphQLObjectType,
} from 'gatsby/graphql';
import { Author, MdxPost, MdxPostBare, Mdx } from '../types';

type GatsbyNodeModelFindArgs = {
  query?: {
    [key: string]: Record<string, unknown>;
  };
  type?: string;
};
type PageDependencies = { path: string; connectionType?: string };

type GatsbyNodeModel = {
  findAll: <T extends Node>(
    args: GatsbyNodeModelFindArgs,
    pageDependencies?: PageDependencies
  ) => Promise<{
    entries: GatsbyIterable<T>[];
    totalCount: () => Promise<number>;
  }>;

  findOne: <T extends Node>(
    args: GatsbyNodeModelFindArgs,
    pageDependencies?: PageDependencies
  ) => Promise<T>;

  findRootNodeAncestor: <T extends Node>(
    obj: Record<string, unknown>,
    predicate?: (node: Node) => boolean
  ) => T | null;

  /**
   * @deprecated
   * Since version 4.0 - Use nodeModel.findAll() instead
   */
  getAllNodes: <T extends Node>(args: { type: string }) => T[];

  getNodeById: <T extends Node>(
    args: Partial<{ id: string; type: string }>,
    pageDependencies?: PageDependencies
  ) => T | null;

  /** @deprecated */
  runQuery: <T extends Node>(args: {
    type: string;
    query: { [key: string]: unknown };
  }) => Promise<T[]>;
};

type GatsbyGraphQLContext = {
  nodeModel: GatsbyNodeModel;
};

function isString(str: unknown): str is string {
  return typeof str === 'string';
}

async function processRelativeImage(
  source: MdxPostBare,
  context: GatsbyGraphQLContext,
  type: string
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
    path.join(mdxFileNode.dir, (source[type as keyof MdxPostBare] ?? '') as string)
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
  return fileNode;
}

function mdxResolverPassthrough(fieldName: string): GraphQLFieldResolver<MdxPostBare, GatsbyGraphQLContext> {
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
    const result = await resolver(mdxNode ?? {}, args, context, {
      fieldName,
    } as GraphQLResolveInfo);
    return result;
  };
}

export default function createSchemaCustomization({
  actions,
  schema,
}: CreateSchemaCustomizationArgs) {
  const { createTypes } = actions;

  createTypes(`
    type Mdx implements Node { 
      frontmatter: MdxFrontmatter
    }
    type MdxFrontmatter @dontInfer {
      title: String!
      date: Date @dateformat
      categories: [String]
      tags: [String] 
      author: String
      image: File
      imageAlt: String
    }
    type Social @dontInfer {
      type: String!
      value: String!
    }
    type Author implements Node @dontInfer {
      name: String!
      description: String!
      website: String
      socials: [Social]
      posts: [MdxPost]
    }
  `);

  createTypes(
    schema.buildObjectType({
      name: `Author`,
      fields: {
        posts: {
          type: `[MdxPost]`,
          resolve: async (
            source: Author,
            args,
            context: GatsbyGraphQLContext,
            info
          ) => {
            const { entries } = await context.nodeModel.findAll<MdxPost>({
              type: `MdxPost`,
              query: {
                filter: { author: { name: { eq: source.name } } },
              },
            });
            return entries;
          },
        },
      },
    })
  );

  createTypes(
    schema.buildObjectType({
      name: `MdxPost`,
      fields: {
        id: { type: `ID!` },
        title: { type: `String!` },
        slug: { type: `String!` },
        date: { type: `Date!`, extensions: { dateformat: {} } },
        categories: { type: `[String]` },
        tags: { type: `[String]` },
        author: {
          type: `Author`,
          resolve: async (
            source: MdxPostBare,
            args,
            context: GatsbyGraphQLContext,
            info
          ) =>
            context.nodeModel.findOne<Author>({
              type: 'Author',
              query: {
                filter: { name: { eq: source.author } },
              },
            }),
        },
        image: {
          type: `File`,
          resolve: async (
            source: MdxPostBare,
            args,
            context: GatsbyGraphQLContext,
            info
          ) => {
            if (source.image___NODE && isString(source.image___NODE)) {
              return context.nodeModel.getNodeById({ id: source.image___NODE });
            }
            return processRelativeImage(source, context, `image`);
          },
        },
        imageAlt: { type: `String` },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 140,
            },
            truncate: {
              type: `Boolean`,
              defaultValue: true,
            }
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
