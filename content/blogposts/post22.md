+++
date = '2025-08-21T13:42:14+08:00'
draft = true
title = 'Takeaways from Philosophy of Software Design'
summary = 'Useful insights and ideas worth practicing'
tags = [""]
+++

# Introduction

Recently finished reading "Philosophy of Software Design" and I'd like to write down some key takeaways for me to reference back next time. These points are just the subset of the wealth of ideas that the book provides, and are ones that gave me a new perspectives.

# Deep Modules

Modules are abstractions, and abstractions let us understand systems without needing to know all the details.
A good module is one that hides complexity beneath whilst providing a simple enough interface.
If you imagine a module as a rectangle, and its top surface is its interface, then a module should be deep, so that a small interface hides a lot of complexity.
It is a good idea to have deep modules because abstractions come at a cost; there is some mental overhead when you are hiding information beneath your abstraction.
If the module doesn't hide enough information, then the cost of mental overhead will outweigh the benefits of the abstraction.

# Different Layers = Different Abstractions

Since abstractions are relative to the information that they are hiding, it makes sense that at different layers of your code, the best abstractions are different.

# Separate Generic Code from Specialised Code

When trying to split up your code, there is tendency to gravitate towards decompose it temporally.
For example, you see that your code is doing X > Y > Z, it's natural to just cut the function into 3 separate chunks and call it a day.
However, you should instead split your code in terms of whether the functionality is for general purpose or for specialised purpose.
Something like Strategy design pattern?

# Comments

Distinction between Interface Comments and Implementation Comments.

Comments either give intuition or give precision.

# Alternate between Implementor's and Client's Perspectives

## Comments First

## Client's Most Common Usage

## How will Client like to handle errors?

# Pull Complexity Downwards

# Reduce Exceptions

## Design Away Exceptions

## Push Exceptions Higher/Lower

# Signs of Cohesion

Splitting code into infinitesimally small modules won't result in great design.
It decreases local complexity but exponentially increases global complexity.

Signs that code/functionality should be together in the same module:

1. They share information/knowledge
1. They are used together (bidirectionally)
1. They overlap conceptually
1. Understanding one requires understanding the other

# Beware of Temporal Decomposition

# Conclusion

To put the ideas above into practice, and sharpen them so it becomes second nature.

Gaining of knowledge is potential, execution of knowledge is power.
