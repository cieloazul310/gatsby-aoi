
type BlogFrontmatter = {
  title: string;
  date: Date;
  categories: string[];
  tags?: string[];
  author?: string;
  draft: boolean;
};

const blogFrontmatterTypedefs = `
  type BlogFrontmatter {
    title: String!
    date: Date!
    categories: [String]!
    tags: [String]
    author: Author
    draft: Boolean!
  }
`;
