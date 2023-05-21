import { Config } from '@jest/types';

const baseDir = '<rootDir>/src';
const apiDir = '<rootDir>/api';
const baseTestDir = '<rootDir>/test';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.ts`, `${apiDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.ts`],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/fonts/',
    '<rootDir>/src/config/',
    '<rootDir>/src/themes/',
  ],
};

export default config;
