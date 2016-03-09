const babel = require('./babel');

const plugins = (babel.plugins || []).concat('react');

const rules = Object.assign({}, babel.rules, {
  // Prefer single quotes in JSX attributes
  'jsx-quotes': [2, 'prefer-single'],

  'react/jsx-sort-props': 2,
  'react/jsx-boolean-value': 0,
  'react/jsx-no-undef': 2,
  'react/jsx-sort-prop-types': 2,
  'react/jsx-sort-props': 2,
  'react/jsx-uses-react': 2,
  'react/jsx-uses-vars': 2,
  'react/no-did-mount-set-state': 2,
  'react/no-did-update-set-state': 2,
  'react/no-multi-comp': 2,
  'react/no-unknown-property': 2,
  'react/prop-types': 2,
  'react/react-in-jsx-scope': 2,
  'react/self-closing-comp': 2,
  'react/wrap-multilines': 2,
});

module.exports = Object.assign({}, babel, {
  plugins: plugins,
  rules: rules
})
