# GitHub Action with Docker

Based on: https://help.github.com/en/articles/creating-a-docker-container-action

### Usage:

[Test workflow](../.github/workflows/github-actions-docker.yml)

```yml
# .github/workflows/test.yml

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: thisismydesign/basics/github-actions-docker
```
