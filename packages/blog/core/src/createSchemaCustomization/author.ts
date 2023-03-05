import * as path from 'path';
import type { CreateSchemaCustomizationArgs } from 'gatsby';
import { slash } from 'gatsby-core-utils';
import type { FileSystemNode } from 'gatsby-source-filesystem';
import { isString } from '@cieloazul310/gatsby-theme-aoi-blog-utils';
import type {
  Author,
  MdxPost,
  GatsbyGraphQLContext,
} from '@cieloazul310/gatsby-theme-aoi-blog-types';

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

/**
 * createAuthorSchemaCustomization で何をするか
 *
 * `Author` スキーマ(ノード)を拡張する
 * 1. avatar フィールドと `File` ノードを連結する
 * 2. posts フィールドに `MdxPost` ノードを連結する
 */
export default function createAuthorSchemaCustomization({
  actions,
  schema,
}: CreateSchemaCustomizationArgs) {
  const { createTypes } = actions;

  createTypes(`
    type AuthorSocial @dontInfer {
      name: String!
      url: String!
    }
    type AuthorMdxPost @dontInfer {
      items: [MdxPost]!
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
      posts: AuthorMdxPost
    }
  `);

  createTypes(
    schema.buildObjectType({
      name: `Author`,
      fields: {
        // 1. avatar フィールドと `File` ノードを連結する
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
        // 2. posts フィールドに `MdxPost` ノードを連結する
        posts: {
          type: `AuthorMdxPost`,
          resolve: async (
            source: Author<'bare'>,
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
              items: entries,
              totalCount: await totalCount(),
            };
          },
        },
      },
    })
  );
}
