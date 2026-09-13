+++
date = '2026-08-30T10:37:29+08:00'
draft = true
title = 'How Debuggers Work'
summary = 'How Debuggers Work'
tags = ["debugger"]
+++

# Introduction

Debuggers are very helpful when you need to inspect what is happening to your code, especially when you've print debugging failed you. 
But setting up the debugger can be a pain, especially when you have no idea what is happening, what all the configurations mean, and why they even exist. 
On top of that, the libraries we usually use at work are built on top of abstractions upon abstractions, further obstructing our mental model.
This post explains some high level overview so you have an idea how debuggers work under the hood. 
With that knowledge, hopefully the configurations will make more sense.

# Setting up the Debugger 

Let's start with the simple case. 
We have a single file, and we want to spin up a debugger to step through what's going on inside.
Usually this is an easy 1 click operation in most IDEs. 
Go to your IDE, add some breakpoints in the file, then go to debugger page and click "Debug File"


# Setting up the Debugger (and Failing)

OK but usually when you only have 1 file, print debugging is enough. 
You'd only pull out your debugger when your project becomes more mature, 
when there are more moving parts which will benefit you to see step by step. 

For example, you just created a new function buried deep inside your API route handler, 
This function has a bunch of dependency injection that is all wired up nicely in your app, 
and isolating them into a nice single file is unrealistic.
Furthermore, you've likely been running your library's own specific dev executable commands like `uvicorn --reload` or `npm run dev`. 
Don't forget that your app is also a monorepo with separate root folders for frontend & backend.
At this point, you'd probably exclaim "How do I even run Debug File on this?!".
This is where debuggers start to fail. 
You feel like you'll spend more time debugging how to start the debugger, than actually debugging your new function.
You carry on print debugging instead.

# The Debugger and the Debugged
Debugger process vs Debugged process
- How they interact?
- How does debugger know 
- Who actually runs the code?
- How does the code know which line to stop?

# Debug Adapter Protocol

The UI vs the Debugger

- How do different IDEs (UIs) talk to different debuggers?
- What are main RPC/Protocol messages?
  - Launch (Which process to listen to)
  - Set/Remove breakpoints
  - Query stackframes / variables and their values
  - Evaluating expressions
