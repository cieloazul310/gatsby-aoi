import { CreateNodeArgs } from 'gatsby';
import { createFilePath, createRemoteFileNode } from 'gatsby-source-filesystem';

export default async function onCreateNode({
  node,
  actions: { createNode, createNodeField },
  getNode,
  getCache,
}: CreateNodeArgs) {
  // const { createNodeField } = actions;
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/posts${value}`,
    });
  }
}
