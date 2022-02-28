// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  coverageReporters: ['text'],
  collectCoverageFrom: ['src/**/*.ts'],
  collectCoverage: true,
  testMatch: ['<rootDir>/__test__/**/*spec.ts'],
}
