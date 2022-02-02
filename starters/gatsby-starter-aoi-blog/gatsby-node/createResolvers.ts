import { CreateResolversArgs } from 'gatsby';
import { GatsbyGraphQLContext } from './graphql';
import { strToSlug } from './utils';
// import { MdxPost } from '../types';

export default function gatsbyCreateResolvers({
  createResolvers,
}: CreateResolversArgs) {
  const resolvers = {
    MdxPostGroupConnection: {
      slug: {
        type: `String!`,
        resolve: async (
          source: { fieldValue: string },
          args: any,
          context: GatsbyGraphQLContext,
          info: any
        ) => strToSlug(source.fieldValue),
      },
    },
  };
  createResolvers(resolvers);
}
