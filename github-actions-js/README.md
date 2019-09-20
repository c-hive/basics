# GitHub Action with Native JS

Based on: https://help.github.com/en/articles/creating-a-javascript-action

### Usage:

[Test workflow](../.github/workflows/github-actions-js.yml)

```yml
# .github/workflows/test.yml

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: c-hive/basics/github-actions-js
```
