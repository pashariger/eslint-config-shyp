# eslint-config-shyp

An [eslint shareable config](http://eslint.org/docs/developer-guide/shareable-configs) for Shyp's web projects.

This is a living repository; feel free to propose changes via pull request.

## Usage

In your new project:

```
$ npm install --save-dev eslint eslint-config-shyp
```

Then add an `.eslintrc`:

```
{
  "extends": "eslint-config-shyp"
}
```

And overwrite rules as needed for your project:
```
{
  "extends": "eslint-config-shyp",
  "rules": {
    "quotes": [2, "double"]
  }
}
```

Then lint at your leisure:
```
$ $(npm bin)/eslint .

/file.js
  1:1  error  Strings must use singlequote  quotes

```

## Guidelines

- The default configuration is fairly prescriptive. You can overwrite this with
  rules that work for your projects, but if you find yourself disabling or
  changing a specific rule often, let's talk about it! The goal is to strike a
  balance between consistency and bikeshedding.
- When contributing new rules to this project, make sure there's a short comment
  explaining what this is enforcing (or not enforcing).
