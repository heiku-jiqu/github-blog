import asyncio
import contextlib
import random


async def my_work(i):
    secs = random.randint(1, 2) + random.random()
    print(f"{i}: Doing work for {secs} seconds")
    await asyncio.sleep(secs)
    print(f"{i}: Done!")
    return secs


async def run_in_taskgroup() -> list:
    tasks = []  # used to track the results/exceptions
    async with asyncio.TaskGroup() as tg:
        for i in range(10):
            coroutine = my_work(i)  # my_work is NOT await-ed, so its not running yet!
            task = tg.create_task(coroutine)  # schedule coroutine for execution
            tasks.append(task)
        # at the end of async with,
        # TaskGroup `tg` will will wait for all task added under it to finish
    results = [task.result() for task in tasks]
    return results


async def my_error_work():
    raise ValueError


async def run_in_taskgroup_exception() -> list:
    tasks = {}  # use a dict to track tasks
    try:
        async with asyncio.TaskGroup() as tg:
            for i in range(10):
                if i == 5:
                    # add a coro that raises Exception
                    tasks[i] = tg.create_task(my_error_work())
                    continue
                tasks[i] = tg.create_task(my_work(i))
            # when any of the tasks raises exception in tg:
            #   - Cancels all other tasks in the tg
            #   - raises an ExceptionGroup
    except* Exception as exceptiongrp:
        for e in exceptiongrp.exceptions:
            print(e)
            # return [0] * 10  # return list of 10 zeros
    return [task.result() for task in tasks.values()]


async def run_in_batches_via_semaphore() -> list:
    sem = asyncio.Semaphore(2)  # limit 2 concurrent jobs ("slots") at a time

    # create a wrapper
    async def limiter(coro):
        # upon entering async with sem,
        # if there's a free "slot" in Semaphore, take up that slot
        # else, waits(blocks) until there is a free "slot" (i.e. until other coros free up their slot)
        async with sem:
            return await coro
        # upon exiting, free up the slot that it has taken

    tasks = []
    async with asyncio.TaskGroup() as tg:
        for i in range(10):
            work_with_limiter = limiter(my_work(i))
            tasks.append(tg.create_task(work_with_limiter))
    return [task.result() for task in tasks]


async def semaphore_limiter_typesafe():
    sem = asyncio.Semaphore(2)

    import collections.abc
    import typing

    # define a generic Type
    # https://typing.python.org/en/latest/reference/generics.html#defining-generic-classes
    T = typing.TypeVar("T")

    # type hint the coro with return generic return value of T
    # https://docs.python.org/3/library/typing.html#annotating-generators-and-coroutines
    async def limiter(
        coro: collections.abc.Awaitable[T],
    ) -> T:
        async with sem:
            return await coro

    # result is typehinted as float which is return type of my_work()!
    result = await limiter(my_work(1))
    return result


async def run_consumer_producer():
    # queue has max limit of 5 items inside, producer needs to wait if full
    q = asyncio.Queue(5)

    async def consumer():
        while True:
            # Attempt to pull from queue
            try:
                input = await q.get()  # wait until an item is available
            except asyncio.QueueShutDown:
                # q.get() raises QueueShutDown() when producer calls q.shutdown(),
                # so we break while-loop
                print("Worker saw QueueShutDown, exiting")
                break

            # Do the work
            # try:
            await my_work(input)
            # except Exception as e:
            #     print(f"error {e} for {input=}")

    async def producer():
        for i in range(10):
            await q.put(i)  # insert into queue, waits if queue is full
            print(f"Producer sent: {i}")

    # schedule the consumer for execution to consume the queue in background task
    consumers = [asyncio.create_task(consumer()) for _ in range(2)]
    producers = asyncio.create_task(producer())

    # wait for all producers to finish producing
    await producers

    # producers have finished, safe to shutdown the queue
    q.shutdown()  # Python >3.13, else use q.join() here and finally: q.task_done() in consumer

    # wait for all consumers to finish consuming remaining Queue items
    # and get the QueueShutdown signal which will exit their loop
    await asyncio.gather(*consumers)


async def q_receive_iterator(receive_q: asyncio.Queue):
    while True:
        try:
            yield await receive_q.get()
        except asyncio.QueueShutDown:
            break


@contextlib.asynccontextmanager
async def q_send_closer(q: asyncio.Queue):
    try:
        yield q
    finally:
        q.shutdown()


async def run_consumer_producer_complete_example():
    in_q = asyncio.Queue[int](5)

    async def consumer(receive_q: asyncio.Queue[int]):
        async for input in q_receive_iterator(receive_q):
            try:
                output = await my_work(input)
                print(output)
            except Exception as e:
                print("error!", e)

    async with asyncio.TaskGroup() as tg, q_send_closer(in_q):
        # spawn the consumers
        tg.create_task(consumer(in_q), name="consumer1")
        tg.create_task(consumer(in_q), name="consumer2")
        tg.create_task(consumer(in_q), name="consumer3")
        # produce work for the consumers
        for i in range(20):
            await in_q.put(i)
            print(f"Producer sent: {i}")

    print("all work done!")


async def main():
    sem = asyncio.Semaphore(3)
    for i in range(10):
        async with sem:
            await my_work(i)
    # await run_consumer_producer_complete_example()


if __name__ == "__main__":
    asyncio.run(main())
