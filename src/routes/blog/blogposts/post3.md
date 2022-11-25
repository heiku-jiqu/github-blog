---
title: Javascript Async
date: '2022-10-13'
---

<script>
    import GovtBalance from './components/GovtBalance.svelte'
</script>

# {title}

# async

Normal code is _synchronous_, i.e. it will run sequentially line by line, waiting for code to finish executing before going to the next code.

Sometimes code has to wait for non-CPU intensive tasks (e.g. calling API), and we want to process other things whilst waiting for these tasks to finish in the background.

This is where asynchronous programming comes in to help us run things is parallel.

# async in Javascript

Implementations of async programming defers in different programming language, but in Javascript, the most fundamental async type is the _Promise_.

A promise short circuits the waiting time by returning a container immediately, allowing the subsequent code to run whilst it wait in the background.
This container wraps the actual value that the async task will eventually return.

How do to use the value inside the Promise then?

Promises have a `.then()` method that takes a function as an argument.
This function will be executed once the value has been successfully fulfilled by the Promise, and the value inside the promise will be passed into this function as an argument.

```js
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(123);
	}, 300);
});
promise
	.then((value_in_promise) => {
		value_in_promise.json(); // this is also an async method that returns Promise!
	})
	.then((value_as_json) => {
		console.log(value_as_json);
	});
```

# using async/await

Chaining a lot of `.then()` closures looks ugly.
Instead, using the `async` and `await` syntax helps make it look cleaner, as it lets you write code that is more like normal synchronous code.

`async` keyword is used to define an `async function`, which will automatically make the function return a `Promise`.
Within the `async function`, use `await` before any async expression (i.e. code that returns Promises) to force the code to wait for that expression to finish and **unwrap** the value inside the Promise.
`await` can only be used within an `async` function.

```js
async function runAsyncCode() {
	let output = await callAsyncApi(); //
	let output_as_json = await output.json();
	console.log(output_as_json);
	return output_as_json;
}
```

# how to assign value inside promise to a variable?

Notice that `async` functions implicitly wraps its output in a Promise.
Notice also that you can only use `await`, which unwraps a Promise, _inside_ `async` functions.
How then, do you assign the value inside Promise into a variable?

You will need to first instantiate a variable, and then assign the Promise's value once it has been resolved.
To do this, we can do the assignment within the `.then()` closure.

So at the end, `async`/`await` is only able to abstract away all the middle `.then()` closures, but ultimately `.then()` is still needed in the final step to assign the value to a variable.

```js
let data = null;
runAsyncCode().then((inner_value) => {
	data = inner_value;
});
```

You will need to handle the state of `data` by yourself, and make the DOM show what you want it to show when `data` is `null` and also when `data` is the value of resolved promise.

## svelte way

Svelte abstracts away this complexity by using its await blocks

```js
{#await runAsyncCode()}
    <p>...loading...<p>
{:then inner_value}
    <p>The inner value is {inner_value}<p>
{/await}
```

# retrieving data from API

<GovtBalance/>
