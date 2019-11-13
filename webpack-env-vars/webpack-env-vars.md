# Webpack env vars

Environment variables in a Webpack-compiled file

### Usage:

[Test workflow](../.github/workflows/inline-rspec.yml)

```sh
yarn install
npx cross-env TEST='Hello World' node index.js
npx cross-env TEST='Hello World' webpack
node dist/main.js
```
