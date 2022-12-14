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

---

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

Provides defaults for an executing container. The arguments will be appended to ENTRYPOINT.

```dockerfile
CMD ["executable", "param1", "param2"] # exec form
CMD ["param1", "param2"] # default parameters to ENTRYPOINT
CMD command param1 param2 # shell form
```

#### ENTRYPOINT

Configures a container that will run as an executable.
CMD will append its commands after ENTRYPOINT.
Setting ENTRYPOINT in your image will reset CMD from base image, so you need to redefine the CMD again.

```dockerfile
ENTRYPOINT ["executable", "param1", "param2"] # exec form
ENTRYPOINT command param1 param2 # shell form
```

#### COPY

Copies file from your native host into the container image.

```dockerfile
COPY <src>... <dest>
COPY ["<src>",... "<dest>"] # used when there are spaces in path
```

Multiple `<src>` can be specified, and the last argument will be treated as the `<dest>`.

All `<src>` relative paths must be inside context of the build!

#### ADD

Copies file from your native host into the container image.

```dockerfile
ADD <src>... <dest>
ADD ["<src>",... "<dest>"] # used when there are spaces in path
```

Compared to COPY, `ADD` has added utilities like:

- being able to download files from URLs then copying them into the image
- extracting contents of `.tar` files before copying into image
- adding contents from a git repo

**tip: use COPY as default, unless you need the additional features of ADD.** This is to prevent unwanted side effects!

Multiple `<src>` can be specified, and the last argument will be treated as the `<dest>`.

All `<src>` relative paths must be inside context of the build!

#### ENV

Sets an environment variable

```dockerfile
ENV <key>=<value>
```

#### EXPOSE

Instructs Docker that container should listen on specified network ports at runtime.

```dockerfile
EXPOSE <port> [<port>/<protocol>]
```

**Ports are not automatically published**, and this command is intended to serve as a type of documentation between image builder and image runner.
To publish port on run time, use `-P` flag (which maps exposed ports in container to random ports in native host machine), or `-p` to explicitly map ports from containers to your localhost.

#### VOLUME

Marks the directory(s) within the container as an external drive from native host or other containers.
This allows files to be accessed from outside the containers.

```dockerfile
VOLUME <path/to/container/dir> <path/to/container/dir2> # space separated paths
VOLUME ["</path/to/dir1>", "</path/to/dir2>"] #json array
```

Note that where this (container) directory maps to in your native host is **specified when you build or run the container**.

#### WORKDIR

Sets working directory for any `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, `ADD` instructions that follows.

```dockerfile
WORKDIR /path/to/workdir # absolute paths, i.e. starts with /
WORKDIR path/to/child/dir # relative path, i.e. does not start with /
```

Multiple `WORKDIR` can be used in a dockerfile.

If not specified, default directory is `/`.
But if you are pulling from an image, chances are `WORKDIR` already been set in your base image and it will be brought over.

**tip: explicitly set `WORKDIR` to prevent unintended operations in unknown dirs**

It is also possible to resolve env variables previously set by `ENV`, e.g. `WORKDIR $DIRPATH_ENV_VAR`.

#### ARG

Defines a variable that users can pass values into during `docker build` by using `--build-arg <argname>=<value>` flag.

```dockerfile
ARG <name>[=<default value>]
```

`ENV` variables will overwrite `ARG` variables if they are the same name (at the point where the `ENV` variable is defined).

#### ONBUILD

Adds a trigger to the image that will execute dockerfile instructions when the current image is used as the base for another build.

```dockerfile
ONBUILD <INSTRUCTION>
```

This command is usful when when you are building a base image that will be distributed to other people, and instructions that depend on other people's files needs to be run. Example, you could add:

```dockerfile
# copy host files to /contents in the container
ONBUILD ADD . /contents

