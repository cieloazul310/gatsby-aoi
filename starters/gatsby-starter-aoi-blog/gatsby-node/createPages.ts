import * as path from 'path';
import { CreatePagesArgs } from 'gatsby';
import { basePaths } from './utils';
import { MdxPost, MdxPostMonth } from '../types';

type Data = {
  allMdxPost: {
    posts: {
      node: Pick<MdxPost, 'id' | 'title' | 'slug'> & {
        year: string;
        month: string;
      };
    }[];
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
      node: {
        name: string;
        slug: string;
        posts: {
          totalCount: number;
        };
      };
    }[];
  };
  months: MdxPostMonth[];
};

export default async function createPagesasync({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) {
  const { createPage } = actions;
  const result = await graphql<Data>(`
    query {
      allMdxPost(sort: { fields: date, order: DESC }) {
        posts: edges {
          node {
            id
            title
            year: date(formatString: "YYYY")
            month: date(formatString: "MM")
            slug
          }
        }
        categories: group(field: categories) {
          totalCount
          fieldValue
          field
          slug
        }
        tags: group(field: tags) {
          totalCount
          fieldValue
          field
          slug
        }
        totalCount
      }
      allAuthor(
        sort: { fields: [posts___totalCount, name], order: [DESC, ASC] }
      ) {
        authors: edges {
          node {
            name
            slug
            posts {
              totalCount
            }
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
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  if (!result.data) throw new Error('There are no posts');

  const { posts, categories, tags } = result.data.allMdxPost;

  // generate Each post pages
  posts.forEach(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/posts.tsx`),
      context: { previous, next, id: node.id },
    });
  });

  // generate All posts pages
  const postsPerPage = 15;

  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? basePaths.posts : `${basePaths.posts}/${i + 1}`,
      component: path.resolve('./src/templates/all-posts.tsx'),
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
          component: path.resolve('./src/templates/category.tsx'),
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
          component: path.resolve('./src/templates/tag.tsx'),
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
  authors.forEach(({ node }, index, arr) => {
    const next = index === arr.length - 1 ? null : arr[index + 1];
    const previous = index === 0 ? null : arr[index - 1];
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const numPages = Math.ceil(node.posts.totalCount / postsPerPage) || 1;

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `${node.slug}` : `${node.slug}/${i + 1}`,
        component: path.resolve('./src/templates/author.tsx'),
        context: {
          previous,
          next,
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
        component: path.resolve('./src/templates/archive.tsx'),
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
}
