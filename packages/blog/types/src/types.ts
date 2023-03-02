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

/** @deprecated */
export type AuthorBare = Node & {
  name: string;
  description?: string;
  avatar?: string;
  website?: string;
  websiteURL?: string;
  socials?: {
    name: string;
    url: string;
  }[];
};

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
  posts?: {
    posts: (T extends 'node' ? MdxNode : MdxBrowser)[];
    totalCount: number;
  };
};

/** @deprecated */
export type AuthorNode = Node &
  Pick<
    AuthorBare,
    'name' | 'description' | 'website' | 'websiteURL' | 'socials'
  > & {
    slug?: string;
    avatar?: FileSystemNode;
    posts?: {
      posts: MdxNode[];
      totalCount: number;
    };
  };

/** @deprecated */
export type AuthorBrowser = Node &
  Pick<
    Author,
    'name' | 'slug' | 'description' | 'website' | 'websiteURL' | 'socials'
  > & {
    avatar?: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    posts?: {
      posts: MdxBrowser[];
      totalCount: number;
    };
  };

export type TocItem = {
  url: string;
  title: string;
  items?: TocItem[];
};

export type Toc = {
  items?: TocItem;
};

export type MdxFrontmatter<T extends 'bare' | 'node' | 'browser' = 'browser'> =
  {
    title: string;
    date: string;
    categories?: string[];
    tags?: string[];
    author?: T extends 'browser' ? Author<'browser'> : string;
    image?: T extends 'bare'
      ? string
      : T extends 'node'
      ? FileSystemNode
      : T extends 'browser'
      ? {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        } | null
      : never;
  };

export type Mdx<T extends 'bare' | 'node' | 'browser' = 'browser'> = Node & {
  slug: string;
  excerpt: string;
  tableOfContents: Toc;
  body: string;
  frontmatter: MdxFrontmatter<T>;
  featuredImage: T extends 'browser'
    ? {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      } | null
    : never;
};

/** @deprecated */
export type MdxBare = Node & {
  excerpt: string;
  tableOfContents: Toc;
  body: string;
  frontmatter: {
    title: string;
    date: string;
    categories?: string[];
    tags?: string[];
    author?: string;
    image?: string;
    imageAlt?: string;
  };
};

/** @deprecated */
export type MdxNode = Node &
  Omit<MdxBare, 'frontmatter'> & {
    frontmatter: Omit<MdxBare['frontmatter'], 'image'> & {
      image?: FileSystemNode;
    };
  };

/** @deprecated */
export type MdxBrowser = Node &
  Omit<MdxNode, 'frontmatter'> & {
    frontmatter: Omit<MdxNode['frontmatter'], 'author'> & {
      author?: Author<'browser'>;
    };
  };
/*
export type MdxPostBare = Node & {
  id: string;
  title: string;
  slug: string;
  date: string;
  categories?: string[];
  tags?: string[];
  author?: string;
  image?: string;
  imageAlt?: string;
  body: string;
  excerpt: string;
};

export type MdxPost = Node &
  Pick<
    MdxPostBare,
    | 'id'
    | 'title'
    | 'slug'
    | 'date'
    | 'categories'
    | 'tags'
    | 'imageAlt'
    | 'body'
    | 'excerpt'
  > & {
    author?: Author;
    image?: FileSystemNode;
  };

export type MdxPostBrowser = Node &
  Pick<
    MdxPost,
    | 'id'
    | 'title'
    | 'slug'
    | 'date'
    | 'categories'
    | 'tags'
    | 'imageAlt'
    | 'body'
    | 'excerpt'
  > & {
    image?: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    author: AuthorBrowser;
    categoriesSlug: { name: string; slug: string }[];
    tagsSlug: { name: string; slug: string }[];
  };
*/
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
