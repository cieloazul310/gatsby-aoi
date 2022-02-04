import { CreateResolversArgs } from 'gatsby';
import { GatsbyGraphQLContext } from './graphql';
import { fieldValueToSlug, createSlug, basePaths } from './utils';
import { MdxPost, MdxPostMonth } from '../types';

function mdxPostToMonths(posts: MdxPost[]): MdxPostMonth[] {
  
  const months = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .reduce<Omit<MdxPostMonth, 'gte' | 'lt'>[]>((accum, { date }) => {
      const year = new Date(date).getFullYear().toString();
      const month = (new Date(date).getMonth() + 1).toString().padStart(2, '0');
      const monthId = `${year}/${month}`;
      const indexInAccum = accum.map((d) => d.id).indexOf(monthId);
      if (indexInAccum < 0) {
        return [
          ...accum,
          {
            year,
            month,
            id: monthId,
            basePath: `${basePaths.posts}/${year}/${month}`,
            totalCount: posts.filter(
              (post) =>
                new Date(post.date).getFullYear().toString() === year &&
                (new Date(post.date).getMonth() + 1)
                  .toString()
                  .padStart(2, '0') === month
            ).length,
          },
        ];
      }
      return accum;
    }, []);
  return months.map(({ year, month, ...props }) => {
    const gte = `${year}-${month}`;
    const lt =
      month !== '12'
        ? `${year}-${(parseInt(month, 10) + 1).toString().padStart(2, '0')}`
        : `${(parseInt(year, 10) + 1).toString()}-01`;
    return {
      ...props,
      year,
      month,
      gte,
      lt,
    };
  });
}

export default function gatsbyCreateResolvers({
  createResolvers,
}: CreateResolversArgs) {
  const resolvers = {
    Query: {
      allMdxPostMonths: {
        type: `[MdxPostMonth]!`,
        resolve: async (
          source: Record<string, unknown>,
          args: any,
          context: GatsbyGraphQLContext,
          info: any
        ) => {
          const { entries } = await context.nodeModel.findAll<MdxPost>({
            type: `MdxPost`,
          });
          return mdxPostToMonths(Array.from(entries));
        },
      },
    },
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
            slug: createSlug('category', name),
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
            slug: createSlug('tag', name),
          })) ?? [],
      },
    },
  };
  createResolvers(resolvers);
}
