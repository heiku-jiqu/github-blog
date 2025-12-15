import asyncio


async def good_citizen(name):
    print(f"GOOD citizen {name} starting")
    for i in range(5):
        print(f"GOOD citizen {name}: ", i)
        await asyncio.sleep(0.001)
    print(f"GOOD citizen {name} ending")


async def bad_citizen():
    print("BAD citizen starting")
    for i in range(5):
        print("BAD citizen: ", i)
        await fake_async(i)  # DOES NOT yield to event loop!!!


async def fake_async(x):
    print("running fake async")
    return x


async def main():
    async with asyncio.TaskGroup() as tg:
        tg.create_task(good_citizen("John"))
        tg.create_task(bad_citizen())
        # bad citizen will run to completion before good_citizen's loop can run
        tg.create_task(good_citizen("Mary"))


if __name__ == "__main__":
    asyncio.run(main())
