import * as path from 'path';
import { CreatePagesArgs } from 'gatsby';
import { MdxPost } from '../types';

function strToSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/ /g, '-')
    .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '');
}

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
    }[];
    tags: {
      totalCount: number;
      fieldValue: string;
      field: string;
    }[];
    authors: {
      totalCount: number;
      fieldValue: string;
      field: string;
    }[];
  };
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
        }
        tags: group(field: tags) {
          totalCount
          fieldValue
          field
        }
        authors: group(field: author___name) {
          totalCount
          fieldValue
          field
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  if (!result.data) throw new Error('There are no posts');

  const { posts, categories, tags, authors } = result.data.allMdxPost;
  
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
      path: i === 0 ? `/posts` : `/posts/${i + 1}`,
      component: path.resolve('./src/templates/posts.tsx'),
      context: {
        title: 'All Posts',
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  categories
    .map((category) => ({
      ...category,
      slug: `/category/${strToSlug(category.fieldValue)}`,
    }))
    .sort((a, b) => b.totalCount - a.totalCount)
    .forEach((category, index, arr) => {
      const next =
        index === arr.length - 1 ? null : arr[index + 1];
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
          },
        });
      });
    });
  
  /*
  const authorResult = await graphql(`
    query Authors {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        group(field: frontmatter___author___name) {
          totalCount
          fieldValue
        }
      }
    }
  `);
  if (authorResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // console.log(JSON.stringify(authorResult.data, null, 2));
  const authors = authorResult.data.allMdx.group.sort((a, b) => b.totalCount - a.totalCount);

  authors.forEach((author, index) => {
    const next = index === authors.length - 1 ? null : authors[index + 1];
    const previous = index === 0 ? null : authors[index - 1];
    const numPages = Math.ceil(author.totalCount / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/author/${author.fieldValue}` : `/author/${author.fieldValue}/${i + 1}`,
        component: path.resolve('./src/templates/author.tsx'),
        context: {
          previous,
          next,
          type: 'Author',
          fieldValue: author.fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  });

  // generate each tag pages
  const tagsResult = await graphql(`
    query Tags {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
        }
      }
    }
  `);
  if (tagsResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const tags = tagsResult.data.allMdx.group.sort((a, b) => b.totalCount - a.totalCount);

  tags.forEach((tag, index) => {
    const next = index === tags.length - 1 ? null : tags[index + 1];
    const previous = index === 0 ? null : tags[index - 1];
    const numPages = Math.ceil(tag.totalCount / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/tag/${tag.fieldValue}` : `/author/${tag.fieldValue}/${i + 1}`,
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
        },
      });
    });
  });

  const months = posts.reduce((accum, { node }) => {
    const { year, month } = node.frontmatter;
    const index = accum.map((d) => d.key).indexOf(`${year}/${month}`);
    if (index < 0) {
      return [
        ...accum,
        {
          year,
          month,
          key: `${year}/${month}`,
          totalCount: posts.filter((post) => post.node.frontmatter.year === year && post.node.frontmatter.month === month).length,
        },
      ];
    }
    return accum;
  }, []);

  months.forEach(({ year, month, totalCount }, index) => {
    const next = index === 0 ? null : months[index - 1];
    const previous = index === months.length - 1 ? null : months[index + 1];
    const numPages = Math.ceil(totalCount / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog/${year}/${month}` : `/blog/${year}/${month}/${i + 1}`,
        component: path.resolve('./src/templates/archive.tsx'),
        context: {
          previous,
          next,
          type: 'Archive',
          year,
          month,
          gte: `${year}-${month}`,
          lt:
            month === '12'
              ? `${(parseInt(year, 10) + 1).toString().padStart(2, '0')}-01`
              : `${year}-${(parseInt(month, 10) + 1).toString().padStart(2, '0')}`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  });
  */
}
