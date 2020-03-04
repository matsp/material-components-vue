module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  transform: {
    '.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@material)'
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue'
  ],
  moduleNameMapper: {
    '.+\\.(css|less|scss)$': 'babel-jest',
    '@components(.*)$': '<rootDir>/components$1'
  }
}
