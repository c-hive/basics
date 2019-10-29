# Docker build cache

Caching dependencies during build steps using the [experimental `buildkit` feature](https://github.com/moby/moby/issues/14080) of Docker and [CLI build](https://github.com/docker/compose/pull/6865) support of `docker-compose`. This examples uses NPM, JavaScript's package manager.

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

Install `docker-compose` [1.25.0-rc3](https://github.com/docker/compose/releases/tag/1.25.0-rc3) or higher.

## Usage

Run

```
sudo DOCKER_BUILDKIT=1 COMPOSE_DOCKER_CLI_BUILD=1 docker-compose up --build
```

Modify `package.json` (e.g. remove a dependency) and run the command again. Notice that the previously downloaded dependency is loaded from cache and is not re-installed.
