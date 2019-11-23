# GitHub Actions Workflow with Flutter installation cache

### Usage:

[Test workflow](../.github/workflows/flutter-install-cache.yml)

Only works until `v1.2.1` on Ubuntu because of cache size limits. The main size of the Flutter SDK comes from Dart. The problem there is that Dart isn't available natively on the runners (see [1](https://github.com/actions/starter-workflows/blob/c8833c388758df563b53b83ef864fd2a1ee1f701/ci/dart.yml) and [2](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/software-installed-on-github-hosted-runners)). However the Dart SDK in only around 200 MB, so one could definitely build an action which can be cached. It would involve setting up Dart and Flutter separately. Flutter possible from source as I'm not aware of any SDKs not containing Dart.

Some resources:
- https://dart.dev/get-dart
- https://dart.dev/tools/sdk/archive
- https://github.com/flutter/flutter/wiki/Flutter-Installation-Bundles
