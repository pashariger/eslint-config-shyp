# eslint-config-shyp

An [eslint shareable config](http://eslint.org/docs/developer-guide/shareable-configs) for Shyp's web projects.

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

## Guidelines

- The default configuration is fairly prescriptive. You can overwrite this with
  rules that work for your projects, but if you find yourself disabling or
  changing a specific rule often, let's talk about it! The goal is to strike a
  balance between consistency and bikeshedding.
- When contributing new rules to this project, make sure there's a short comment
  explaining what this is enforcing (or not enforcing).
