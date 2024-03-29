---
title: Kafka and Python
date: '2023-03-15'
---

# {title}

Python has multiple client implementations to interact with a Kafka cluster.
This post will walk through the `confluent-kafka-python` client, which is the official Python client implementation by Confluent Inc.

## Overview

This client module has a few main classes that make up the bulk of its API:

- `Producer`: To produce events to the Kafka cluster
- `Consumer`: To read events from the Kafka cluster
- `SchemaRegistryClient`: To get metadata/schemas about the Kafka cluster/topics when you have a Kafka Schema Registry server
- `Serializer` / `Deserializer`: To serialize and deserialize messages sent/received from Kafka into/from formats like JSON, Protobuf, Avro, etc.
- `AdminClient`: To manage the Kafka cluster (e.g. creating topics, partitions, etc.)

## Producer

The `Producer` class is used to send events to Kafka. It is responsible for:

- Partition assignment of the events
- Batching events for improved throughput (but added latency)
- Compression of events and its data
- Retries (e.g. due to network errors)
- Response callbacks when events are successfully delivered

### using Producer

`Producer` can be initialised by passing in a dictionary of configuration settings to the constructor.

```py
producer = Producer(config)
```

The configuration can include the following:

- `bootstrap.servers` (**required**): the URL to the Kafka cluster/brokers
- `acks`: level of acknowledgement required before returning from produce request (`0`, `1`, `all` for no ack, only lead broker ack, and all broker acks, respectively)
- `compression.type`: enables compression of messages (e.g. `gzip`, `zstd`)
- `batch.size`: number of bytes to batch up before sending produce request. Should be adjust with `linger.ms`
- `linger.ms`: number of milliseconds to wait for batch before sending produce request (i.e. latency). Should be adjusted with `batch.size`
- any other connection security settings like `security.protocol` and `ssl.keystore`

### methods

The 2 most important methods to take not of is `.produce()` and `.flush()`

`.produce()` is used to send events to Kafka asynchronously, and `.flush()` is used to make sure all produce requests and callbacks are complete.

#### methods for transactions

`Producer.init_transactions()`
`Producer.begin_transaction()`
`Producer.commit_transaction()`
`Producer.abort_transaction()`
`Producer.send_offsets_to_transaction()`

### example code

```py
from confluent_kafka import Producer

config = {boostrap.servers: localhost:9092}
producer = Producer(config)

def callback(err: KafkaError, msg: Message):
    if err:
        print(f"Event produce to topic {msg.topic()} failed for event: {event.key()}")
    else:
        print(f"{msg.value()} sent to topic {msg.topic()} in partition {msg.partition()}")

producer.produce(
    topic = 'hello_topic',
    key = "abc",
    value = "hello abc",
    on_delivery = callback
)
producer.flush()
```

## Consumer

The `Consumer` class' main function used to read events from the Kafka cluster. It is also responsbile several areas like:

- Subscribing to Kafka topics
- Reading from those topics
- Keeping track of successfully read events (by updating commited offset)
- Manage offsets of the application
- Joining Consumer Groups (to horizontally scale the consumer app, up to number of partitions of topic)

### configs

cluster location, security settings, consumer group settings

- `group.id`: the group id that identifies which consumer belongs to which consumer group (i.e. same group id = same consumer group)
- `auto.offset.reset`: whether to start reading at the beginning of topic (`earliest`), or only read new events as they arrive (`latest`); this only comes into play when there is no offsets in Kafka (e.g. at the start of consumer app or when offset expire)
- `enable.auto.commit`: whether to manually commit offsets using our code, or let the client automatically commit
- `isolation.level`: transaction processing, whether to read committed or uncomitted events

### methods

`.subscribe()`: subscribes to Kafka topics. can pass in callbacks to handle on reshuffle etc.

`.poll()`: returns either `None` (when client cannot reach Kafka server or there is) or a `Message`, which the client will need to check for `Message.error()` for any `KafkaError`.

### example code

```py
config
consumer = Consumer(config)
consumer.subscribe(['my_topic'])

try:
    while True:
        event = consumer.poll(timeout=1.0)

        if event is None:
            continue
        if event.error():
            print(event.error())
        else:
            print(f"Received message: {event.value().decode('utf8')} from partition {event.partition()} in topic {event.topci()}")
            consumer.commit(event)
except KeyboardInterrupt:
    print("Shutting down")
finally:
    consumer.close()
```
