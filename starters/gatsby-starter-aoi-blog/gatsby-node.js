/* eslint import/no-extraneous-dependencies: warn */
/* eslint @typescript-eslint/no-var-requires: warn */
require('ts-node').register();

exports.createPages = require('./gatsby-node/index').createPages;

exports.createResolvers = require('./gatsby-node/index').createResolvers;

exports.createSchemaCustomization =
  require('./gatsby-node/index').createSchemaCustomization;

exports.onCreateNode = require('./gatsby-node/index').onCreateNode;

exports.sourceNodes = require('./gatsby-node/index').sourceNodes;
