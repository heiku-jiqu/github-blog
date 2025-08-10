+++
date = '2025-08-10T11:16:50+08:00'
draft = false
title = 'Performance and Ballpark Numbers'
+++

# Introduction

In normal[^1] application software, there is generally no need to mind about
performance that much, as advancements in hardware and software has mostly kept
applications from slowing to a crawl. This is especially true for budding
software with minimal users.

Although modern hardware/software has mostly kept software running smoothly,
this does not excuse engineers to throw performance out the window, as frequent
careless introduction of inefficient code will handicap the software by a
thousand cuts. As engineers, we should always be mindful of the performance of
our software, as performance is an invisible requirement that determines
whether the experience we create is delightful or dreadful.

A baseline awareness of inefficiencies whilst we are writing code will go a
long way in helping us build fast (enough) software, whilst introducing minimal
delays in actually shipping features and delivering value to our users.

# Awareness of Slow

Below are a list of common performance drags, listed most significant on top

- Network calls
- Disk IO
- Sync/Coordination of threads/processes/nodes
- Dynamic Memory (heap) Allocations/Free/Garbage Collection
- CPU Context Switches (e.g. syscalls)
- Cache Miss

Committing this small list of items to memory and keeping them in our minds
whilst coding will help extend the runway we have before we actually need to
invest significant efforts into refactoring our code for performance.

# Need for Speed

In the rare event that general mindfulness and good hygiene is not enough, then
it is time to consider refactoring the code to be faster. Below are some
guiding principles to follow:

- Measure first. Engineer's guesses are frequently wrong, and we don't want
  to spend our time optimizing on things that don't matter. Use benchmarks and
  flame graphs to figure out and decide where exactly we should optimize (critical
  path).
- Know the optimal performance. Design and measure what would the ideal
  scenario of the critical path, stripping away all other functionalities, in
  order to get a sense of how much optimization is actually possible.
- Prevent branching. The critical happy path should have minimal branching,
  where the ideal design is 1 if/else check at the start of the function to
  capture all special cases, followed by the critical path. The key idea here
  is that special cases generally do not need to be fast, whilst you want your
  happy path to be as fast as possible.
- Simple code. Simple code is fast code.

# References

- Philosophy of Software Design, Chapter 20; John Ousterhout
- [Napkin Math; sirupsen](https://github.com/sirupsen/napkin-math)
- [I'm SO Glad I'm Uncoordinated, 11:00; Pat Helland](https://pathelland.substack.com/p/video-of-im-so-glad-im-uncoordinated)

[^1]: Normal as in applications that do not have thousands/millions of concurrent users :)
