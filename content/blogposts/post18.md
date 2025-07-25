---
title: Choosing Kafka Partition Number and Replication Factor
date: '2023-11-16'
---

# {title}

## Introduction

This article summarises some basic considerations on how to choose the number of partitions in a Kafka Topic and the replication factor of the Topic.

TL;DR:
Usually bottlenecked by Consumer processing time.

Throughput: ((processing time for one message in seconds x number of msgs per second) / num of partitions) &amp;lt;&amp;lt; 1

Latency: number of partitions &amp;lt; 100 x replication factor

## Partition Number

### Concepts

Number of partitions also improves write through put in producer and broker side, because writes can be done in parallel.
But writes are already very high throughput, so usually it is not a problem.

Number of partitions determine the maximum number of parallel consumers that can consume the topic.
If topic only has 2 partitions, then only maximum of 2 consumers within a consumer group can read the partition (the rest will stay idle).

High concentration of partitions to brokers ratio will increase latency, because replication by follower is done on single thread, and consumers can only see messages when it has been commited (replicated > min in sync replicas).
Replicating 1000 partitions from one broker to another can add about 20 ms latency, which implies that the end-to-end latency is _at least_ 20 ms.
But increasing

## Replication Factor

### Concepts

Partitions within a topic are replicated to other broker nodes. Each partition will have a partition leader, and the rest are partition followers.
Replication Factor determines how many broker nodes have a copy of the partition.
For example, a Replication Factor of 3 means that there will be 1 broker who is assigned the partition leader, and there will be 2 other brokers who are following the writes of the partition leader.

## Min in sync replicas

A write to a Kafka partition is not considered committed until all in-sync replicas have received the write.

Consumers receive only committed messages (i.e. only receive messages that has been successfully received by all in-sync replicas), and will never see a message that could be lost.

Since Consumers can only see messages after all in-sync replicas have received, it means added in sync replicas worsens latency (and availability because writes will fail if not enough online ISRs), but improves durability.

## Resources

[Conduktor Guide on Partition Count and Replication Factor](https://www.conduktor.io/kafka/kafka-topics-choosing-the-replication-factor-and-partitions-count/)
[Confluent Guide on Partition Count](https://www.confluent.io/blog/how-choose-number-topics-partitions-kafka-cluster/)
[Stackoverflow Question on Partition Count](https://stackoverflow.com/questions/50271677/how-to-choose-the-no-of-partitions-for-a-kafka-topic)
[LinkedIn Engineering on Kafka Benchmark](https://engineering.linkedin.com/kafka/benchmarking-apache-kafka-2-million-writes-second-three-cheap-machines)
[Confluent Kafka Performance](https://developer.confluent.io/learn/kafka-performance/)
[Confluent Replication Committed Message Guarantees](https://docs.confluent.io/kafka/design/replication.html)
