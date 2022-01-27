import { CreateSchemaCustomizationArgs } from 'gatsby';

export default function createSchemaCustomization({ actions }: CreateSchemaCustomizationArgs) {
  const { createTypes } = actions;
  
  createTypes(`
    type Author implements Node {
      name: String!
      description: String!
      website: String
      twitter: String
      instagram: String
    }
  `);
}
