import * as path from 'path';
import type { CreatePagesArgs } from 'gatsby';
import { withDefaults } from '@cieloazul310/gatsby-theme-aoi-blog-utils';
import type {
  MdxPost,
  Author,
  MdxPostMonth,
  Terminology,
  ThemeOptions,
} from '@cieloazul310/gatsby-theme-aoi-blog-types';

type Data = {
  allMdxPost: {
    posts: (Pick<MdxPost, 'id' | 'slug' | 'title'> & {
      internal: Pick<MdxPost['internal'], 'contentFilePath'>;
    })[];
    totalCount: number;
  };
  allAuthor: {
    authors: (Pick<Author, 'name' | 'slug'> & {
      posts: Pick<Author['posts'], 'totalCount'>;
    })[];
  };
  allCategories: Terminology[];
  allTags: Terminology[];
  allMdxPostMonths: MdxPostMonth[];
};

/**
 * createPagesAsync で何をするか
 * 1. MdxPost ノードごとにページを作成する (Post)
 * 2. Author ノードごとにページを作成する (Author)
 * 3. MdxPost の新着順の一覧ページを作成する (AllPosts)
 * 4. MdxPost の月別の一覧ページを作成する (Archive)
 * 5. MdxPost のカテゴリー別のページを作成する (Categories)
 * 6. MdxPost のタグ別のページを作成する (Tags)
 */
export default async function createPagesAsync(
  { graphql, actions, reporter }: CreatePagesArgs,
  themeOptions: Partial<ThemeOptions>
) {
  const { basePaths, postsPerPage } = withDefaults(themeOptions);
  const { createPage } = actions;
  const result = await graphql<Data>(`
    {
      allMdxPost(sort: { date: DESC }) {
        posts: nodes {
          id
          slug
          title
          internal {
            contentFilePath
          }
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
      allCategories {
        name
        slug
        totalCount
      }
      allTags {
        name
        slug
        totalCount
      }
      allMdxPostMonths {
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

  const { allMdxPost, allAuthor, allCategories, allTags, allMdxPostMonths } =
    result.data;
  const { posts } = allMdxPost;

  // 1. MdxPost ノードごとにページを作成する (Post)
  const postTemplate = require.resolve(
    '@cieloazul310/gatsby-theme-aoi-blog-templates/src/posts.tsx'
  );
  posts.forEach(({ id, slug, internal }, index) => {
    const newer = index === 0 ? null : posts[index - 1].id;
    const older = index === posts.length - 1 ? null : posts[index + 1].id;

    createPage({
      path: slug,
      component: `${postTemplate}?__contentFilePath=${internal.contentFilePath}`,
      context: { newer, older, id },
    });
  });

  // 3. MdxPost の新着順の一覧ページを作成する (AllPosts)
  const numPages = Math.ceil(posts.length / postsPerPage);
  const allPostsTemplate = require.resolve(
    '@cieloazul310/gatsby-theme-aoi-blog-templates/src/all-posts.tsx'
  );
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? basePaths.posts : `${basePaths.posts}/${i + 1}`,
      component: allPostsTemplate,
      context: {
        title: 'All Posts',
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        basePath: basePaths.posts,
        totalCount: allMdxPost.totalCount,
      },
    });
  });

  // 5. MdxPost のカテゴリー別のページを作成する (Categories)
  const categoriesTemplate = require.resolve(
    '@cieloazul310/gatsby-theme-aoi-blog-templates/src/category.tsx'
  );
  allCategories.forEach(({ name, slug, totalCount }, index, arr) => {
    const previous = index === 0 ? null : arr[index - 1];
    const next = index === arr.length - 1 ? null : arr[index + 1];
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const numPages = Math.ceil(totalCount / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? slug : path.join(slug, (i + 1).toString()),
        component: categoriesTemplate,
        context: {
          previous,
          next,
          type: 'Category',
          name,
          slug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          basePath: slug,
          totalCount,
        },
      });
    });
  });

  // 6. MdxPost のタグ別のページを作成する (Tags)
  const tagsTemplate = require.resolve(
    '@cieloazul310/gatsby-theme-aoi-blog-templates/src/tag.tsx'
  );
  allTags.forEach(({ name, slug, totalCount }, index, arr) => {
    const next = index === arr.length - 1 ? null : arr[index + 1];
    const previous = index === 0 ? null : arr[index - 1];
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const numPages = Math.ceil(totalCount / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? slug : path.join(slug, (i + 1).toString()),
        component: tagsTemplate,
        context: {
          previous,
          next,
          type: 'Tag',
          name,
          slug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          basePath: slug,
          totalCount,
        },
      });
    });
  });

  // 2. Author ノードごとにページを作成する (Author)
  const { authors } = allAuthor;
  const authorTemplate = require.resolve(
    '@cieloazul310/gatsby-theme-aoi-blog-templates/src/author.tsx'
  );
  authors.forEach((node, index, arr) => {
    const next = index === arr.length - 1 ? null : arr[index + 1];
    const previous = index === 0 ? null : arr[index - 1];
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const numPages = Math.ceil(node.posts.totalCount / postsPerPage) || 1;

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `${node.slug}` : `${node.slug}/${i + 1}`,
        component: authorTemplate,
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

  // 4. MdxPost の月別の一覧ページを作成する (Archive)
  allMdxPostMonths.forEach(
    ({ year, month, basePath, totalCount, lt, gte }, index) => {
      const next = index === 0 ? null : allMdxPostMonths[index - 1];
      const previous =
        index === allMdxPostMonths.length - 1
          ? null
          : allMdxPostMonths[index + 1];
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
    }
  );
}
