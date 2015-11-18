# eslint-config-shyp

An [eslint shareable config](http://eslint.org/docs/developer-guide/shareable-configs) for Shyp's web projects.

This is a living repository; feel free to propose changes via pull request.

## Usage

In your new project:

```
$ npm install --save-dev eslint eslint-config-shyp
```

Then add an `.eslintrc`, and overwrite rules as needed for your project:

```
{
  "extends": "eslint-config-shyp",
  "rules": {
    "quotes": [2, "double"]
  }
}
```

And lint at your leisure:
```
$ $(npm bin)/eslint .

/file.js
  1:1  error  Strings must use singlequote  quotes

```

## Usage with [Babel](https://babeljs.io/)

We provide a build with additional rules for projects compiled with Babel,
including rules for projects built on [React](https://facebook.github.io/react/).

Install similar to above, with the addition of:

```
$ npm install --save-dev babel-eslint eslint-plugin-react
```

Then, in your `.eslintrc`:

```
{
  "extends": "eslint-config-shyp/babel"
}
```

## Guidelines

- The default configuration is fairly prescriptive. You can overwrite this with
  rules that work for your projects, but if you find yourself disabling or
  changing a specific rule often, let's talk about it! The goal is to strike a
  balance between consistency and bikeshedding.
- When contributing new rules to this project, make sure there's a short comment
  explaining what this is enforcing (or not enforcing).
