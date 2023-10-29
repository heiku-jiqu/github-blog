---
title: Managing Processes in Bash
date: '2023-10-29'
---

# {title}

## Concepts

Every command ran in `bash` is a process.
Every process has an associated `PID`.
A job is the group of processes that runs when you run a command (can be 1 process, can be multiple processes if you run complex commands).
Every job has an associated `JOBSPEC`.

## Signals

Command signals:

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
