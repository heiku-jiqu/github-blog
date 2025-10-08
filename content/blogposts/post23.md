+++
date = '2025-10-08T11:02:28+08:00'
title = 'Python contextvars'
summary = "Using context var to save async tasks' local state"
tags = ["python", "contextvar", "async"]
+++

# The Problem

I was finding out how to append request information into logs, as I wanted to log some cookies and session information that tells me who is hitting my endpoints.
There were two constraints.
I wanted to put the logger into a middleware so that I don't have to pepper my route functions with logging statements unecessarily, and I also wanted to reference the information in the configuration of my Logger's LogRecord/Formatter.

As I was using FastAPI, routes are run as async tasks. Each async tasks has their own "internal state". However, if my middleware had referenced a single variable that is being set by many concurrent async tasks, there would be a race condition in what is actually being logged.

```
                             --- timeline --->

[Request 1] -> [Set session_info=1] -> [Run Async Function] -> [Log session_info=???]
[Request 2] -> [Set session_info=2] -> [Run Async Function] -> [Log session_info=???]
```

The above illustrates what happens in the middleware when there are 2 concurrent requests.
They will step on each other's toes trying to set their own `session_info`.

# Contextvar

This is where `contextvars.ContextVar` can help us. Every task will have their own "version" of ContextVar state which can be referenced/set/get via a single variable, without worrying about other tasks that are running concurrently.
The "version" of the `ContextVar` depends on which `Context` it is being referenced in. In turn, the `Context` changes for a function whenever you pass the function into the `.run` method of another context.

```py
import contextvars

# currently in "default" context
var = contextvars.ContextVar("x")
var.set(1)
print(var.get()) # 1

def run_in_another_context():
    var.get()

    var.set(2)
    var.get()

# create a new context and copy over all variables in current (default) context
new_context = contextvars.copy_context()

# run the function in the new context
new_context.run(run_in_another_context)
# var.set(2) in run_in_another_context sets var only in new_context
print(new_context[var]) # 2
# default context still retains its value
print(var.get()) # 1
```

The magic of `ContextVar` is that it has been integrated into asyncio, with no extra configuration needed.
That automatically makes `ContextVar` a variable that is "async aware", that is, its current state depends on which async task is currently being executed.
We can now set/get the `ContextVar` in our logging middleware and everything will work.

# Conclusion

If you ever find yourself having to manage variable state in concurrent code, see if `ContextVar` can help. In addition to async tasks, it even works across threads, so it can be used in more places than `threading.local()`, though with an arguably worse API!

# Afterword

For go users, as the name implies, this has similar use cases to `context` package, but the API in python is different, and probably less useful as it doesn't have the `WithX` utilities.

# References
- https://docs.python.org/3/library/contextvars.html#asyncio-support
- https://peps.python.org/pep-0567/#asyncio
