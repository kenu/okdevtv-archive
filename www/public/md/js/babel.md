# Babel
* JavaScript Compiler
* https://babeljs.io
* ES2015 and beyond
* JSX and React
* Type Annotations (Flow and TypeScript)
* Pluggable
* Debuggable
* Spec Compliant
* Compact

```js
// Babel Input: ES2015 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

## install

```
npm init -y
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

* `babel.config.js`

```js
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
```

## run

```
./node_modules/.bin/babel src --out-dir lib
```

