import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'yaml';
import { SourceNodesArgs } from 'gatsby';
import { createRemoteFileNode } from 'gatsby-source-filesystem';
import { createSlug, validURL } from './utils';
import { AuthorBare } from '../types';

export default function sourceNodes({
  actions,
  createNodeId,
  createContentDigest,
  getCache,
}: SourceNodesArgs) {
  const { createNode } = actions;
  const authorsFile = path.resolve(__dirname, '../content/authors.yml');
  const dir = path.dirname(authorsFile);
  const authors: AuthorBare[] = yaml.parse(
    fs.readFileSync(authorsFile, 'utf8')
  );

  authors.forEach(async (author) => {
    const data: Record<string, unknown> = {
      ...author,
      dir,
      slug: createSlug('author', author.name),
    };
    const nodeId = createNodeId(`author-${author.name}`);
    const { avatar } = author;
    if (avatar) {
      if (validURL(avatar)) {
        const remoteFileNode = await createRemoteFileNode({
          url: avatar,
          parentNodeId: nodeId,
          createNode,
          createNodeId,
          getCache,
        });
        if (remoteFileNode) {
          data.image___NODE = remoteFileNode.id;
        }
      }
    }

    const nodeContent = JSON.stringify(data);

    const nodeMeta = {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `Author`,
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(data),
      },
    };

    const node = { ...data, ...nodeMeta };
    createNode(node);
  });
}
