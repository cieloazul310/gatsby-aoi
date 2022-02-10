import * as path from 'path';
import { CreateNodeArgs, Node, GatsbyCache } from 'gatsby';
import { createContentDigest } from 'gatsby-core-utils';
import { createFilePath, createRemoteFileNode } from 'gatsby-source-filesystem';
import { withDefaults, validURL, MdxBare, ThemeOptions } from '@cieloazul310/gatsby-theme-aoi-blog-utils';

declare module 'gatsby-source-filesystem' {
  type CreateRemoteFileNodeArgsFixed = Omit<
    CreateRemoteFileNodeArgs,
    'cache' | 'reporter' | 'store'
  > & {
    getCache: (this: void, id: string) => GatsbyCache;
  };
  // eslint-disable-next-line @typescript-eslint/no-shadow
  function createRemoteFileNode(
    args: CreateRemoteFileNodeArgsFixed
  ): Promise<FileSystemNode>;
}

function isMdxNode(node: Node & Record<string, unknown>): node is MdxBare {
  return typeof node.frontmatter === 'object';
}

export default async function onCreateNode({
  node,
  actions: { createNode, createParentChildLink },
  getNode,
  createNodeId,
  getCache,
}: CreateNodeArgs, themeOptions: ThemeOptions) {
  const options = withDefaults(themeOptions);

  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type !== 'Mdx') return;
  if (!isMdxNode(node)) return;

  // const contentPath = `/content/posts/`;
  const contentPath = path.join(options.contentPath, options.basePaths.posts);
  // Create source field (according to contentPath)
  const parentFileNode = getNode(node.parent ?? '');
  const source = parentFileNode?.sourceInstanceName;

  if (source !== contentPath) return;

  const value = createFilePath({ node, getNode });
  // const slug = `/posts${value}`;
  const slug = path.join(options.basePaths.posts, value);

  const fieldData: Record<string, unknown> = {
    title: node.frontmatter.title,
    slug,
    categories: node.frontmatter.categories ?? [],
    tags: node.frontmatter.tags ?? [],
    date: node.frontmatter.date,
    author: node.frontmatter.author,
    image: node.frontmatter.image,
    imageAlt: node.frontmatter.imageAlt,
  };

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
    },
  });
  const mdxPostNode = getNode(mdxPostId);
  if (mdxPostNode) {
    createParentChildLink({ parent: node, child: mdxPostNode });
  }
}
