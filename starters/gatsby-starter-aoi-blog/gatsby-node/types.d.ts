import { Node } from 'gatsby';
import { FileNode } from 'gatsby-source-filesystem';

export type Author = Node & {
  name: string;
  description: string;
  website?: string;
  socials: Array<{
    type: string;
    value: string;
  }>;
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
};

export type MdxPostBare = Omit<MdxPost, 'author' | 'image'> & {
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
