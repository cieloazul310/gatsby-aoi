module.exports = {
  root: true,
  extends: ["@cieloazul310/eslint-config-custom"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "react/jsx-props-no-spreading": "warn",
  },
};
