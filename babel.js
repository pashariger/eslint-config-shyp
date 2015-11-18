const base = require('./index');

const plugins = (base.plugins || []).concat('react');

const rules = Object.assign({}, base.rules, {
  // Props are sorted alphabetically
  'react/jsx-sort-props': 2
});

module.exports = Object.assign({}, base, {
  parser: 'babel-eslint',
  plugins: plugins
})
