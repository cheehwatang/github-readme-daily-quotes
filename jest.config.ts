import { Config } from '@jest/types';

const baseDir = '<rootDir>/src/app';
const baseTestDir = '<rootDir>/src/test';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom: [`${baseDir}/**/*.ts`, '<rootDir>/api/*.ts'],
	testMatch: [`${baseTestDir}/**/*.ts`, '<rootDir>/api/index.test.ts'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
	coveragePathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/src/app/fonts/',
		'<rootDir>/src/app/config/',
		'<rootDir>/src/app/themes/',
	],
};

export default config;
