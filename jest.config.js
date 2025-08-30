const { resolve } = require('path');

module.exports = {
    rootDir: resolve(__dirname, 'src'),
    displayName: 'root-tests',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    testEnvironment: 'node',
    clearMocks: true,
    preset: 'ts-jest',
    moduleNameMapper: {
        '@src/(.*)': '<rootDir>/src/$1',
        '@tests/(.*)': '<rootDir>/tests/$1',
    },
};