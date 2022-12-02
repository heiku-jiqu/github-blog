---
title: Docker Intro
date: '2022-12-01'
---

# {title}

<script>
</script>

Docker is a platform that containerizes applications, and runs those containers. This allows developers to decouple applications from infrastructure.

For example, if you were building an app that requires a specific OS and/or external dependencies that are required to run your app (e.g. PostgreSQL, nginx, etc.), you can bundle it all up into a container.
This allows different people/environments to run the app (container) with just Docker as its dependency, instead of having to deal with having the correct OS, correct external dependencies, etc.

## key concepts

### Docker images

Images are templates with instructions for creating containers.
These instructions include what dependencies to install, setting environment and config variables, running any setup scripts, etc.

Images are often build on top of one another

    - e.g. you start with `ubuntu` image, install `python` in that ubuntu image, install `pytorch` package, install pretrained models.
    - or you can start with a published `python` image, and install your packages there.

Published images are available for download in Docker registries.

#### Dockerfile

`Dockerfile`s are text files that describe the instructions needed to build the image. It uses its own syntax to define every instruction to be executed to build the image.

### Docker containers

Containers are runnable instance of an image, and are created from an image. You can then start/stop/delete or manage the container however you like.
You can run multiple containers using the same image, and you can specify different configurations when running containers (on top of what is already specified in your image!).
For example, you can run two different node web server containers from the same `nodejs` image, but one exposes port 8888 and another exposes port 8899.

### Docker registries

Docker registries are where you find published docker images, akin to pypi / CRAN / crates.io.

### Docker daemon

This is the underlying `dockerd` process that helps you build images and run containers. It will listen for Docker API requests

### Docker client

The docker client `docker` is a "front-end" CLI that the user uses to interact with the Docker daemon. Running a `docker` command sends Docker API requests to `dockerd`.

### Docker compose

Docker compose is a tool that helps with running _multi-container_ Docker applications. You can specify how your multi-container app will need to be setup in a YAML file.

For example, your app requires a web server container, postgres container and mongodb container. Instead of installing all of those dependencies into one giant container, you split them up and scaffold them in your YAML file. This allows you to isolate your environments, and independently scale each service.

#### Difference between Kubernetes

Both docker compose and kubernetes 'bundles' multi-container applications. However, the key difference is docker compose is run on a _single-node_, whereas Kubernetes is a full multi-node container manager.

Think of docker compose as a tool for Proof-of-concepts as it does not help you solve the engineering and operational challenges of running a multi-container application in production environments. For example, what happens when one of your container goes down? Or if your entire node goes down? Kubernetes will automatically spin up a new one for you whilst docker compose will not.

## Dockerfile

### Commands

#### FROM

All dockerfile starts with the `FROM` command. It pulls the base image from Dockerhub to start to build your image.

```dockerfile
FROM apache/spark

# to specify a tag
FROM apache/spark:3.3.1
```

#### RUN

Runs a command or executable. It has two forms

```dockerfile
# Shell form (defaults to /bin/sh -c on Linux or cmd /S /C on Windows)
RUN <command>

# Exec form
RUN ["executable", "param1", "param2"]
```

#### CMD

Provides defaults for an executing container

```dockerfile
CMD ["executable", "param1", "param2"] # exec form
CMD ["param1", "param2"] # default parameters to ENTRYPOINT
CMD command param1 param2 # shell form
```

#### ENTRYPOINT

Configures a container that will run as an executable.
CMD will append its commands after ENTRYPOINT.
Setting ENTRYPOINT in your image will reset CMD from base image, so you need to redefine the CMD again.

#### COPY

Copies file from your native host into the container image.

```dockerfile
COPY <src> <dest>
COPY ["<src>", ... "<dest>"] # used when there are spaces in path
```

`<src>` path must be inside context of the build!

#### ADD

Copies file from your native host into the container image.
It has added utilities like being able to download files from URLs, and extracting contents of `.tar` files before copying into image.

**tip: use COPY as default, unless you need additional features of ADD**

#### ENV

Sets an environment variable

```dockerfile
ENV <key>=<value>
```

#### EXPOSE

```dockerfile
EXPOSE <port> [<port>/<protocol>]
```

Instructs Docker that container should listen on specified network ports at runtime.
Ports are not automatically published, and is intended to serve as a type of documentation between image builder and image runner.
To publish port on run time, use `-P` flag, or `-p` to explicitly map ports from containers to your localhost.

#### VOLUME

Creates a mount point at the directory specified and marks that directory as an external drive from native host (i.e. computer running the docker daemon) or other containers.

#### WORKDIR

Sets working directory for any `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, `ADD` instructions.

#### ARG

Defines a variable that users can pass at during `docker build`

#### ONBUILD

#### STOPSIGNAL

#### HEALTHCHECK

#### SHELL

#### USER

```dockerfile
USER <user>
USER <UID>
```

Sets the username/UID to use for the remainder of the Docker build stage.
This is important for security as Docker by default runs the container in root user if not specified by your image nor parent image.
Root user has UID=0.

#### LABEL

```

```
