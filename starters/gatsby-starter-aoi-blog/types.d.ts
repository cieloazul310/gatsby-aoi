import { Node } from 'gatsby';
import { FileNode } from 'gatsby-source-filesystem';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type Author = Node & {
  name: string;
  slug?: string;
  description?: string;
  website?: string;
  socials?: {
    type: string;
    value: string;
  }[];
};

export type MdxPost = Node & {
  id: string;
  title: string;
  slug: string;
  date: string;
  categories?: string[];
  tags?: string[];
  author?: Author;
  image?: FileNode;
  imageAlt?: string;
  body: string;
  excerpt: string;
};

export type MdxPostBrowser = Pick<
  MdxPost,
  | 'id'
  | 'title'
  | 'slug'
  | 'date'
  | 'categories'
  | 'tags'
  | 'author'
  | 'imageAlt'
  | 'body'
  | 'excerpt'
> & {
  image?: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  categoriesSlug: { name: string; slug: string }[];
  tagsSlug: { name: string; slug: string }[];
};

export type MdxPostBare = Pick<
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
  | 'parent'
  | 'children'
  | 'internal'
> & {
  author?: string;
  image?: string;
  image___NODE?: string;
};

export type Mdx = Node & {
  frontmatter?: {
    title: string;
    date: string;
    categories?: string[];
    tags?: string[];
    author?: Author;
    image?: FileNode;
    imageAlt?: string;
  };
}
