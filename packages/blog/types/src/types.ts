import type { Node } from 'gatsby';
import type { FileSystemNode } from 'gatsby-source-filesystem';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type ThemeOptions = {
  postsPerPage: number;
  basePaths: {
    posts: string;
    category: string;
    tag: string;
    author: string;
  };
  contentPath: string;
  assetPath: string;
  excerptLength: number;
  imageMaxWidth: number;
  gatsbyRemarkPlugins: {
    resolve: string;
    options?: Record<string, unknown>;
  }[];
};

// configured in './data/authors.yml'
export type Author<T extends 'browser' | 'bare' | 'node' = 'browser'> = Node & {
  name: string;
  description?: string;
  avatar?: T extends 'bare'
    ? string
    : T extends 'node'
    ? FileSystemNode
    : T extends 'browser'
    ? {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      }
    : never;
  slug?: T extends 'bare' ? never : string;
  website?: string;
  websiteURL?: string;
  socials?: {
    name: string;
    url: string;
  }[];
  posts: {
    items: MdxPost[];
    totalCount: number;
  };
};

export type AuthorBoxFragment = Pick<
  Author,
  | 'name'
  | 'slug'
  | 'description'
  | 'avatar'
  | 'website'
  | 'websiteURL'
  | 'socials'
> & {
  posts: Pick<Author['posts'], 'totalCount'>;
};

export type TocItem = {
  url: string;
  title: string;
  items?: TocItem[];
};

export type Toc = {
  items?: TocItem;
};

export type Terminology = {
  name: string;
  slug: string;
  totalCount: number;
};

export type MdxFrontmatter = {
  title: string;
  date: string;
  categories?: string[] | null;
  tags?: string[] | null;
  author?: string | null;
  image?: string | null;
  imageAlt?: string | null;
};

export type Mdx = Node & {
  slug: string;
  excerpt: string;
  tableOfContents: Toc;
  body: string;
  frontmatter: MdxFrontmatter;
};

export type MdxPost<T extends 'node' | 'browser' = 'browser'> = Node & {
  title: string;
  slug: string;
  date: string;
  author: T extends 'node' ? string | null : Author;
  excerpt: T extends 'node' ? never : string;
  tableOfContents: T extends 'node' ? never : Toc;
  categories: string[];
  tags: string[];
  image: T extends 'node'
    ? string | null
    : {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      } | null;
  imageAlt: string | null;
};

export type MdxPostListFragment = Pick<
  MdxPost,
  'id' | 'slug' | 'title' | 'date'
> & {
  author: Pick<Author, 'name'>;
};

export type MdxPostMonth = {
  id: string;
  year: string;
  month: string;
  basePath: string;
  gte: string;
  lt: string;
  totalCount: number;
};

// export {};
