import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'yaml';
import { SourceNodesArgs } from 'gatsby';
import { Author } from '../types';

export default function sourceNodes({
  actions,
  createNodeId,
  createContentDigest,
}: SourceNodesArgs) {
  const { createNode } = actions;
  const authorsFile = path.resolve(__dirname, '../data/authors.yml');
  const authors: Author[] = yaml.parse(fs.readFileSync(authorsFile, 'utf8'));

  authors.forEach((author) => {
    const nodeContent = JSON.stringify(author);

    const nodeMeta = {
      id: createNodeId(`author-${author.name}`),
      parent: null,
      children: [],
      internal: {
        type: `Author`,
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(author),
      },
    };

    const node = {...author, ...nodeMeta};
    createNode(node);
  });
}
