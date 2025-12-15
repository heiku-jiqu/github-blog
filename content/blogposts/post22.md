+++
date = '2025-08-21T13:42:14+08:00'
draft = false
title = 'Takeaways from Philosophy of Software Design'
summary = 'Useful insights and ideas worth practicing'
tags = ["software design"]
+++

# Introduction

Recently finished reading "Philosophy of Software Design" and I'd like to write down some key takeaways for me to reference back next time. These points are just the subset of the wealth of ideas that the book provides, and are ones that gave me a new perspectives.

# Deep Modules

Modules are abstractions, and abstractions let us understand systems without needing to know all the details.
A good module is one that hides complexity beneath whilst providing a simple enough interface.
If you imagine a module as a rectangle, and its top surface is its interface, then a good module should be deep, such that a small interface hides a lot of complexity.
It is a good idea to have deep modules because abstractions come at a cost; that cost comes in the form of mental overhead when information is hidden beneath your abstraction and needing to learn a new interface.
If the module doesn't hide enough information, then the cost of mental overhead will outweigh the benefits of the abstraction.

# Different Layers = Different Abstractions

Since abstractions are relative to the information that they are hiding, it makes sense that at different layers of your code, the best abstractions are different.
Similarly, concepts being used in the implementation of your module should be markedly different from concepts  and functionality exposed by your module.

# Separate Generic Code from Specialised Code

When trying to split up your code, there is tendency to decompose code temporally.
For example, you see that your code is doing X > Y > Z, it's natural to just cut the function into 3 separate chunks and call it a day.
Beware that this usually leads to unoptimal abstractions and modularisation!
Instead, think of splitting general purpose code away from the specialised purpose code.

# Comments

When writing comments, be conscious that there are actually two types of comments: Interface Comments and Implementation Comments. 
The former gives intuition, the latter gives precision.

# Alternate between Implementor's and Client's Perspectives

To write better modules, you need to be constantly alternating between implementation and client perspectives. 
This lets you consider how the code will be used, whilst also considering what kind of information and logic can be abstracted away.

When considering the client's perspectives, there are some things you can do:
  - Write interface comments (and tests?) first before even implementing
  - Ask yourself "what are the clients' most common usage?"
  - Ask yourself "how will clients like to handle errors?"

# Pull Complexity Downwards

There is a tendency to pass the difficult parts to the client, as you race to implement a feature. 
Instead, handle the complex logic within your module / lower level layer, so that clients / higher level layers do not have to deal with the complexity. 
This is especially important for modules which are being used frequently.

# Reduce Exceptions

Exceptions add considerable complexity because they are branches in code, made worse by their usually special branching semantics compared to normal if/else conditionals. 
Hence, it is best if you reduce the amount of code handling exceptions, whilst still preserving the same surface area for catching exceptions and errors!

## Design Away Exceptions

Exceptions *can be designed away*. This means changing the meaning of exceptions/errors from inside your module into a different/higher level concept for users of your module. More concretely, this could be as simple as setting a default value instead of throwing an exception, or it could mean rethinking the semantics of your module interface. Remember to ask yourself: how would clients like to handle errors?

## Push Exceptions Higher/Lower

For those remaining exceptions, push their handlers to the extreme edges. Either you handle them in a low level module, or you handle them in a high level module. 
These are the high leverage places where exception handling should be done, so that most of your other code do not have to care about exceptions, keeping your codebase cleaner.

# Signs of Cohesion

Splitting code into infinitesimally small modules won't result in great design.
It decreases local complexity but exponentially increases global complexity.

Signs that code/functionality should be together in the same module:

1. They share information/knowledge
1. They are used together (bidirectionally)
1. They overlap conceptually
1. Understanding one requires understanding the other

# Conclusion

Ultimately, it is one thing to know the above ideas, and another to actually *use* them. 
So you'd need to have the discipline to practice these ideas, and sharpen them so it becomes second nature.
Gaining of knowledge is potential, execution of knowledge is power.
