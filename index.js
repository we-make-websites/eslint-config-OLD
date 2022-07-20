const merge = require('merge')

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
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
    'unused-imports',
  ],
  root: true,
  rules: merge(
    require('./rules/formatting'),
    require('./rules/problems'),
    require('./rules/suggestions'),
    require('./rules/vue'),
    {
      'import/no-anonymous-default-export': 'off',
      'import/order': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': ['warn', {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      }],
    },
  ),
}
