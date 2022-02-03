import { Node } from 'gatsby';
import { FileSystemNode } from 'gatsby-source-filesystem';
import { IGatsbyImageData } from 'gatsby-plugin-image';

// configured in './data/authors.yml'
export type AuthorBare = Node & {
  name: string;
  description?: string;
  avatar?: string;
  website?: string;
  socials?: {
    name: string;
    url: string;
  }[];
};

export type Author = Node &
  Pick<AuthorBare, 'name' | 'description' | 'website' | 'socials'> & {
    slug?: string;
    avatar?: FileSystemNode;
    posts: MdxPost[];
  };

export type AuthorBrowser = Node &
  Pick<Author, 'name' | 'description' | 'website' | 'socials' | 'posts'> & {
    avatar?: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
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

export type MdxPost = Node & Pick<MdxPostBare, 'id' | 'title' | 'slug' | 'date' | 'categories' | 'tags' | 'imageAlt' | 'body' | 'excerpt'> & {
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
