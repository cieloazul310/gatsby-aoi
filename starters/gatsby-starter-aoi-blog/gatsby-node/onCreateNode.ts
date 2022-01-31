import { CreateNodeArgs, Node, GatsbyCache } from 'gatsby';
import { createContentDigest } from 'gatsby-core-utils';
import { ImageDataLike } from 'gatsby-plugin-image';
import {
  createFilePath,
  createRemoteFileNode,
  FileSystemNode,
} from 'gatsby-source-filesystem';

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

type MdxNode = Node & {
  frontmatter: {
    image?: string | null;
    imageAlt?: string | null;
    [key: string]: unknown;
  };
};
function isMdxNode(node: Node & Record<string, unknown>): node is MdxNode {
  return typeof node.frontmatter === 'object';
}

function validURL(str: string) {
  try {
    const url = new URL(str);
    return true;
  } catch {
    return false;
  }
}

export default async function onCreateNode({
  node,
  actions: { createNode, createNodeField, createParentChildLink },
  getNode,
  createNodeId,
  getCache,
  store,
  cache,
}: CreateNodeArgs) {
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type !== 'Mdx') return;
  if (!isMdxNode(node)) return;

  const contentPath = `/content/posts/`;
  // Create source field (according to contentPath)
  const parentFileNode = getNode(node.parent ?? '');
  const source = parentFileNode?.sourceInstanceName;

  if (source !== contentPath) return;

  const value = createFilePath({ node, getNode });
  const slug = `/posts${value}`;

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
  /*
  if (isMdxNode(node) && node.frontmatter.image) {
    console.log(node.frontmatter.image);
    createNodeField({
      node,
      name: 'localFile',
      value: node.frontmatter.image.id,
    });
  }

  if (isMdxNode(node) && node.frontmatter.featuredImgUrl) {
    const fileNode = await createRemoteFileNode({
      url: node.frontmatter.featuredImgUrl, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      getCache,
    });
    // if the file was created, extend the node with "localFile"
    if (fileNode) {
      createNodeField({ node, name: 'localFile', value: fileNode.id });
    }
  }
  */

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
