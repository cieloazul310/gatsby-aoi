import { CreateResolversArgs } from 'gatsby';
import { GatsbyGraphQLContext } from './graphql';
import { fieldValueToSlug } from './utils';
// import { MdxPost } from '../types';

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
  };
  createResolvers(resolvers);
}
