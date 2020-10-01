# Docker Multistage Cache Example

This is an example Django project to illustrate the usage of building intermediate stages and leveraging their built image for caching.

## Prerequisites

- Docker installed.

## Usage

- Build the intermediate dependency stages into separate images with `--target` being the stage's name and a `-t` tag that you could later identify it with. I.e:

  ```bash
  docker build --target=dependencies -t django_example:dep .
  ```

- Build the final image use `--cache-from` listing the intermediate image. I.e:

  ```bash
  docker build --cache-from django_example:dev -t django_example:final .
  ```
