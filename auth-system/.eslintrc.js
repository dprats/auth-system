module.exports = {
  env: {
    node: true,
    es6: true,
    jasmine: true,
    browser: true
  },
  extends: [
    'airbnb-base',
    // 'plugin:jasmine/recommended'
  ],
  plugins: [
    // 'vue',
    // 'jasmine'
  ],
  rules: {
    // 'vue/jsx-uses-vars': 2,
    'spaced-comment': 'off',
    'no-shadow': 'warn',
    'no-else-return': 'warn',
    'max-len': ['warn', { code: 200, ignoreComments: true }],
    'arrow-body-style': 'off',
    'no-trailing-spaces': ['warn', { skipBlankLines: true }],
    'no-template-curly-in-string': 'off',
    'newline-per-chained-call': 'off',
    'padded-blocks': 'off',
    'no-restricted-syntax': [
      // Copied from https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
      // Removed restriction on ForOf, needed for generators in some cases
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      // {
      //   selector: 'ForOfStatement',
      //   message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      // },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-underscore-dangle': 'off',
  },
  globals: {
    Logs: true,
    Service:true,
    Models: true,
    Policies: true,
    Queue: true,
    Env: true,
    Parse: true,
    google: true,
    Cookies: true,
    analytics: true,
    Rollbar: true,
  }
};
