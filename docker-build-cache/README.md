# Docker build cache

Caching dependencies during build steps using the [experimental `buildkit` feature](https://github.com/moby/moby/issues/14080) of Docker. This example uses NPM, JavaScript's package manager. It caches the `/root/.npm` folder which is in turn not included the final image. Note that providing the path `~/.npm` doesn't work.

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
DOCKER_BUILDKIT=1 docker build . --progress plain --no-cache
```

Modify `package.json` (e.g. remove a dependency) and run the command again. Notice that the previously downloaded dependency is loaded from cache and is not re-installed.
