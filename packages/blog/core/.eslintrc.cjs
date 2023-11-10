module.exports = {
  root: true,
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["@cieloazul310/eslint-config-custom"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
