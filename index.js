// Rules are grouped by the same sections as http://eslint.org/docs/rules/

const possibleErrors = {
  // Warn when `console` is used
  'no-console': 1,

  // No multiline statements that look like separate statements
  'no-unexpected-multiline': 2
};


const bestPractices = {
  // Require curly braces around multi-line blocks
  curly: [2, 'multi-line'],

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

  // Empty Block Statements
  'no-empty': 1,

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

  // No multiple spaces (except indentation)
  'no-multi-spaces': 2,

  // No reassigning native/builtin objects
  'no-native-reassign': 2,

  // No unused expressions (e.g. `"Hello world";` )
  'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],

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
  // Avoid leading/trailing spaces in arrays
  'array-bracket-spacing': 2,

  // Use leading/trailing spaces within blocks
  'block-spacing': 2,

  // Use One True Brace Style, with single-line blocks allowed
  'brace-style': [2, '1tbs', { allowSingleLine: true }],

  // Use camelCase variable naming
  camelcase: 2,

  // Use spaces after commas, not before
  'comma-spacing': 2,

  // Use commas are at the of the line, not the beginning
  'comma-style': 2,

  // Use a line terminator at the end of every file
  'eol-last': 2,

  // Two-space indentation, always
  indent: [2, 2, {SwitchCase: 1}],

  // Use whitespace after colons in object keys
  'key-spacing': 2,

  // Warn when `continue` is used
  'no-continue': 1,

  // Disallow `if` as the only statement in an `else` block
  'no-lonely-if': 2,

  // No mixing tabs and spaces
  'no-mixed-spaces-and-tabs': 2,

  // No spaces in function calls
  'no-spaced-func': 2,

  // No trailing spaces at the end of the line
  'no-trailing-spaces': 2,

  // Allow dangling underscores
  'no-underscore-dangle': 0,

  // Always use spaces inside of curly braces
  'object-curly-spacing': [2, 'always'],

  // No combining `var` declarations
  'one-var': [2, 'never'],

  // No quotes around keys when unnecessary
  'quote-props': [2, 'as-needed'],

  // Strings are single-quoted, unless doing so would require escaping
  quotes: [2, 'single', 'avoid-escape'],

  // No spaces before semicolons; always spaces after
  'semi-spacing': 2,

  // Always use semicolons
  semi: 2,

  // Always use a space after keywords
  'space-after-keywords': 2,

  // Disallow space before function parentheses
  'space-before-function-paren': [2, 'never'],

  // Always use a space before keywords
  'space-before-keywords': 2,

  // Never use leading/trailing spaces in parentheses
  'space-in-parens': 2,

  // Use spaces around infix operators
  'space-infix-ops': 2,

  // Use spaces following certain keywords
  'space-return-throw-case': 2,

  // Use spaces following unary operators (e.g. `new`)
  'space-unary-ops': 2,
};


const es6 = {
  // Use spaces around arrows
  'arrow-spacing': 2,

  // Ensure `super()` is used in subclasses
  'constructor-super': 2,

  // Ensure the generator asterisk is after the space
  'generator-star-spacing': 2,

  // Do not overwrite class definitions
  'no-class-assign': 2,

  // Do not modify variables declared with `const`
  'no-const-assign': 2,

  // Don't duplicate class members
  'no-dupe-class-members': 2,

  // Don't refer to `this` before calling `super()` in constructors
  'no-this-before-super': 2,

  // Use `const` whenever a variable is not modified
  'prefer-const': 2,

  // Warn when `apply` is used where the spread operator could be
  'prefer-spread': 1,

  // Do not use `var`
  'no-var': 2,
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
