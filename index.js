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
    // require('./rules/problems'),
    // require('./rules/suggestions'),
    // require('./rules/unused-imports'),
    // require('./rules/vue'),

    // Formatting
    {
      'array-bracket-newline': ['error', {
        minItems: 3,
        multiline: true,
      }],
      'array-bracket-spacing': ['error', 'never'],
      'array-element-newline': ['error', 'consistent'],
      'arrow-spacing': ['error', {
        after: true,
        before: true,
      }],
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', '1tbs'],
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': ['error', {
        after: true,
        before: false,
      }],
      'comma-style': ['error', 'last'],
      'computed-property-spacing': ['error', 'never'],
      'dot-location': ['error', 'property'],
      'eol-last': ['error', 'always'],
      'func-call-spacing': ['error', 'never'],
      'function-call-argument-newline': ['error', 'consistent'],
      'function-paren-newline': ['error', 'multiline-arguments'],
      'generator-star-spacing': ['error', {
        after: false,
        before: true,
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
      // Too inflexible
      'max-len': 'off',
      'max-statements-per-line': ['error', {
        max: 1,
      }],
      'multiline-ternary': ['error', 'always-multiline'],
      'new-parens': ['error', 'always'],
      // Doesn't enforce newline per chained call, just those over limit
      'newline-per-chained-call': 'off',
      'no-extra-parens': ['error', 'all', {
        nestedBinaryExpressions: false,
      }],
      'no-multi-spaces': ['error', {
        exceptions: {
          Property: false,
        },
      }],
      'no-multiple-empty-lines': ['error', {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      }],
      'no-tabs': ['error', {
        allowIndentationTabs: false,
      }],
      'no-trailing-spaces': ['error', {
        ignoreComments: false,
        skipBlankLines: false,
      }],
      'no-whitespace-before-property': 'error',
      'nonblock-statement-body-position': ['error', 'beside'],
      'object-curly-newline': ['error', {
        consistent: true,
        multiline: true,
      }],
      'object-curly-spacing': ['error', 'always'],
      'object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true,
      }],
      'operator-linebreak': ['error', 'after', {
        overrides: {
          ':': 'before',
          '?': 'before',
        },
      }],
      // Interferes with padding in if ... else and try ... catch
      'padded-blocks': 'off',
      // Sets line rules between given statements, does not depend on multiline
      'padding-line-between-statements': 'off',
      'quotes': ['error', 'single', {
        allowTemplateLiterals: true,
      }],
      'rest-spread-spacing': ['error', 'never'],
      'semi': ['error', 'never'],
      'semi-spacing': ['error', {
        after: false,
        before: false,
      }],
      'semi-style': 'off',
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': ['error', {
        int32Hint: false,
      }],
      'space-unary-ops': ['error', {
        nonwords: false,
        words: true,
      }],
      'switch-colon-spacing': ['error', {
        after: true,
        before: false,
      }],
      'template-curly-spacing': ['error', 'never'],
      'template-tag-spacing': ['error', 'always'],
      'unicode-bom': ['error', 'never'],
      // Unsure of significance
      'wrap-iife': 'off',
      'wrap-regex': 'error',
      'yield-star-spacing': ['error', {
        after: true,
        before: false,
      }]
    },

    // Problems
    {
      'array-callback-return': 'error',
      // Frequently use async promises
      'no-async-promise-executor': 'off',
      'no-await-in-loop': 'warn',
      'no-constant-binary-expression': 'error',
      'no-constructor-return': 'error',
      'no-duplicate-imports': 'error',
      'no-promise-executor-return': 'error',
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'no-unused-private-class-members': 'error',
      'no-use-before-define': ['error', {
        allowNamedExports: false,
        classes: true,
        functions: false,
        variables: true,
      }],
      // Don't fully understand this rule
      'require-atomic-updates': 'off',
    },

    // Suggestions
    {
      'accessor-pairs': ['warn', {
        setWithoutGet: true,
      }],
      // Interferes with minimising line length
      'arrow-body-style': 'off',
      'block-scoped-var': 'warn',
      'camelcase': ['error', {
        ignoreDestructuring: true,
        ignoreGlobals: false,
        ignoreImports: false,
        properties: 'never',
      }],
      'capitalized-comments': ['error', 'always', {
        ignorePattern: 'webpack',
      }],
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
      'func-names': ['error', 'as-needed'],
      // Interferes with Storybook
      'func-style': 'off',
      'grouped-accessor-pairs': 'warn',
      'guard-for-in': 'off',
      'id-denylist': 'off',
      'id-length': ['error', {
        exceptions: ['_', 'a', 'b'],
        min: 2,
        properties: 'never',
      }],
      'id-match': 'off',
      'init-declarations': 'off',
      'max-classes-per-file': 'off',
      'max-depth': ['error', {
        max: 4,
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
      // Interferes with Vue files
      'sort-keys': 'off',
      'sort-vars': 'error',
      'spaced-comment': ['error', 'always'],
      // Needed for Basis plugins
      'strict': 'off',
      'symbol-description': 'error',
      // Prefer vars to be defined where needed
      'vars-on-top': 'off',
      yoda: ['error', 'never'],
    },

    // Unused Imports
    {
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': ['warn', {
        args: 'after-used',
        vars: 'all',
      }],
    },

    // Vue
    {
      // v-html is useful
      'vue/no-v-html': 'off',
      'vue/block-lang': ['error', {
        script: {
          allowNoLang: true,
        },
      }],
      'vue/block-tag-newline': ['error', {
        maxEmptyLines: 1,
        multiline: 'consistent',
        singleline: 'consistent',
      }],
      'vue/component-name-in-template-casing': ['error', 'kebab-case', {
        registeredComponentsOnly: true,
      }],
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/define-macros-order': 'error',
      'vue/html-button-has-type': 'error',
      'vue/html-comment-content-newline': ['error', {
        multiline: 'always',
        singleline: 'never',
      }],
      'vue/html-comment-content-spacing': ['error', 'always'],
      'vue/html-comment-indent': ['error', 2],
      'vue/match-component-file-name': ['error', {
        extensions: ['vue'],
      }],
      'vue/match-component-import-name': 'error',
      // Want props to be next to each other
      'vue/new-line-between-multi-line-property': 'off',
      'vue/next-tick-style': ['error', 'promise'],
      'vue/no-bare-strings-in-template': 'error',
      // Boolean can be whatever
      'vue/no-boolean-default': 'off',
      'vue/no-duplicate-attr-inheritance': 'error',
      'vue/no-empty-component-block': 'error',
      'vue/no-multiple-objects-in-class': 'error',
      'vue/no-potential-component-option-typo': 'warn',
      // Use whatever block names
      'vue/no-restricted-block': 'off',
      'vue/no-restricted-call-after-await': 'error',
      'vue/no-restricted-class': ['warn', 'is-active', 'is-hidden', 'is-disabled', 'is-visible', 'is-loading'],
      // No restrictions
      'vue/no-restricted-component-options': 'off',
      'vue/no-restricted-custom-event': 'off',
      'vue/no-restricted-html-elements': ['warn',
        {
          element: 'button',
          message: 'Use <btn> component',
        },
        {
          element: 'img',
          message: 'Use <art-direction> or <responsive-image> components',
        },
        {
          element: 'marquee',
          message: 'Seriously?',
        },
      ],
      'vue/no-restricted-props': 'off',
      'vue/no-restricted-static-attribute': 'off',
      'vue/no-restricted-v-bind': 'off',
      'vue/no-static-inline-styles': 'error',
      'vue/no-template-target-blank': 'error',
      'vue/no-this-in-before-route-enter': 'error',
      // Cannot check globally registered components
      'vue/no-undef-components': 'off',
      // Doesn't work with Vuex
      'vue/no-undef-properties': 'off',
      'vue/no-unsupported-features': ['error', {
        version: '^3.2.0',
      }],
      'vue/no-unused-properties': 'error',
      'vue/no-unused-refs': 'error',
      'vue/no-useless-mustaches': 'error',
      'vue/no-useless-v-bind': 'error',
      // v-text is useful
      'vue/no-v-text': 'off',
      // Useful with <component is>
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/prefer-prop-type-boolean-first': 'error',
      'vue/prefer-separate-static-class': 'error',
      'vue/prefer-true-attribute-shorthand': 'error',
      'vue/require-direct-export': 'error',
      'vue/require-emit-validator': 'warn',
      // Excess busywork
      'vue/require-expose': 'off',
      'vue/require-name-property': 'error',
      'vue/script-indent': ['error', 2, {
        baseIndent: 0,
        switchCase: 1,
      }],
      // Interferes with section schemas
      'vue/sort-keys': 'off',
      // Classes can be in any order
      'vue/static-class-names-order': 'off',
      'vue/v-for-delimiter-style': ['error', 'of'],
      'vue/v-on-function-call': ['error', 'never'],
    },
  ),
}
