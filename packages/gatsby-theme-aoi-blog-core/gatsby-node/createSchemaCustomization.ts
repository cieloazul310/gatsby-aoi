import * as path from 'path';
import { CreateSchemaCustomizationArgs } from 'gatsby';
import { slash } from 'gatsby-core-utils';
import { FileSystemNode } from 'gatsby-source-filesystem';
import {
  GraphQLFieldResolver,
  GraphQLResolveInfo,
  GraphQLObjectType,
} from 'gatsby/graphql';
import withDefaults from '../utils/default-options';
import { isString } from './utils';
import { GatsbyGraphQLContext } from './graphql';
import { AuthorBare, MdxPost, MdxPostBare, MdxNode, ThemeOptions } from '../types';

async function processMdxPostRelativeImage(
  source: MdxPostBare,
  context: GatsbyGraphQLContext,
  type: keyof MdxPostBare
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

function mdxResolverPassthrough(
  fieldName: string
): GraphQLFieldResolver<MdxPostBare, GatsbyGraphQLContext> {
  return async (source, args, context, info) => {
    const type = info.schema.getType(`Mdx`) as GraphQLObjectType<
      MdxNode,
      GatsbyGraphQLContext
    >;
    const mdxNode = context.nodeModel.getNodeById<MdxNode>({
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

async function processAuthorRelativeImage(
  source: AuthorBare & { dir: string },
  context: GatsbyGraphQLContext,
  type: keyof AuthorBare
) {
  const { dir } = source;
  const imagePath = slash(path.join(dir, (source[type] ?? '') as string));
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

export default function createSchemaCustomization(
  { actions, schema }: CreateSchemaCustomizationArgs,
  themeOptions: ThemeOptions
) {
  const options = withDefaults(themeOptions);
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
      name: String!
      url: String!
    }
    type AuthorMdxPosts @dontInfer {
      posts: [MdxPost]!
      totalCount: Int!
    }
    type Author implements Node @dontInfer {
      name: String!
      slug: String
      avatar: File
      description: String
      website: String
      websiteURL: String
      socials: [Social]
      posts: AuthorMdxPosts
    }
    type WithSlug @dontInfer {
      name: String!
      slug: String!
    }
    type MdxPostMonth {
      id: String!
      year: String!
      month: String!
      basePath: String!
      gte: String!
      lt: String!
      totalCount: Int!
    }
  `);

  createTypes(
    schema.buildObjectType({
      name: `Author`,
      fields: {
        posts: {
          type: `AuthorMdxPosts`,
          resolve: async (
            source: AuthorBare,
            args,
            context: GatsbyGraphQLContext,
            info
          ) => {
            const { entries, totalCount } =
              await context.nodeModel.findAll<MdxPost>({
                type: `MdxPost`,
                query: {
                  filter: { author: { name: { eq: source.name } } },
                },
              });
            return {
              posts: entries,
              totalCount: await totalCount(),
            };
          },
        },
        avatar: {
          type: `File`,
          resolve: async (
            source: AuthorBare & { image___NODE?: string; dir: string },
            args,
            context: GatsbyGraphQLContext,
            info
          ) => {
            if (!source.avatar) return null;
            if (source.image___NODE && isString(source.image___NODE)) {
              return context.nodeModel.getNodeById({ id: source.image___NODE });
            }
            return processAuthorRelativeImage(source, context, `avatar`);
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
          ) => {
            const author = await context.nodeModel.findOne<AuthorBare>({
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
        image: {
          type: `File`,
          resolve: async (
            source: MdxPostBare & { image___NODE?: string },
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
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: options.excerptLength,
            },
            truncate: {
              type: `Boolean`,
              defaultValue: true,
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
