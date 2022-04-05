module.exports = {
  rootDir: '../../src',
  preset: 'ts-jest',
  restoreMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/test/setup-after.ts'],
  moduleDirectories:['<rootDir>/src','node_modules'],
  transform: {
    "node_modules//.+\\.(j|t)sx?$": "ts-jest"
  },
  transformIgnorePatterns: [
    // Change MODULE_NAME_HERE to your module that isn't being compiled
    "/node_modules/(?!src).+\\.js$"
  ]
};
