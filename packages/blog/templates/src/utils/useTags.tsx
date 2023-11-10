import { graphql, useStaticQuery } from "gatsby";
import type { Terminology } from "@cieloazul310/gatsby-theme-aoi-blog-types";

type UseCategoriesQueryData = {
  allTags: Terminology[];
};

function useTags() {
  const { allTags } = useStaticQuery<UseCategoriesQueryData>(graphql`
    query {
      allTags {
        name
        slug
        totalCount
      }
    }
  `);
  return allTags;
}

export default useTags;

export function useTagToSlug() {
  const tags = useTags();
  return (tagName: string) => {
    const terminology = tags.find(({ name }) => name === tagName);
    if (!terminology) return "#";
    return terminology.slug;
  };
}
