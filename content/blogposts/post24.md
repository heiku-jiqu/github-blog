+++
date = '2025-11-30T13:17:08+08:00'
draft = false
title = "Untangling Python's Asyncio"
summary = 'Piecing Together Asyncio Primitives'
tags = ["python", "concurrency", "asyncio"]
+++

# Introduction

I have revisted Python's async docs multiple times, and somehow each time I leave with a little more understanding and confusion. In part due to key details being scattered everywhere, and in part due to me always skimming through the material. Hopefully this article helps someone (aka me in the future) clarify some of the ideas.

# Concurrency

Concurrency in Python is *interleaving* units of execution (i.e. a block of code/steps to be done).
This means, in the context of asyncio, there is no work being done in parallel. Units of execution can happen *concurrently* because each unit might need to *wait* for something before doing more computation, and whilst waiting it can pass the baton (CPU time) to other units of execution to do their work.

An analogy is if you need to send off multiple emails to converse. In the first conversation, you write an email, you send the email, then you wait for the reply. Whilst waiting, you write the second email, you send the email, and you wait again. You can check whether the first email has received a reply, at which point you start writing again. At no point are you writing 2 emails in parallel, yet you are concurrently having 2 email conversations.

In order to interleave units of execution, Python requires a way to "go in" and "go out" of any units of execution while they are still progressing. This is where Generators come in.

# Generators

Generator functions lets code "go in" the function and execute up to the first `yield`, at which point it will "go out" of the function and start executing the parent code. When you call the generator again, you "go in" to the place it last stopped execution (the first `yield`) and start executing from there onwards, until another `yield`, etc.

```python
def do_thing_A():
    print("thing A first step")
    yield "thing A first step complete"
    print("thing A second step")
    yield "thing A second step complete"
    
def do_thing_B():
    print("thing B first step")
    yield "thing B first step complete"
    print("thing B second step")
    yield "thing B second step complete"

thing_A_generator = do_thing_A()
thing_B_generator = do_thing_B()

# interleave A and B 
next(do_thing_A)
next(do_thing_B)
next(do_thing_A)
next(do_thing_B)
```

When you "go in" to the Generator function, you can also pass in values so that the RHS of `yield` will be assigned that value, by using it's `.send(value)` method

```py
def do_thing():
    print("do first step")
    first_step_result = yield "awaiting first step results"
    print("first step result: ", first_step_result)
    
    print("do second step")
    second_step_result = yield "awaiting second step results"
    print("second step result: ", second_step_result)
    yield first_step_result + second_step_result

do_thing_generator = do_thing()
next(do_thing_generator)
do_thing_generator.send("hello ")
do_thing_generator.send("world")
```

# Coroutines

Leveraging the ability to "go in" and "go out" of units of execution, Python then introduced Coroutines and `async def` to make writing these kinds of code easier. The below code is conceptually similar to what we have done above:

```py
import asyncio 

async def do_thing():
    print("do first step")
    first_step_result = await first_step()
    print("first step result: ", first_step_result)
    
    print("do second step")
    second_step_result = await second_step()
    print("second step result: ", second_step_result)
    return first_step_result + second_step_result

async def first_step():
    return "hello "
async def second_step():
    return "world"

asyncio.run(do_thing())
```

Notice that we need a way to manage all the different do_thing_A, do_thing_B, etc, going in and out of each of them and passing in the results that they are waiting for. This is the achieved via the interplay between event loop and tasks/futures, explained in the next section. 

Notice also that you don't pass in the coroutine function *definition* to `run()`, you pass in the result of executing the coroutine function (`do_thing()`) which is actually a coroutine *object*. 
This coroutine object has methods like `.send(value)` which the event loop interacts with to manage their lifecycle.

Notice that execution of your coroutine's logic is *deferred*, as running the function only creates a coroutine object. Only when passing into `asyncio.run()` does the unit of work actually starts to execute.

