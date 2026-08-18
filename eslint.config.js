const reactNativeConfig = require('@react-native/eslint-config/flat');

module.exports = [
  ...reactNativeConfig,
  {
    ignores: [
      'android/',
      'ios/',
      'node_modules/',
      'coverage/',
      'dist/',
      'build/',
    ],
  },
];
