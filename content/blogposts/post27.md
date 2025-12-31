+++
date = '2025-12-31T11:19:42+08:00'
draft = true
title = 'Simple Saga (Orchestration)'
summary = 'summary of post'
tags = [""]
+++

Most DDD recommends to keep workflows in the Application layer. 
However, I have a workflow that is expected to change a lot, as it is a core part of my project. Hence, I would like to keep it as clean and dependency free as possible by pushing it into the Domain instead of Application layer. 
However, pushing down the workflow into Domain layer, I had to separate out the workflow logic and the intermediate persistence into two different layers. 
In addition, there are two different types of Saga pattern: Choreography, and Orchestration. 
From what I can tell, Choreography style requires event driven architecture. 
Currently my application is a simple monolith, and does not require any message queues, hence I would like to keep the deployment as simple as possible as I will be the one managing the day 2 deployment as well.
Furthermore, another draw back of Choreography/Event Driven is that the workflow steps will be distributed across different parts of the codebase, which adds mental overhead for my team which is unfamiliar with event driven architecture (including myself). Even if they are familiar with event driven architecture, the mental overhead tradeoff is not worth it in lieu of the expected frequent iteration of the workflow. 

Hence, designing the workflow where all the steps are centralised (Orchestration) is preferred, as it allows the team to digest what the workflow logic from 1 single place.
Most resources point Orchestration to requiring a central distributed workflow engine (e.g. Temporal, Airflow), which again complicates the deployment. 
My project and its workflows is not critical enough to warrant depoying yet another complicated infrastructure.

Keep workflow (Domain) clean, understandable, and easy to change.
Workflow Service should be stateless.
Application concerns outside (saving of intermediate state)
Keep workflow in a single place instead of event driven (orchestration over choreography)

# Planner
Initially, I came up with an idea to wrap individual steps into callbacks, and have a central Domain Entity/Service method spit out a ordered list of steps (callbacks) that the application can call.

# Generators

# Conclusion
Using Generators seem like an obvious way to implement a simple Saga Orchestrator within a monolith. As they say, great ideas are obvious in hindsight; maybe that's why I like this idea so much.
