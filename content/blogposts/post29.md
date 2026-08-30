+++
date = '2026-08-30T11:56:15+08:00'
title = 'Python Asyncio Concurrency'
summary = 'Snippets to handle asyncio concurrency'
tags = ["Python", "Asyncio", "Concurrency"]
+++

# Introduction

When using asyncio, it is normal to run multiple coroutines concurrently. 
For example, when calling multiple HTTP endpoints,
instead of waiting for each request's response before calling the next, you make all send all requests immediately, then (concurrently) wait for the entire batch of responses.

To set the stage, let's define a dummy `my_work` async function. This is the asynchronous work that you'd like to do (like making a HTTP request).

```py
import asyncio
import random

async def my_work(id):
    secs = random.randint(1, 2) + random.random()
    print(f"{id}: Doing work for {secs} seconds")
    await asyncio.sleep(secs)
    print(f"{id}: Done!")
    return secs
```

## TaskGroup

To run multiple `my_work` concurrently, the best way is to use `TaskGroup`

```py
async with asyncio.TaskGroup() as tg:
    for i in range(10):
        tg.create_task(my_work(i))
```

### Handling errors

#### Asyncio.CancelledError

If you ever catch CancelledError in except clause, you MUST RE-RAISE CancelledError so that parent coroutines are cancelled accordingly.

How do you catch all of the application errors and ignore CancelledError then? 
Just do normal `except Exception as error`, as CancelledError inherits from BaseException and NOT Exception,
so the normal catch all `except Exception` will ignore CancelledError.

## Semaphore

A common extension is to then limit the number of concurrent requests you make. 
For example, when processing 10 requests, you want to only have 3 concurrent pending requests, 
waiting for any of the 3 to receive a response before proceeding to fire more requests.

```py
s = asyncio.Semaphore(3) # 3 concurrent requests

async def limiter(coro):
    async with s: # Only proceed when s is below concurrency limit, else block
        return await coro

async with asyncio.TaskGroup() as tg:
    for i in range(10):
        tg.create_task(limiter(my_work(i))) # wrap `my_work`s in `limiter`. 
        # note `my_work(i)` is passed in, NOT `my_work`
```

### Type safe `limiter`

If you require typehinting on your limiter, you'll need to define some generic typevars:

```py
from typing import TypeVar
T= TypeVar('T')
async def limiter(coro: Awaitable[T]) -> T:  # Note output T is not Awaitable, cause async def auto wraps T for you
    async with s: 
        return await coro
```

## Consumer / Producer 

Another concurrency pattern is the consumer / producer pattern.
This is where you spin up a fixed number of Consumers (workers) in the background that 
continuously pulls jobs from a Queue and processes it. 
The Producer pushes jobs into the Queue whenever work arrives. If the Queue is full, the Producer waits until there is space.

```py
async def consumer(q: asyncio.Queue):
    while True:
        try:
            task_info = await q.get() # Wait until there is a job to pull from the queue
        except asyncio.QueueShutDown: # When Queue is EMPTY and has been SHUTDOWN
            return # No more work to do

        try:
            await do_work(task_info)
        finally:
            q.task_done() # Indicate to q task is done, so that q.join() unblocks
    
async def producer(q: asyncio.Queue):
    for i in range 10:
        await q.put(i) # Wait until queue has space to push job into
        asyncio.sleep(0.1)
    # Producer has no more work left, shutdown queue to indicate to consumers
    q.shutdown()

q = asyncio.Queue()
async with asyncio.TaskGroup() as tg: # Block until both producers and consumers are done
    tg.create_task(producer(q))
    tg.create_task(consumer(q))
```

Consumer / Producer pattern has more moving parts:
  - Synchronization of tasks/jobs in queue: Consumers wait at q.get() and Producers wait at q.put()
  - Synchronization of the end: Consumers get notified of no more jobs via asyncio.QueueShutDown exception and Producers notify them via q.shutdown()
  - Synchronization of full completion: Orchestrator of Consumers and Producers wait until they have all finished (Consumers fully processed all tasks and returns)

## Semaphores vs Consumer / Producer

Use Semaphore when:
- You know up front know how many work you're going to do
- You need the results to be ordered
- Errors are handled by parent caller

Use Consumer / Producer when:
- Potentially unlimited number of work over time
- Work is memory intensive; You need to prevent Out of Memory situations
- Speed difference between Producer and Consumer is big; You need backpressure
- Errors are handled by Consumer
