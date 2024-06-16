---
title: Finite State Machine (State Design Pattern)
date: '2024-06-16'
---

# {title}

## Background

This post walks through how to go about implementing Finite State Machine.

## What is Finite State Machine

Finite State Machine (aka State Machine, aka State Design Pattern) is useful pattern in programming to translate/model real world in your program where the _thing_ you're trying to model goes through state transitions and behaves differently in its state.
As the name would suggest, the _thing_ has a finite number of states that it can exist in.
The state is also _internal_ to the _thing_, i.e. not visible to clients/users interacting with the _thing_.

We come across this type of scenario a lot in the real world.
Most control interface (e.g. remote control, media player controls, vending machine controls) can be thought of in Finite State Machine manner.

- For remote control, pressing the "up" button could mean changing channel, or it could mean navigating the settings menu, depending on what _state_ the TV is in.
- For media player, pressing the "play/pause" button could mean starting playback if no music is playing, or pausing if music is already playing.
- For vending machine, pressing the dispense drink no. 1 button could dispense drink no. 1 if there is enough credits, or do nothing if there is not enough credits.

## State Design Pattern

Usually it is quite intuitive to know when you need to program a state machine.
The key characteristics of a state machine problem are the following:

- There are a number of states that the _thing_ can exist in
- The _thing_ behaves differently based on what state it is in
- The different states may/may not transition to each other depending on what state it is currently in, and the different rules that apply for different states.
- Interactions with different states are mostly similar
  - In remote control example, no matter what state the TV is in, we always interact with up/down/left/right buttons etc.

In addition, let's say you are not designing from the ground up, but refactoring.
Then below are the code smells that indicate a state design pattern might be good:

- There are a lot of conditionals to change behaviour based on the object's current values.
- When the conditionals/behaviour of each state changes frequently.

## How to implement

1. Map out the state transition diagram
   1. Draw all the states that your thing can exist in as nodes
   1. For each node, draw and label all the transitions that can happen from this state to another state; these are the outgoing edges.
1. Sanity check: are the edge labels (state transition names) similar across all nodes?
   - If each node has a unique set of transition names and don't overlap with other node's transition names, maybe this pattern is not suited, or you're thinking in the wrong abstraction!
   - **Think of edge labels as how a user/client would interact with your thing, not how the internal state will change.**
1. Create a `State` interface that has methods for all the unique state transitions.
1. Create a `Context` object that has a field pointing to a concrete state, and a method called `changeState(newState)` that changes `Context`'s internal concrete state to `newState` when called. This `Context` object also implements `State` interface, but all the methods will be forwarded/delegated to the internal concrete state.
   - This object is what users/clients will interact with.
   - The state of this object changes by changing the internal concrete state field.
1. For each node in your state diagram, create a concrete class/type that implements the `State` interface, and also has a field pointing to the `Context` object.
   - Each concrete state's implementation of the `State` interface can then have its own isolated business logic and behaviour and do `Context.changeState(newState)` when appropriate.
   - This means concrete states are aware of each other.
   - Not all methods in all states need to initiate state transition, or even do anything. For example, in vending machine no credit state, pressing the "dispense drink" button should do nothing!
1. To use, create a `Context` object that initialises with an initial concrete state. Then call the `State` interface methods as needed.
