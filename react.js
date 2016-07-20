const babel = require('./babel');

const plugins = (babel.plugins || []).concat('react');

const rules = Object.assign({}, babel.rules, {
  'jsx-quotes': [2, 'prefer-single'],
  'react/jsx-boolean-value': [2, 'never'],
  'react/jsx-curly-spacing': [2, 'never'],
  'react/jsx-first-prop-new-line': [2, 'multiline'],
  'react/jsx-indent': [2, 2],
  'react/jsx-indent-props': [2, 2],
  'react/jsx-no-duplicate-props': 2,
  'react/jsx-no-undef': 2,
  'react/jsx-sort-props': 2,
  'react/jsx-space-before-closing': 2,
  'react/jsx-uses-react': 2,
  'react/jsx-uses-vars': 2,
  'react/no-did-mount-set-state': 2,
  'react/no-did-update-set-state': 2,
  'react/no-multi-comp': 2,
  'react/no-unknown-property': 2,
  'react/prop-types': 2,
  'react/react-in-jsx-scope': 2,
  'react/self-closing-comp': 2,
  'react/sort-comp': [2, { order: [ 'static-methods', 'lifecycle', 'everything-else' ]}],
  'react/sort-prop-types': 2,
  'react/wrap-multilines': 2
});

module.exports = Object.assign({}, babel, {
  plugins: plugins,
  rules: rules
})
