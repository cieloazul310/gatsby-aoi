require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});

exports.createPages = require('./gatsby-node/index').createPages;

exports.createSchemaCustomization =
  require('./gatsby-node/index').createSchemaCustomization;

exports.onCreateNode = require('./gatsby-node/index').onCreateNode;

exports.sourceNodes = require('./gatsby-node/index').sourceNodes;
