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
    'unused-imports',
  ],
  root: true,
  rules: {
    'array-bracket-newline': ['error', {
      minItems: 3,
      multiline: true,
    }],
    'array-element-newline': ['error', 'consistent'],
    'camelcase': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'id-length': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/order': 'off',
    'lines-around-comment': ['error', { ignorePattern: 'webpack' }],
    'no-process-env': 'off',
    'no-undef': 'error',
    'no-unused-vars': 'off',
    'object-curly-spacing': ['error', 'always'],
    'semi': ['error', 'never'],
    'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': ['warn', {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'below',
    }],
    'vue/first-attribute-linebreak': 'error',
    'vue/no-multiple-template-root': 'off',
    'vue/no-reserved-props': ['error', {
      vueVersion: 3,
    }],
    'vue/no-v-html': 'off',
  },
}