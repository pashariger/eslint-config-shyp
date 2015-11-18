// Rules are grouped by the same sections as http://eslint.org/docs/rules/

const possibleErrors = {
  // Warn when `console` is used
  'no-console': 1,

  // No multiline statements that look like separate statements
  'no-unexpected-multiline': 2
};


const bestPractices = {
  // Never omit curly braces around blocks
  curly: 2,

  // Use dot notation wherever possible
  'dot-notation': 2,

  // Use === and !== in all cases
  eqeqeq: 2,

  // Do not use arguments.caller / arguments.callee
  'no-caller': 2,

  // Disallow lexical declarations in case clauses
  'no-case-declarations': 2,

  // Do not use `eval`
  'no-eval': 2,

  // Do not extend native/builtin objects
  'no-extend-native': 2,

  // Do not use `bind` unnecessarily
  'no-extra-bind': 2,

  // No leading or trailing decimal points in numeric literals
  'no-floating-decimal': 2,

  // No short-notation coercion (e.g. with `~` or `!!`)
  'no-implicit-coercion': 2,

  // No siblings of `eval` (e.g. `new Function('..')`)
  'no-implied-eval': 2,

  // No usage of `this` outside of classes
  'no-invalid-this': 2,

  // Warn when "magic numbers" are used
  'no-magic-numbers': 1,

  // No multiple spaces (except indentation)
  'no-multi-spaces': 2,

  // No reassigning native/builtin objects
  'no-native-reassign': 2,

  // No `with` statements
  'no-with': 2
};


const variables = {
  // No deleting variables
  'no-delete-var': 2,

  // No shadowing restricted names (e.g. `arguments`)
  'no-shadow-restricted-names': 2,

  // No shadowing variables declared in the outer scope
  'no-shadow': 2,

  // No initializing variables to `undefined
  'no-undef-init': 2,

  // No using variables before they're defined
  'no-use-before-define': 2
};


const node = {

};


const stylistic = {
  // Place opening braces on the same line as their declaration
  'brace-style': 2,

  // Strings are single-quoted, unless doing so would require escaping
  quotes: [2, 'single', 'avoid-escape']


};


const es6 = {

};

module.exports = {
  extends: ['eslint:recommended'],

  env: {
    browser: true,
    node: true,
    jasmine: true,
    es6: true,
  },

  rules: Object.assign({}, possibleErrors, bestPractices, variables, stylistic, node, es6)
};
