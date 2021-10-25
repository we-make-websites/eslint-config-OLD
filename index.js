module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  root: true,
  rules: {
    'array-bracket-newline': ['error', {
      minItems: 2,
      multiline: true
    }],
    'array-element-newline': ['error', {
      minItems: 2,
      multiline: true
    }],
    'babel/camelcase': 'off',
    'babel/object-curly-spacing': ['error', 'always'],
    'babel/semi': ['error', 'never'],
    'id-length': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/order': 'off',
    'lines-around-comment': ['error', { ignorePattern: 'webpack' }],
    'no-process-env': 'off',
    'semi': ['error', 'never'],
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-html': 'off',
  },
}