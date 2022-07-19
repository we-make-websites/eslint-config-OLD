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
    // require('./rules/formatting'),
    require('./rules/problems'),
    require('./rules/suggestions'),
    require('./rules/vue'),
    {
      'array-bracket-newline': ['error', {
        minItems: 3,
        multiline: true,
      }],
      'array-element-newline': ['error', 'consistent'],
      'arrow-spacing': ['error', {
        before: true,
        after: true,
      }],
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', '1tbs'],
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': ['error', {
        before: false,
        after: true,
      }],
      'comma-style': ['error', 'last'],
      'computed-property-spacing': ['error', 'never'],
      'dot-location': ['error', 'property'],
      'eol-last': ['error', 'always'],
      'func-call-spacing': ['error', 'never'],
      'function-call-argument-newline': ['error', 'consistent'],
      'function-paren-newline': ['error', 'multiline'],
      'generator-star-spacing': ['error', {
        before: true,
        after: false,
      }],
      'implicit-arrow-linebreak': ['error', 'beside'],
      'indent': ['error', 2, {
        SwitchCase: 1,
      }],
      'jsx-quotes': ['error', 'prefer-double'],
      'key-spacing': ['error', {
        afterColon: true,
        beforeColon: false,
        mode: 'strict',
      }],
      'keyword-spacing': ['error', {
        before: true,
        after: true,
      }],
      'line-comment-position': ['error', {
        position: 'above',
      }],
      'linebreak-style': ['error', 'unix'],
      'lines-around-comment': ['error', {
        beforeBlockComment: true,
        ignorePattern: 'webpack'
      }],
      'lines-between-class-members': ['error', 'always'],
      'max-len': ['error', {
        code: 80,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        tabWidth: 2,
      }],
      'max-statements-per-line': ['error', {
        max: 1,
      }],
      'object-curly-spacing': ['error', 'always'],
      'semi': ['error', 'never'],
    },
    {
      'import/no-anonymous-default-export': 'off',
      'import/order': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['warn', {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      }],
    },
  ),
}
