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
  MdxFrontmatter,
  ThemeOptions,
  GatsbyGraphQLContext,
} from '@cieloazul310/gatsby-theme-aoi-blog-types';

async function processMdxRelativeImage(
  source: Mdx<'bare'>,
  context: GatsbyGraphQLContext,
  type: keyof Mdx<'bare'>
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

async function processAuthorRelativeImage(
  source: Author<'bare'> & { dir: string },
  context: GatsbyGraphQLContext,
  type: keyof Author<'bare'>
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
    type AuthorSocial @dontInfer {
      name: String!
      url: String!
    }
    type AuthorMdx @dontInfer {
      posts: [Mdx]!
      totalCount: Int!
    }
    type Author implements Node @dontInfer {
      name: String!
      slug: String
      avatar: File
      description: String
      website: String
      websiteURL: String
      socials: [AuthorSocial]
      posts: AuthorMdx
    }
  `);
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
      name: `Author`,
      fields: {
        posts: {
          type: `AuthorMdx`,
          resolve: async (
            source: Author<'bare'>,
            args,
            context: GatsbyGraphQLContext,
            info
          ) => {
            const { entries, totalCount } = await context.nodeModel.findAll<
              Mdx<'node'>
            >({
              type: `Mdx`,
              query: {
                filter: {
                  frontmatter: { author: { eq: source.name } },
                },
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
            source: Author<'bare'> & { image___NODE?: string; dir: string },
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

  createTypes(`
    type MdxFrontmatter {
      title: String!
      date: Date
      categories: [String]
      tags: [String]
      author: Author
      imageAlt: String
    }
    type Mdx implements Node {
      contentType: String!
      frontmatter: MdxFrontmatter
      slug: String!
      featuredImg: File
    }
  `);

  createTypes(
    schema.buildObjectType({
      name: `MdxFrontmatter`,
      fields: {
        author: {
          type: `Author`,
          resolve: async (
            source: MdxFrontmatter<'bare'>,
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
                name: source.author ?? `Unknown Author`,
              }
            );
          },
        },
      },
    })
  );
  createTypes(
    schema.buildObjectType({
      name: `Mdx`,
      fields: {
        contentType: {
          type: `String!`,
          resolve: async ({
            fields,
          }: Mdx<'bare'> & { fields: { contentType: 'post' | 'page' } }) => {
            const { contentType } = fields;
            return contentType;
          },
        },
        slug: {
          type: `String!`,
          resolve: async ({
            fields,
          }: Mdx<'bare'> & { fields: { slug: string } }) => {
            const { slug } = fields;
            return slug;
          },
        },
        featuredImg: {
          type: `File`,
          resolve: async (
            source: Mdx<'bare'> & { fields: { remoteImageId?: string } },
            args,
            context: GatsbyGraphQLContext,
            info
          ) => {
            const { remoteImageId } = source.fields;
            if (remoteImageId && isString(remoteImageId)) {
              return context.nodeModel.getNodeById({ id: remoteImageId });
            }
            return processMdxRelativeImage(source, context, `image`);
          },
        },
      },
    })
  );
  /*
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
            source: Mdx<'bare'>,
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
  */
}
