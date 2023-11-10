module.exports = {
  root: true,
  extends: ["@cieloazul310/eslint-config-custom"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "arrow-body-style": "warn",
    "react/jsx-filename-extension": "warn",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
