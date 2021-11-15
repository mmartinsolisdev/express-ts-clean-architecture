const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'node',
  moduleNameMapper: {
    "@exmpl/(.*)": "<rootDir>/src/$1"
  },
  transform: tsjPreset.transform,
};
