import type { CreateResolversArgs } from 'gatsby';
import {
  withDefaults,
  fieldValueToSlug,
  createSlug,
} from '@cieloazul310/gatsby-theme-aoi-blog-utils';
import {
  // MdxPost,
  MdxPostMonth,
  ThemeOptions,
  GatsbyGraphQLContext,
  MdxPost,
  Terminology,
} from '@cieloazul310/gatsby-theme-aoi-blog-types';

function createTerminology(basePath: string, items: string[]): Terminology[] {
  const values = new Set(items);
  return Array.from(values, (name) => ({
    slug: createSlug(basePath, name),
    name,
    totalCount: items.filter((v) => v === name).length,
  })).sort(
    (a, b) => b.totalCount - a.totalCount || a.name.localeCompare(b.name)
  );
}
/*
function mdxPostToMonths(
  posts: MdxPost[],
  basePaths: ThemeOptions['basePaths']
): MdxPostMonth[] {
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
*/
export default function gatsbyCreateResolvers(
  { createResolvers }: CreateResolversArgs,
  themeOptions: ThemeOptions
) {
  const { basePaths } = withDefaults(themeOptions);

  const resolvers = {
    Query: {
      /*
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
          return mdxPostToMonths(Array.from(entries), basePaths);
        },
      },
      */
      allCategories: {
        type: `[Terminology]!`,
        resolve: async (
          source: unknown,
          args: any,
          context: GatsbyGraphQLContext,
          info: any
        ) => {
          const { entries } = await context.nodeModel.findAll<MdxPost<'node'>>({
            type: `MdxPost`,
            query: {
              filter: {
                categories: {
                  ne: null,
                },
              },
            },
          });
          const hoge = Array.from(entries).reduce<string[]>(
            (accum, { categories }) => [...accum, ...(categories ?? [])],
            []
          );
          return createTerminology(basePaths.category, hoge);
        },
      },
      allTags: {
        type: `[Terminology]!`,
        resolve: async (
          source: unknown,
          args: any,
          context: GatsbyGraphQLContext,
          info: any
        ) => {
          const { entries } = await context.nodeModel.findAll<MdxPost<'node'>>({
            type: `MdxPost`,
            query: {
              filter: {
                tags: {
                  ne: null,
                },
              },
            },
          });
          const hoge = Array.from(entries).reduce<string[]>(
            (accum, { tags }) => [...accum, ...(tags ?? [])],
            []
          );
          return createTerminology(basePaths.tag, hoge);
        },
      },
    },
  };
  createResolvers(resolvers);
}
