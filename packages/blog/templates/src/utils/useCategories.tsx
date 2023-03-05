import { graphql, useStaticQuery } from 'gatsby';
import type { Terminology } from '@cieloazul310/gatsby-theme-aoi-blog-types';

type UseCategoriesQueryData = {
  allCategories: Terminology[];
};

function useCategories() {
  const { allCategories } = useStaticQuery<UseCategoriesQueryData>(graphql`
    query {
      allCategories {
        name
        slug
        totalCount
      }
    }
  `);
  return allCategories;
}

export default useCategories;

export function useCategoryToSlug() {
  const categories = useCategories();
  return (categoryName: string) => {
    const terminology = categories.find(({ name }) => name === categoryName);
    if (!terminology) return '#';
    return terminology.slug;
  };
}