# tar all files in the /contents directory in the container to archive.tar in the container
ONBUILD RUN tar -cfv archive.tar /contents
```

The instructions specified are triggered _immediately_ after the `FROM` instruction in the child image.

`ONBUILD` triggers are not inherited by children images.

#### STOPSIGNAL

Sets the system call signal that will cause the container to exit.

```dockerfile
STOPSIGNAL signal
```

- Default is `SIGTERM`
- Can be in `SIG<NAME>` format (e.g. `SIGKILL`)
- Can be an unassigned number in kernel's syscall table (e.g. `9`)

#### HEALTHCHECK

Specifies a command to be run inside the container to check container's health.

```dockerfile
HEALTHCHECK [OPTIONS] CMD command
HEALTHCHECK NONE # disable any healthcheck from base image
```

`OPTIONS` include:

- `--interval=DURATION` (default `30s`)
- `--timeout=DURATION` (default `30s`)
- `--retries=N` (default `3`)
- `--start-period=DURATION` (default `0s`)

A container that has `HEALTHCHECK` specified will have a _health status_ that can take 3 possible states: `starting` | `healthy` | `unhealthy`.

Whenever a health check passes, health status changes to `healthy`. After a number of consecutive failures, health status changes to `unhealthy`.

Health checks are run after every interval.
Health checks are considered failed when commands runs for longer than timeout.
When consecutive failures reaches max retries, or command exits with non zero status code `0`, _health status_ will change to unhealthy.

#### SHELL

Specifies the default shell used for shell form of commands. Default is set to `["/bin/sh", "-c"]` for Linux containers and `["cmd", "/S", "/C"]` for Windows containers.

```dockerfile
SHELL ["executable", "parameters"]
```

#### USER

Sets the username/UID to use for the remainder of the Docker build stage.

```dockerfile
USER <user>
USER <UID>
```

This is important for security as Docker by default runs the container in root user if not specified by your image nor parent image.
Root user has UID=0.

#### LABEL

Adds metadata to an image and are inherited by child images. You can view an image's labels using `docker image inspect`.

```dockerfile
LABEL <key>=<value> <key>=<value> ...
```

### Environment Replacement

Some Dockerfile instructions are able to read environment variables created by `ENV` commands, and replace them with the values that those environment variables hold.

The syntax is `$variable_name` or `${variable_name}` within a Dockerfile.

    - `${variable:-word}` to set `word` as default value when `variable` is not set
    - `${variable:+word}` to set `word` as `variable` when `variable` has already been set, otherwise `variable` will be empty string.

Dockerfile instructions that support environment variables are: `ADD`, `COPY`, `ENV`, `EXPOSE`, `FROM`, `LABEL`, `STOPSIGNAL`, `USER`, `VOLUME`, `WORKDIR`, `ONBUILD`.

```dockerfile
FROM example
ENV var=/bar
WORKDIR ${var} # WORKDIR /bar
ADD . $FOO     # ADD . /bar
```

### `.dockerignore`

Similar to `.gitignore`, this file contains a list of files and directories that docker should **exclude** from the _context_ of a docker build.

This is useful for preventing sending of large or sensitive files to docker daemon.

---

## useful docker CLI commands

### docker run

Runs your images as isolated containers.

```
docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]
```

<details>
<summary> details </summary>

_`docker run`'s `[OPTIONS]` are specified **before** the image name, whilst arguments (`[ARG...]`) for the command to be executed within the container is **AFTER** the image name and command._

for example: `docker run -ti ubuntu-image touch /path/to/file`

</details>

`docker run` is able to set many runtime options and override default settings defined by images, these include:

    - running container in foreground or detached mode
    - name of container
    - network settings
    - volume settings
    - cpu / memory limits

Common options to specify:

    - `--name` : assign a name to container (defaults to randomly generated words)
    - `--detach` / `-d` : run in detached mode so the terminal of the machine does not continouously stream container's `STDOUT` / `STDERR`
    - `--interactive` / `-i` : keep `STDIN` open even if not attached (usually used with `-t`)
    - `--tty` / `-t` : allocate pseudo-TTY to connect to container's `STDIN` (usually used with `-i`)
    - `--expose` / `-p` : expose container's ports to other containers and/or the host machine.
    - `--mount` : mount volumes or directories to container
    - `--volume` / `-v` : mount volumes or directories to container (use of `--mount` is recommended, [see differences here](https://docs.docker.com/engine/reference/commandline/service_create/#differences-between---mount-and---volume))

<details>
<summary> note on docker run documentation </summary>

there are two pages for docker run, a [generic one](https://docs.docker.com/engine/reference/commandline/run/) that lists all commands and [another one](https://docs.docker.com/engine/reference/run/) that provides more explanation

</details>

### docker build

Build Docker images from `dockerfile` and a _context_.

```
docker build [OPTIONS] PATH | URL |
```

A build's context is the (sub-)files and (sub-)directories located in the specified `PATH` or `URL`.
By default, `docker build` will look for `.Dockerfile` in the root of the build context.

Common options to specify:

- `--file` / `-f` : specify location of `Dockerfile`, can be absolute path or relative path with respect to context.
- `--tag` / `-t` : name and optionally tag the image in 'name:tag' format
- `--build-arg` : sets the value of `ARG`s defined in `Dockerfile`

**Examples**

`docker build .`
`docker build -f docker/Dockerfile .`
`docker build --build-arg HTTP_PROXY=http://1.1.1.1:1111 .`
`docker build -f ctx/Dockerfile github.com/user/project-repo`

<details>
<summary> note </summary>
remember to specify options BEFORE the context path/url
</details>

### docker image

Manages Docker images.

```
docker image COMMAND
```

Common commands:

- `pull` : pull an image or repo from a registry (ie Docker Hub)
- `inspect` : get detailed info about image(s)
- `ls` : list images
- `prune` : remove unused images
- `rm` : remove specific image(s)

### docker container

