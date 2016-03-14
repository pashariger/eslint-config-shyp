# eslint-config-shyp

An [eslint shareable config](http://eslint.org/docs/developer-guide/shareable-configs) for Shyp's web projects.

## Contributing

- All changes and proposals should be made in a pull request against this repo.
  Tag the `@shyp/web` team for discussion and do not merge changes without
  making sure everyone's in the loop - any updates here impact many projects.
- In general, we're very unlikely to add or modify rules in a way that
  contradicts earlier rules. Changes are generally to enforce something we've
  decided to avoid, or loosen a restriction that we've found an edge case for.
  The style prescribed here **may not match your personal preferences**, but
  we're aiming for consistency and codifying patterns that we already use, so
  unfortunately not everyone's tastes will match this at all times.

## Usage

Three configurations are currently provided:

### eslint-config-shyp

A baseline for linting ES2015+ projects.

Install via:
```
$ npm install --save-dev eslint eslint-config-shyp
```

Then in your `.eslintrc`:
```
{
  "extends": "eslint-config-shyp",
  ... overwrite any rules as necessary ...
}
```

### eslint-config-shyp/babel

A configuration for projects using [Babel](https://babeljs.io). 

Installation:
```
$ npm install --save-dev eslint eslint-config-shyp babel-eslint
``` 

eslintrc:
```
"extends": "eslint-config-shyp/babel"
```

### eslint-config-shyp/react

A configuration for projects using [React](https://facebook.github.io/react/).
Also uses Babel as the parser.

Installation:
```
$ npm install --save-dev eslint eslint-config-shyp babel-eslint eslint-plugin-react
```

eslintrc:
```
"extends": "eslint-config-shyp/react"
```