Notice that other units of work are at the mercy of the current unit of work. Remember how Python is single threaded and can only run 1 unit of work at a time? If the current unit of work do not `await` (`yield`) back to the event loop, then other units of work will have no chance of execution. 
This requirement for units of work to be a good citizen and yield control for other units of work is called *cooperative concurrency*, and requires the author (you!) to be mindful not to hog the event loop by computing the 938492834th fibbonaci number. The other type is called *preemptive concurrency*, where units of work are forcibly halted and switched out with other units of work, which is how your OS run multiple applications, just that it does this so quickly its imperceptible! Some systems can even have both cooperative and preemptive concurrency (e.g. Go).

Now that we have the foundation of concurrent code execution, we can look into more detail how the event loop, Task and coroutine work together to achieve this. 

# Tasks

Tasks uses coroutines and event loop to manage the interplay between executing the coroutine and yielding back to the event loop.
When creating a Task, it takes a coroutine that you want to execute, wraps it, and schedules itself (Task) onto the event loop. 
In terms of responsibilities, the event loop tracks a list of Tasks that has been scheduled, and will provide the next Task to be called, whilst the Task itself manages entering/exiting from the coroutine and yielding to the event loop to run the next Task.

Imagine a coroutine that has multiple yields (awaits). The Task object will create a callback (a function that hasn't run) and appends it to the event loop list of Tasks. This callback is responsible for entering the coroutine (via `.send()`), and on the first yield, it schedules in the event loop to enter the coroutine again; this keeps happening until the callback gets an StopIteration exception from the coroutine, which signals to the callback that there are no more yields left. With a list of callbacks scheduled, the event loop will just keep looping over all the callbacks added by Tasks.

With the ability to concurrently execute units of work, how does the event loop know whether the callback is ready to be executed? how do we finally retrieve back the results of the unit of work? This is where Futures come in, and why Tasks are inherited from Futures to enable this functionality.

# Futures

Futures are a container object that tracks an eventual value, and enable you to append callbacks to the event loop when the eventual value is available. 
Imagine you are awaiting results from a network call. A Future is created with a reference to an event loop, to be the container for the eventual response value from the network call. After creating the future, you can `.add_done_callback()` which will execute the functions once the value is available (e.g. you want to print out the response). After adding callbacks, when the network call reponds, the code responsible for setting the value of the Future can call the `.set_result()` method. This method will execute all the callbacks that were registered, and turn the Future to `.done()`. 

Going back to asyncio, all Tasks are actually Futures. 
When your coroutine makes I/O operation, underneath that method call are low level OS syscalls that is implemented by the event loop. 
The event loop creates a Future, and makes an OS syscall to start the I/O operation (which is non-blocking), and attaches to this syscall a callback that will `.set_result()` of the Future once the OS syscall has the result. 
Once this is done, the event loop proceeds to process the next Task/callbacks/coroutines. 
To prevent busy waiting, when your event loop runs out of Tasks to process, it will do a OS blocking syscall that asks the OS to return when any of the registered I/O operations have completed, thereby continuing execution of all the callbacks.

Notice that the above description of the low level mechanism is based solely on callbacks. That is why in Python's Futures documentation page, it says that Futures are the bridge between async/await and callback based code.

# Takeaway

Although my understanding may be far from perfect, hopefully this article gave you a overall picture on how different asyncio primitives (Generators, Coroutines, Event Loop, Tasks, Futures) are pieced together.

# Resources

- https://docs.python.org/3/howto/a-conceptual-overview-of-asyncio.html
- https://peps.python.org/pep-0492/
- https://peps.python.org/pep-0525/
- Python source code:
  - https://github.com/python/cpython/blob/3.14/Lib/asyncio/coroutines.py
  - https://github.com/python/cpython/blob/3.14/Lib/asyncio/futures.py
  - https://github.com/python/cpython/blob/3.14/Lib/asyncio/tasks.py
  - Event loop
    - https://github.com/python/cpython/blob/3.14/Lib/asyncio/events.py (event loop)
    - https://github.com/python/cpython/blob/main/Lib/asyncio/base_events.py (base event loop implementation)
    - https://github.com/python/cpython/blob/main/Lib/asyncio/selector_events.py (linux event loop implementation)
    - https://docs.python.org/3/library/asyncio-protocol.html
