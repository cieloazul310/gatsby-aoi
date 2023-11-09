module.exports = {
  root: true,
  extends: ['@cieloazul310/eslint-config-custom', 'plugin:react/jsx-runtime'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/jsx-props-no-spreading': 'warn',
  },
};
