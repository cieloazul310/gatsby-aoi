import type { Config } from 'jest';
/** @type {import('ts-jest').JestConfigWithTsJest} */
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@cieloazul310/(.*)$': '<rootDir>/packages/$1/src',
  },
};

export default config;
