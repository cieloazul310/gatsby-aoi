/* eslint @typescript-eslint/no-var-requires: off */
import * as fs from 'fs';
import { parse } from 'jsonc-parser';
import { pathsToModuleNameMapper, type JestConfigWithTsJest } from 'ts-jest';

const { compilerOptions } = parse(
  fs.readFileSync('./tsconfig.json').toString()
);

const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
});

const config: JestConfigWithTsJest = {
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
  },
  preset: 'ts-jest/presets/js-with-babel-esm',
  testEnvironment: 'node',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    ...paths,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby|gatsby-script|gatsby-link|url-join)/)`,
  ],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testEnvironmentOptions: {
    url: `http://localhost`,
  },
  setupFiles: [`<rootDir>/loadershim.js`],
};

export default config;
