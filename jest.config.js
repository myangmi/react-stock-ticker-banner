const jestConfig = require('@cerner/jest-config-terra');

module.exports = {
  ...jestConfig,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/mocks/fileMock.js',
    '\\.(css|sass|scss)$': '<rootDir>/tests/mocks/styleMock.js',
  },
  setupFiles: [
    './jest.enzymeSetup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  moduleDirectories: [
    'node_modules',
  ],
};
