import type { CreatePagesArgs } from 'gatsby';
import { withDefaults } from '@cieloazul310/gatsby-theme-aoi-blog-utils';
import type {
  // MdxPost,
  Mdx,
  MdxPostMonth,
  ThemeOptions,
} from '@cieloazul310/gatsby-theme-aoi-blog-types';

type Data = {
  allMdx: {
    posts: (Pick<Mdx, 'id' | 'slug'> & {
      frontmatter: Pick<Mdx['frontmatter'], 'title'>;
      internal: Pick<Mdx['internal'], 'contentFilePath'>;
    })[];
  };
  /*
  allMdxPost: {
    posts: (Pick<MdxPost, 'id' | 'title' | 'slug'> & {
      year: string;
      month: string;
    } & {
      internal: Pick<MdxPost['internal'], 'contentFilePath'>;
    })[];
    categories: {
      totalCount: number;
      fieldValue: string;
      field: string;
      slug: string;
    }[];
    tags: {
      totalCount: number;
      fieldValue: string;
      field: string;
      slug: string;
    }[];
    totalCount: number;
  };
  allAuthor: {
    authors: {
      name: string;
      slug: string;
      posts: {
        totalCount: number;
      };
    }[];
  };
  months: MdxPostMonth[];
  */
};

export default async function createPagesasync(
  { graphql, actions, reporter }: CreatePagesArgs,
  themeOptions: Partial<ThemeOptions>
) {
  const { basePaths, postsPerPage } = withDefaults(themeOptions);
  const { createPage } = actions;
  const result = await graphql<Data>(`
    {
      allMdx(
        filter: { contentType: { eq: "post" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        posts: nodes {
          id
          slug
          frontmatter {
            title
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);
  /*
  const result = await graphql<Data>(`
    {
      allMdxPost(sort: { date: DESC }) {
        posts: nodes {
          id
          title
          year: date(formatString: "YYYY")
          month: date(formatString: "MM")
          slug
          internal {
            contentFilePath
          }
        }
        categories: group(field: { categories: SELECT }) {
          totalCount
          fieldValue
          field
          slug
        }
        tags: group(field: { tags: SELECT }) {
          totalCount
          fieldValue
          field
          slug
        }
        totalCount
      }
      allAuthor(sort: [{ posts: { totalCount: DESC } }, { name: ASC }]) {
        authors: nodes {
          name
          slug
          posts {
            totalCount
          }
        }
      }
      months: allMdxPostMonths {
        basePath
        gte
        id
        lt
        month
        totalCount
        year
      }
    }
  `);
  */
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  if (!result.data) throw new Error('There are no posts');

  const { posts } = result.data.allMdx;

  // generate Each post pages
  const postTemplate = require.resolve(
    '@cieloazul310/gatsby-theme-aoi-blog-templates/src/posts.tsx'
  );
  posts.forEach(({ id, slug, internal }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];

    createPage({
      path: slug,
      component: `${postTemplate}?__contentFilePath=${internal.contentFilePath}`,
      context: { previous, next, id },
    });
  });
  /*
  // generate All posts pages
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? basePaths.posts : `${basePaths.posts}/${i + 1}`,
      component: require.resolve(
        '@cieloazul310/gatsby-theme-aoi-blog-templates/src/all-posts.tsx'
      ),
      context: {
        title: 'All Posts',
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        basePath: basePaths.posts,
        totalCount: result.data?.allMdxPost.totalCount,
      },
    });
  });

  // create category pages
  categories
    .sort((a, b) => b.totalCount - a.totalCount)
    .forEach((category, index, arr) => {
      const next = index === arr.length - 1 ? null : arr[index + 1];
      const previous = index === 0 ? null : arr[index - 1];
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const numPages = Math.ceil(category.totalCount / postsPerPage);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `${category.slug}` : `${category.slug}/${i + 1}`,
          component: require.resolve(
            '@cieloazul310/gatsby-theme-aoi-blog-templates/src/category.tsx'
          ),
          context: {
            previous,
            next,
            type: 'Category',
            fieldValue: category.fieldValue,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            basePath: category.slug,
            totalCount: category.totalCount,
          },
        });
      });
    });

  // create tag pages
  tags
    .sort((a, b) => b.totalCount - a.totalCount)
    .forEach((tag, index, arr) => {
      const next = index === arr.length - 1 ? null : arr[index + 1];
      const previous = index === 0 ? null : arr[index - 1];
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const numPages = Math.ceil(tag.totalCount / postsPerPage);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `${tag.slug}` : `${tag.slug}/${i + 1}`,
          component: require.resolve(
            '@cieloazul310/gatsby-theme-aoi-blog-templates/src/tag.tsx'
          ),
          context: {
            previous,
            next,
            type: 'Tag',
            fieldValue: tag.fieldValue,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            basePath: tag.slug,
            totalCount: tag.totalCount,
          },
        });
      });
    });

  // create author pages
  const { authors } = result.data.allAuthor;
  authors.forEach((node, index, arr) => {
    const next = index === arr.length - 1 ? null : arr[index + 1];
    const previous = index === 0 ? null : arr[index - 1];
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const numPages = Math.ceil(node.posts.totalCount / postsPerPage) || 1;

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `${node.slug}` : `${node.slug}/${i + 1}`,
        component: require.resolve(
          '@cieloazul310/gatsby-theme-aoi-blog-templates/src/author.tsx'
        ),
        context: {
          previous: previous?.name ?? null,
          next: next?.name ?? null,
          type: 'Author',
          fieldValue: node.name,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          basePath: node.slug,
          totalCount: node.posts.totalCount,
        },
      });
    });
  });

  const { months } = result.data;
  months.forEach(({ year, month, basePath, totalCount, lt, gte }, index) => {
    const next = index === 0 ? null : months[index - 1];
    const previous = index === months.length - 1 ? null : months[index + 1];
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const numPages = Math.ceil(totalCount / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? basePath : `${basePath}/${i + 1}`,
        component: require.resolve(
          '@cieloazul310/gatsby-theme-aoi-blog-templates/src/archive.tsx'
        ),
        context: {
          previous,
          next,
          type: 'Archive',
          year,
          month,
          gte,
          lt,
          totalCount,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          basePath,
        },
      });
    });
  });
  */
}
