module.exports = {
  'accessor-pairs': ['warn', {
    setWithoutGet: true,
  }],
  // Interferes with minimising line length
  'arrow-body-style': 'off',
  'block-scoped-var': 'warn',
  'camelcase': ['error', {
    ignoreDestructuring: true,
    properties: 'always',
  }],
  'capitalized-comments': ['error', 'always'],
  'class-methods-use-this': 'off',
  // Can't determine appropriate level of complexity
  'complexity': 'off',
  'consistent-return': 'warn',
  'consistent-this': 'off',
  'curly': 'error',
  // Switch cases don't always need default
  'default-case': 'off',
  'default-case-last': 'error',
  // Would specify order of parameters passed to function
  'default-param-last': 'off',
  'dot-notation': 'error',
  'eqeqeq': ['error', 'always'],
  'func-name-matching': ['error', 'always'],
  'func-names': ['error', 'always'],
  'func-style': ['error', 'declaration'],
  'grouped-accessor-pairs': 'warn',
  'guard-for-in': 'off',
  'id-denylist': 'off',
  'id-length': ['warn', {
    min: 2,
    properties: 'never',
  }],
  'id-match': 'off',
  'init-declarations': 'off',
  'max-classes-per-file': 'off',
  'max-depth': ['error', {
    max: 3,
  }],
  'max-lines': 'off',
  'max-lines-per-function': 'off',
  'max-nested-callbacks': 'off',
  'max-params': ['error', {
    max: 4,
  }],
  'max-statements': 'off',
  'multiline-comment-style': ['error', 'starred-block'],
  'new-cap': ['error', {
    capIsNew: false,
    newIsCap: true,
  }],
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-confusing-arrow': 'error',
  'no-console': 'warn',
  'no-continue': 'off',
  'no-div-regex': 'error',
  'no-else-return': ['error', {
    allowElseIf: false
  }],
  'no-empty-function': 'error',
  'no-eq-null': 'off',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'off',
  'no-extra-label': 'error',
  'no-floating-decimal': 'error',
  'no-implicit-coercion': 'error',
  'no-implicit-globals': 'off',
  'no-implied-eval': 'error',
  'no-inline-comments': 'error',
  'no-invalid-this': 'off',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'off',
  'no-magic-numbers': 'off',
  'no-mixed-operators': 'error',
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'off',
  'no-new-func': 'error',
  'no-new-object': 'error',
  'no-new-wrappers': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': 'error',
  'no-plusplus': 'off',
  'no-proto': 'error',
  'no-restricted-exports': 'off',
  'no-restricted-globals': 'off',
  'no-restricted-imports': ['warn', {
    paths: [
      {
        name: 'axios',
        message: 'Use fetch instead',
      },
      {
        name: 'moment',
        message: 'Moment is deprecated, we recommend Intl.DateTimeFormat or date-fns',
      },
    ],
  }],
  'no-restricted-properties': 'off',
  'no-restricted-syntax': 'off',
  'no-return-assign': 'error',
  'no-return-await': 'error',
  'no-script-url': 'error',
  'no-sequences': 'error',
  'no-shadow': 'error',
  'no-ternary': 'off',
  'no-throw-literal': 'error',
  'no-undef-init': 'error',
  'no-undefined': 'error',
  'no-underscore-dangle': 'error',
  'no-unneeded-ternary': 'error',
  'no-unused-expressions': 'error',
  'no-useless-call': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'no-warning-comments': 'warn',
  'object-shorthand': 'error',
  'one-var': 'off',
  'one-var-declaration-per-line': ['error', 'always'],
  'operator-assignment': ['error', 'always'],
  'prefer-arrow-callback': 'error',
  'prefer-const': 'warn',
  // To complicated to handle all scenarios
  'prefer-destructuring': 'off',
  'prefer-exponentiation-operator': 'error',
  'prefer-named-capture-group': 'warn',
  'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': 'error',
  // Use a mix for readability
  'prefer-regex-literals': 'off',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'quote-props': ['error', 'as-needed'],
  'radix': ['error', 'as-needed'],
  'require-await': 'error',
  'require-unicode-regexp': 'error',
  'sort-imports': ['error', {
    allowSeparatedGroups: true,
    ignoreCase: true,
    ignoreDeclarationSort: true,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
  }],
  'sort-keys': ['error', 'asc', {
    caseSensitive: false,
    minKeys: 3,
    natural: true,
  }],
  'sort-vars': 'error',
  'spaced-comment': ['error', 'always'],
  // Needed for Basis plugins
  'strict': 'off',
  'symbol-description': 'error',
  // Prefer vars to be defined where needed
  'vars-on-top': 'off',
  yoda: ['error', 'never'],
}
