import { CreateSchemaCustomizationArgs } from 'gatsby';

export default function createSchemaCustomization({ actions, schema }: CreateSchemaCustomizationArgs) {
  const { createTypes } = actions;
  
  createTypes(`
    type Mdx implements Node { 
      frontmatter: MdxFrontmatter
      featuredImg: File @link(from: "fields.localFile")
    }
    type MdxFrontmatter {
      title: String!
      date: Date
      categories: [String]
      tags: [String] 
      author: Author @link(by: "name")
      featuredImgUrl: String
      featuredImgAlt: String
    }
    type Social {
      type: String!
      value: String!
    }
    type Author implements Node {
      name: String!
      description: String!
      website: String
      socials: [Social]
    }
  `);
}
