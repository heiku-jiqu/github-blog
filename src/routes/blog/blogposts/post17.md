---
title: Managing Processes in Bash
date: '2023-10-29'
---

# {title}

## Introduction

Recently wondered whether a single docker container is able to run multiple executables, hence went to dig deeper into how Linux background processes work.

TL;DR: Yes, you can do so by appending `&` to your commands (except the last command) in `CMD` or `ENTRYPOINT` or `.sh` scripts.

_note: the concepts are only for Linux like OSes, Windows will have its own alternatives that are different_

## Concepts

### Processes

Every running program in Linux is a process.
Every process has an associated `PID`.

### Jobs

A job is the group of processes that runs when you run a command in the shell
(can be 1 process, can be multiple processes if you run complex commands).
Every job has an associated `JOBSPEC`.

### Signals

Every running process can receive "signals" that is sent from another process, through the OS and to the running process.

These signals can be caught by the running program and handled accordingly (handlers can be written by programmers).

Whenever the OS sends a signal to the running process, the OS will interrupt the running process' flow of execution and ask it to handle the signal.
Imagine the OS is executing the running process' code line by line, and at a certain line the OS suddenly "drops" the execution and ask the process' code to handle the signal.

Common signals:

    - SIGKILL
    - SIGTERM
    - SIGQUIT (`Ctrl+\`)

    - SIGINT (Interrupt, `Ctrl+C`)
    - SIGHUP
    - SIGTSTP (Terminal Stop, `Ctrl+Z`)
    - SIGSTOP
    - SIGCONT

## Commands

`kill`: Sends specified signal to specified job/process
`jobs`: List all jobs
`ps`: List all processes
`bg`: Continues a job in the background
`fg`: Continues a job in the foreground
`wait`: Wait for all jobs to finish (i.e. blocks until all jobs are finished)
`disown`
`nohup`
`&`: Runs preceding command in the background
`&&`: Runs RHS command only if LHS succeeds
`||`: Runs RHS command only if LHS fails
`;`: Runs RHS command after LHS, regardless whether it succeeds or fails

### Redirection

File descriptors are:
0 for stdin
1 for stdout
2 for stderr
3 to 9 are spares

`file_descriptor>filename`
`file_descriptor>&file_descriptor`
`<`: redirect input
`>`: redirect output
`>>`: redirect and append

Reference job spec with `%n` where `n` is the `JOBSPEC` number from `jobs` command.

## Useful idioms

Send a signal to all jobs: `kill $(jobs -p)` or `jobs -p | xargs kill`

Run in background, and continue running even when you exit the shell/terminal:
