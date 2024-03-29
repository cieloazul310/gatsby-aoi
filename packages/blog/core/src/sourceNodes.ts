import * as fs from "fs";
import * as path from "path";
import * as yaml from "yaml";
import type { SourceNodesArgs } from "gatsby";
import { createRemoteFileNode } from "gatsby-source-filesystem";
import {
  withDefaults,
  createSlug,
  validURL,
} from "@cieloazul310/gatsby-theme-aoi-blog-utils";
import type {
  Author,
  ThemeOptions,
} from "@cieloazul310/gatsby-theme-aoi-blog-types";

/**
 * sourceNodes で何をするか
 *
 * 1. プロジェクト内の authors.yml から `Author` ノードを生成
 * 2. Author の avatar がリモートファイルの場合 remoteFileNode を生成する
 */
export default async function sourceNodes(
  { actions, createNodeId, createContentDigest, getCache }: SourceNodesArgs,
  themeOptions: ThemeOptions,
) {
  const { basePaths, contentPath } = withDefaults(themeOptions);
  const { createNode } = actions;

  const authorsFile = path.resolve(contentPath, "authors.yml");
  const dir = path.dirname(authorsFile);
  if (!fs.existsSync(authorsFile)) return;

  const authors: Author<"bare">[] = yaml.parse(
    fs.readFileSync(authorsFile, "utf8"),
  );

  await Promise.all(
    authors.map(async (author) => {
      const data: Record<string, unknown> = {
        ...author,
        dir,
        slug: createSlug(basePaths.author, author.name),
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
    }),
  );
}