Manages Docker containers.

```
docker container COMMAND
```

Commond commands:

- `create` : create a new container from image
- `start` : start running the container
- `stop` : stop the container (issues `SIGTERM` signal)
- `kill` : kills the container (issues `SIGKILL` signal)
- `restart` : restarts the container (will try to stop, if wait too long will kill)
- `pause` : pause all process in container(s)
- `unpause` : unpause all processes in container(s)
- `attach` : attach local machine's STDIN, STDOUT, STDERR to the container's
- `exec` : run a command in a running container
- `logs` : retrieve container logs
- `stats` : stream container resource usage
- `top` : display running processes within the container
- `rm` : remove container(s)
- `prune` : remove unused containers
- `export` : export container's filesystem as a tar archive
- `cp` : copy files/folders between container and local filesystem

### docker network

Manages Docker networks.

```
docker network COMMAND
```

Common commands:

- `create` : creates a docker network
- `connect` / `disconnect` : connect / disconnect a container to a network
- `inspect` : get detailed info about network(s)
- `ls` : list docker networks
- `rm` : removes docker network(s)
- `prune` : removes all unused networks

### docker volume

Manages Docker volumes.

```
docker volume COMMAND
```

Common commands:

- `create` : creates a docker volume
- `inspect` : get detailed info about volume(s)
- `ls` : list docker volumes
- `rm` : removes docker volume(s)
- `prune` : removes all unused volume

### docker logs

Retrieves container's logs (to `STDOUT` and `STDERR`) to your CLI.

```
docker logs [OPTIONS] CONTAINER
```

Common options to specify:

    - `--follow` / `-f` : continuously streams the log output
    - `--timestamps` / `-t` : show timestamps of logs
    - `--tail` / `-n` : number of lines to show from end of the log (defaults to `all`)
    - `--since` : show logs _since_ timestamp (`2013-01-02T13:37:00Z`) or relative (`42m`)
    - `--until` : show logs _before_ timestamp or relative

### docker inspect

Returns detailed information about docker objects.
Objects can be images, containers, networks, volumes, etc.

```
docker inspect [OPTIONS] NAME|ID
```

### docker ps

List all containers and information about them (such as ID, image name, ports etc.)
Defaults to listing running containers only.

```
docker ps [OPTIONS]
```

Useful options:

- `--all` / `-a` : lists all containers, including those that are not running
- `--size` / `-s` : include size of the container in output. Shows both size of container (i.e. writable layer), and `virtual` size of total disk-space used, i.e. container + image.
- `--no-trunc` : prevent truncation in table output
- `--filter` / `-f` : filters the output with key-value pairs. E.g. `docker ps -f "name=mysparkcontainer"`.
- `--format` : formats the output using Go template. Placeholder information include `.ID`, `.Image`, `.Names` etc.
  - `docker ps --format "{{.ID}}: {{.Name}}"` will print out `abcdef: name1` etc.
  - `docker ps --format "table {{.ID}}\t{{.Name}}"` will print the output in a table with header row.

### docker stats

Display live info about containers' resource usage (kind of like Window's task manager).
Defaults to only showing running containers.

```
docker stats [OPTIONS] [CONTAINER...]
```

Useful options:

- `--all` / `-a` : lists all containers, including those that are not running
- `--no-trunc` : Prevent truncation in table output
- `--no-stream` : get only a 'snapshot' of the current stats
- `--format` : formats the output using Go template.

---

## networking

Docker containers can communicate with each other, and they can also communicate with non-Docker programs in your host machine network.

There are several types of network drivers that help you connect your containers, programs, nodes:

- `bridge` : (default) Docker managed network, isolated from host machine; used when connecting multiple containers on the _same Docker host_
- `host` : (linux only) shares host networking (i.e. ip address) with the container; container which binds to port 80 will be accessible on port 80 on _host's_ IP address
- `overlay` : connects multiple Docker daemons together; used when trying to connect containers running on separate Docker host machine
- `ipvlan` : attaches your containers to the host machine's network, giving the containers their own IP address in the network; use when you want to connect the container to host machine's network
- `macvlan` : assigns a new mac address so it appears as a physical device in your network; use for linking with legacy applications that require containers to appear as physical device
- `none` : disables all networking for the container
- third party network plugins can also be intalled from Docker Hub / other vendors

---

## storage

By default, Docker containers store data in the container's writable layer, using a storage driver, and is not persisted.

5 types of storage in Docker to put container's data

    - default container's writable layer : does not persist. optimized for space efficiency, so write speeds are lower than native.
    - volumes : isolated, Docker managed, can store in remote drives, can share volumes with multiple containers
    - bind mount : directly mount a specific directory on host machine to the container
    - tmpfs mount (linux only) : store container data in memory, not persistent, but faster performance since its using RAM
    - npipe mount (named pipes) (Windows only) : used to store data in memory for Windows
