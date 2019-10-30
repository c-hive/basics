# Docker build cache

Caching dependencies during build steps using the [experimental `buildkit` feature](https://github.com/moby/moby/issues/14080) of Docker. This examples uses Bundler, Ruby's package manager.

*NOTE: the final image will not contain the cached dependencies!*

## Prerequisites

Follow this guide to enable experimental features and buildkit on Docker server: https://github.com/moby/buildkit/blob/4f4e03067523b2fc5ca2f17514a5e75ad63e02fb/frontend/dockerfile/docs/experimental.md

Make sure that experimental features are enabled on the server:

```
$ sudo docker version
# ...
Server: Docker Engine - Community
# ...
Experimental:     true
# ...
```

## Usage

Run (ubuntu)

```
sudo DOCKER_BUILDKIT=1 docker build . --progress plain
```

Modify `Gemfile` (e.g. remove a gem) and run the command again. Notice that the previously downloaded gem is loaded from cache and is not re-installed.
