+++
date = '2025-08-21T13:42:14+08:00'
draft = true
title = 'Takeaways from Philosophy of Software Design'
summary = 'Useful insights and ideas worth practicing'
tags = [""]
+++

# Introduction

Recently finished reading "Philosophy of Software Design" and I'd like to write down some key takeaways for me to reference back next time. These points are just the subset of the wealth of ideas that the book provides, and are ones that gave me a sense of epiphany.

# Deep Modules

Modules are abstractions

# Different Layers = Different Abstractions

# Separate Generic Code from Specialised Code

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
