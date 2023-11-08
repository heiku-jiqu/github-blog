---
title: Managing Processes in Linux CLI
date: '2023-10-29'
---

# {title}

## Introduction

Recently wondered whether a single docker container is able to run multiple executables, hence went to dig deeper into how Linux background processes work.

TL;DR: Yes, you can do so by appending `&` to your commands (except the last command) in `CMD` or `ENTRYPOINT` or `.sh` scripts.

_note: the concepts are only for Linux, Windows will have its own alternatives that are different_

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

- SIGKILL Forcefully stops the process (cannot be caught by process)
- SIGTERM (Default signal used by `kill` command) Terminates the process and runs any handlers, usually sent from `kill`
- SIGINT (`Ctrl+C`) Terminates the process and runs any handlers, usually sent from keyboard
- SIGQUIT (`Ctrl+\`) Same as SIGINT, but with additional error dump.

- SIGHUP Indicates that terminal is disconnected, usually sent automatically when terminal emulator is closed

- SIGSTOP Stop the process, the process is _paused_ and can be resumed, and this signal cannot be caught by process
- SIGTSTP (`Ctrl+Z`) Stop the process (i.e. paused) from the terminal, can be caught by the process to run handlers
- SIGCONT Resumes the stopped process

## Running multiple commands

To run multiple commands, append commands using `&`, for example: `sleep 5 & echo hello`.
`&` sends the preceding command into the background as a job, and also print out the JOBSPEC (aka job number) and PID (aka process ID) in the form `[JOBSPEC] PID`.
To see the list of running jobs, use `jobs` command, which will show the JOBSPEC and the corresponding command.

Note that you can send all commands to the background: `sleep 5 & sleep 6 &`, which will unblock your terminal immediately.
To wait for all jobs to finish (e.g. when using in scripts), just execute `wait`, and it will block until all jobs are finished.

If there is a long running job that you want to terminate, send SIGTERM signal with `kill %n` where `n` is the JOBSPEC.

```bash
sleep 5 & sleep 6 &
kill %2 # terminate JOBSPEC 2 which is 'sleep 6'
jobs
# shows sleep 5 is running and sleep 6 is terminated
```

If there is a long running job that you want to pause, send the SIGTSTP signal, which will pause the process.
To resume, send SIGCONT to the stopped job.

```bash
sleep 5 & sleep 6 &
kill -SIGSTOP %1 # send SIGSTOP to JOBSPEC 1
jobs # sleep 5 is stopped, sleep 6 is still running
kill -SIGCONT %1
jobs # sleep 5 continues running
```

In the case where you've already ran a program and it is blocking, it is possible to stop it by using `Ctrl+Z` which sends SIGTSTP. Then you can either continue running the program in the foreground using `fg JOBSPEC` or in the background using `bg JOBSPEC`.

One final note about using these in Docker. Docker containers will exit when there are no more foreground processes that are running (i.e. not blocked).
So if you run all commands/jobs/processes in the background using `&`, the container will just exit immediately.
To resolve this, either use `wait` to block until all jobs are completed, or don't `&` the last command, depending on your use case.

## Redirection

Small detour on redirecting stdin/out/err, so that instead of stdout printing to terminal, you can redirect to print into a file, or stdin reading in from terminal, you can read in from a file.

When linux system does any reading or writing, it needs a _file descriptor_ to identify where it is reading/writing from, which are basically just non negative integers.

There are 3 standard file descriptors:

- 0 for stdin
- 1 for stdout
- 2 for stderr

If there are readable/writable files opened, more file descriptors will be added sequentially (`ls -l /proc/$$/fd` to see list of file descriptors)

To redirect, we use the three operators below:

- `<`: redirect input
- `>`: redirect output, default LHS file descriptor is 1
- `>>`: redirect and append, default LHS file descriptor is 1

Use `file_descriptor>filename` to redirect to a file, e.g. `1>log.txt` (same as `>log.txt`) to redirect stdout to log.txt.

Use `file_descriptor>&file_descriptor` to redirect to another file descriptor from LHS to RHS (note the `&` in RHS) e.g. `2>&1` redirects file descriptor `2` which is stderr to stdout.

Use `sort < file_to_sort.txt` to redirect `file_to_sort.txt` into `sort`'s stdin.

## Commands Summary

- `&`: Runs preceding command in the background
- `kill`: Sends specified signal to specified job/process, defaults to SIGTERM
- `jobs`: List all jobs
- `ps`: List all processes
- `bg`: Continues a job in the background
- `fg`: Continues a job in the foreground
- `wait`: Wait for all jobs to finish (i.e. blocks until all jobs are finished)
- `disown`: Remove job(s) from the jobs list, process still connected to terminal
- `nohup`: Separates the process from the terminal by closing stdin, redirecting stdin and stdout into a file `nohup.out`, prevents SIGHUP from reaching process, but job is still under job list
- `&&`: Runs RHS command only if LHS succeeds
- `||`: Runs RHS command only if LHS fails
- `;`: Runs RHS command after LHS, regardless whether it succeeds or fails

## Useful idioms

Send a signal to all jobs: `kill $(jobs -p)` or `jobs -p | xargs kill`

## References

- [glibc docs describing signals](https://www.gnu.org/software/libc/manual/html_node/Standard-Signals.html)
- [man 7 pages on signals](https://man7.org/linux/man-pages/man7/signal.7.html)
- [SO question on SIGTERM and SIGQUIT](https://stackoverflow.com/questions/4042201/how-does-sigint-relate-to-the-other-termination-signals-such-as-sigterm-sigquit)
- [SO question on disown and nohup](https://unix.stackexchange.com/questions/3886/difference-between-nohup-disown-and)
