import * as path from 'path';
import type { CreateNodeArgs, Node } from 'gatsby';
import { createFilePath, createRemoteFileNode } from 'gatsby-source-filesystem';
import {
  withDefaults,
  validURL,
} from '@cieloazul310/gatsby-theme-aoi-blog-utils';
import type {
  Mdx,
  ThemeOptions,
} from '@cieloazul310/gatsby-theme-aoi-blog-types';

function isMdxNode(node: Node & Record<string, unknown>): node is Mdx<'bare'> {
  return typeof node.frontmatter === 'object';
}

export default async function onCreateNode(
  {
    node,
    actions: { createNode, createNodeField },
    getNode,
    createNodeId,
    getCache,
  }: CreateNodeArgs,
  themeOptions: ThemeOptions
) {
  const options = withDefaults(themeOptions);

  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type !== 'Mdx') return;
  if (!isMdxNode(node)) return;

  const contentPath = path.join(options.contentPath, options.basePaths.posts);
  // Create source field (according to contentPath)
  const parentFileNode = getNode(node.parent ?? '');
  const source = parentFileNode?.sourceInstanceName;

  if (source === contentPath) {
    const value = createFilePath({ node, getNode });
    const slug = path.join(options.basePaths.posts, value);
    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'contentType', value: 'post' });
  }
  if (source === 'pages') {
    const value = createFilePath({ node, getNode });
    createNodeField({ node, name: 'slug', value });
    createNodeField({ node, name: 'contentType', value: 'page' });
  }

  const { image } = node.frontmatter;
  if (image) {
    if (validURL(image)) {
      const remoteFileNode = await createRemoteFileNode({
        url: image,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        getCache,
      });
      if (remoteFileNode) {
        createNodeField({
          node,
          name: 'remoteImageId',
          value: remoteFileNode.id,
        });
      }
    }
  }
}
