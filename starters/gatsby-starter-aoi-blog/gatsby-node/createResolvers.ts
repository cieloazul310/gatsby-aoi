import { CreateResolversArgs } from 'gatsby';
import { GatsbyGraphQLContext } from './graphql';
import { fieldValueToSlug, basePaths, strToSlug } from './utils';
import { MdxPost } from '../types';

export default function gatsbyCreateResolvers({
  createResolvers,
}: CreateResolversArgs) {
  const resolvers = {
    MdxPostGroupConnection: {
      slug: {
        type: `String!`,
        resolve: async (
          source: { field: string; fieldValue: string },
          args: any,
          context: GatsbyGraphQLContext,
          info: any
        ) => fieldValueToSlug(source),
      },
    },
    MdxPost: {
      categoriesSlug: {
        type: `[WithSlug]`,
        resolve: async (
          source: MdxPost,
          args: any,
          context: GatsbyGraphQLContext,
          info: any
        ) =>
          source.categories?.map((name) => ({
            name,
            slug: `${basePaths.category}/${strToSlug(name)}`,
          })) ?? [],
      },
      tagsSlug: {
        type: `[WithSlug]`,
        resolve: async (
          source: MdxPost,
          args: any,
          context: GatsbyGraphQLContext,
          info: any
        ) =>
          source.tags?.map((name) => ({
            name,
            slug: `${basePaths.tag}/${strToSlug(name)}`,
          })) ?? [],
      },
    },
  };
  createResolvers(resolvers);
}
