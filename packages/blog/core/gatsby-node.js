/* eslint @typescript-eslint/no-var-requires: warn */
const {
  createPages,
  createResolvers,
  createSchemaCustomization,
  onCreateNode,
  sourceNodes,
} = require("./lib");

exports.createPages = createPages;
exports.createResolvers = createResolvers;
exports.createSchemaCustomization = createSchemaCustomization;
exports.onCreateNode = onCreateNode;
exports.sourceNodes = sourceNodes;
