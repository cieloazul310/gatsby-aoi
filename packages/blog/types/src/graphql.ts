import type { Node } from 'gatsby';
import type { GatsbyIterable } from 'gatsby/dist/datastore/common/iterable';

export type GatsbyNodeModelFindArgs = {
  query?: {
    [key: string]: Record<string, unknown>;
  };
  type?: string;
};
export type PageDependencies = { path: string; connectionType?: string };

export type GatsbyNodeModel = {
  findAll: <T extends Node>(
    args: GatsbyNodeModelFindArgs,
    pageDependencies?: PageDependencies
  ) => Promise<{
    entries: GatsbyIterable<T>;
    totalCount: () => Promise<number>;
  }>;

  findOne: <T extends Node>(
    args: GatsbyNodeModelFindArgs,
    pageDependencies?: PageDependencies
  ) => Promise<T | null>;

  findRootNodeAncestor: <T extends Node>(
    source: Node,
    predicate?: (node: Node) => boolean
  ) => T | null;

  getNodeById: <T extends Node>(
    args: Partial<{ id: string; type: string }>,
    pageDependencies?: PageDependencies
  ) => T | null;
};

export type GatsbyGraphQLContext = {
  nodeModel: GatsbyNodeModel;
};
