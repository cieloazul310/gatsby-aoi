module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials', 
    'storybook-addon-material-ui5',
  ],
  /*
  webpackFinal(config) {
    delete config.resolve.alias['emotion-theming'];
    delete config.resolve.alias['@emotion/styled'];
    delete config.resolve.alias['@emotion/core'];
    return config;
  },
  framework: '@storybook/react',
  */
};
