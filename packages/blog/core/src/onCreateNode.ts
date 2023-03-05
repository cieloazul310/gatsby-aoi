import * as path from 'path';
import type { CreateNodeArgs, Node } from 'gatsby';
import { createContentDigest } from 'gatsby-core-utils';
import { createFilePath, createRemoteFileNode } from 'gatsby-source-filesystem';
import {
  withDefaults,
  validURL,
} from '@cieloazul310/gatsby-theme-aoi-blog-utils';
import type {
  Mdx,
  ThemeOptions,
} from '@cieloazul310/gatsby-theme-aoi-blog-types';

function isMdxNode(node: Node & Record<string, unknown>): node is Mdx {
  return typeof node.frontmatter === 'object';
}

/**
 * onCreateNode で何をするか
 *
 * 1. gatsby-plugin-mdx が生成した `Mdx` ノードから新たに `MdxPost` ノードを生成する
 * 2. frontmatter.image の URL から remoteFileNode を生成する
 */
export default async function onCreateNode(
  {
    node,
    actions: { createNode, createParentChildLink },
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

  // pages/*.mdx を除外
  if (source !== contentPath) return;
  const value = createFilePath({ node, getNode });
  const slug = path.join(options.basePaths.posts, value);

  const fieldData: Record<string, any> = {
    title: node.frontmatter.title,
    slug,
    date: node.frontmatter.date,
    author: node.frontmatter.author,
    categories: node.frontmatter.categories ?? [],
    tags: node.frontmatter.tags ?? [],
    image: node.frontmatter.image,
    imageAlt: node.frontmatter.imageAlt,
  };

  // 2. frontmatter.image の URL から remoteFileNode を生成する
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
        fieldData.image___NODE = remoteFileNode.id;
      }
    }
  }

  // 1. gatsby-plugin-mdx が生成した `Mdx` ノードから新たに `MdxPost` ノードを生成する
  const mdxPostId = createNodeId(`${node.id} >>> MdxPost`);
  await createNode({
    ...fieldData,
    // Required fields.
    id: mdxPostId,
    parent: node.id,
    children: [],
    internal: {
      type: `MdxPost`,
      contentDigest: createContentDigest(fieldData),
      content: JSON.stringify(fieldData),
      description: `Mdx implementation of the BlogPost interface`,
      contentFilePath: node.internal.contentFilePath,
    },
  });
  const mdxPostNode = getNode(mdxPostId);
  if (mdxPostNode) {
    createParentChildLink({ parent: node, child: mdxPostNode });
  }
}
