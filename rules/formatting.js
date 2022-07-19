module.exports = {
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
  'lines-around-comment': ['error', {
    ignorePattern: 'webpack'
  }],
  'object-curly-spacing': ['error', 'always'],
  'semi': ['error', 'never'],
}
