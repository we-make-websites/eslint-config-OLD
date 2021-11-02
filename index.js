module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended'
  ],
  globals: {
    geoip2: true,
    IntersectionObserver: true,
    Intl: true,
    Shopify: true,
    URLSearchParams: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  plugins: [
    '@babel',
  ],
  root: true,
  rules: {
    'array-bracket-newline': ['error', {
      minItems: 3,
      multiline: true
    }],
    'array-element-newline': ['error', {
      minItems: 3,
      multiline: true
    }],
    'camelcase': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'id-length': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/order': 'off',
    'lines-around-comment': ['error', { ignorePattern: 'webpack' }],
    'no-process-env': 'off',
    'object-curly-spacing': ['error', 'always'],
    'semi': ['error', 'never'],
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-html': 'off',
  },
}