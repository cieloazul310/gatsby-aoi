import { Node } from 'gatsby';
import { FileSystemNode } from 'gatsby-source-filesystem';
import { IGatsbyImageData } from 'gatsby-plugin-image';

// configured in './data/authors.yml'
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

export type Author = Node &
  Pick<
    AuthorBare,
    'name' | 'description' | 'website' | 'websiteURL' | 'socials'
  > & {
    slug?: string;
    avatar?: FileSystemNode;
    posts?: {
      posts: MdxPost[];
      totalCount: number;
    };
  };

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
      posts: MdxPostBrowser[];
      totalCount: number;
    };
  };

export type MdxBare = Node & {
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

export type Mdx = Node &
  Omit<MdxBare, 'frontmatter'> & {
    frontmatter: Omit<MdxBare['frontmatter'], 'image'> & {
      image?: FileSystemNode;
    };
  };

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

type MdxPostMonth = {
  id: string;
  year: string;
  month: string;
  basePath: string;
  gte: string;
  lt: string;
  totalCount: number;
};
