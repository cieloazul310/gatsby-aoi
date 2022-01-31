import * as path from 'path';
import { CreateSchemaCustomizationArgs, Node } from 'gatsby';
import { GatsbyIterable } from 'gatsby/dist/datastore/common/iterable';
import { slash } from 'gatsby-core-utils';
import { FileSystemNode } from 'gatsby-source-filesystem';
import {
  // GraphQLFieldResolver,
  GraphQLResolveInfo,
  // GraphQLNamedType,
  GraphQLObjectType,
} from 'gatsby/graphql';

type GatsbyNodeModelFindArgs = {
  query?: {
    [key: string]: Record<string, unknown>;
  };
  type?: string;
};
type PageDependencies = { path: string; connectionType?: string };

type GatsbyNodeModel = {
  findAll: <T>(
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
  findRootNodeAncestor: (obj: any, predicate?: (node: Node) => boolean) => Node;
  /**
   * @deprecated
   * Since version 4.0 - Use nodeModel.findAll() instead
   */
  getAllNodes: <T extends Node>(args: { type: string }) => T[];
  getNodeById: (
    args: Partial<{ id: string; type: string }>,
    pageDependencies?: any
  ) => Node | null;
  /** @deprecated */
  runQuery: <T>(args: {
    type: string;
    query: { [key: string]: unknown };
  }) => Promise<T[]>;
};

type GatsbyGraphQLContext = {
  nodeModel: GatsbyNodeModel;
};
/*
type GatsbyResolver = {
  type?: string | string[];
  args?: Record<string, unknown>;
  resolve: GraphQLFieldResolver<
    Record<string, unknown>,
    GatsbyGraphQLContext,
    Record<string, unknown>
  >;
};

type GatsbyGraphQLNamedType = GraphQLNamedType & {
  getFields: () => {
    [key: string]: Record<string, unknown> & {
      resolve: GatsbyResolver;
    };
  };
};
*/
function isString(str: unknown): str is string {
  return typeof str === 'string';
}

async function processRelativeImage(
  source: Record<string, unknown>,
  context: GatsbyGraphQLContext,
  type: string
): Promise<FileSystemNode | undefined> {
  // Image is a relative path - find a corresponding file
  const mdxFileNode = context.nodeModel.findRootNodeAncestor(
    source,
    (node) => node.internal && node.internal.type === `File`
  );
  if (!mdxFileNode) {
    return undefined;
  }
  const imagePath = slash(
    path.join((mdxFileNode.dir ?? '') as string, (source[type] ?? '') as string)
  );

  const fileNode = await context.nodeModel
    .findOne<FileSystemNode>({
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

function mdxResolverPassthrough(fieldName: string) {
  return async (
    source: Record<string, unknown>,
    args: any,
    context: GatsbyGraphQLContext,
    info: GraphQLResolveInfo
  ) => {
    const type = info.schema.getType(`Mdx`) as GraphQLObjectType<
      Record<string, unknown>,
      GatsbyGraphQLContext
    >;
    const mdxNode = context.nodeModel.getNodeById({
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
      author: Author @link(by: "name")
      image: File
      imageAlt: String
    }
    type Social {
      type: String!
      value: String!
    }
    type Author implements Node @dontInfer {
      name: String!
      description: String!
      website: String
      socials: [Social]
    }
  `);

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
            source: Record<string, unknown>,
            args,
            context: GatsbyGraphQLContext,
            info
          ) =>
            context.nodeModel.findOne({
              type: 'Author',
              query: {
                filter: { name: { eq: source.author } },
              },
            }),
        },
        image: {
          type: `File`,
          resolve: async (
            source: Record<string, unknown>,
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
      },
      interfaces: [`Node`],
      extensions: {
        infer: false,
      },
    })
  );
}
