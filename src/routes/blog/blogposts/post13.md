---
title: Javascript File, Blob, ArrayBuffer, TypedArray, DataView
date: '2023-05-09'
---

# {title}

When working with binary data in Javascript, there's a lot of classes that can be potentially used, and they all seem to do the same thing: deal with binary data.

What are the nuances and differences between all the different types, and when should we use which class?

## ArrayBuffer

The most basic type is the ArrayBuffer.

What is an ArrayBuffer? It is a _reference_ to a fixed-length, contiguous (array of) memory area.

An ArrayBuffer can be created with `new ArrayBuffer(8)`, where the input is the number of bytes (length of the memory area) that it references.
When it is created, a contiguous segment of memory will be _allocated_, based on the length that was supplied in the input, and it is pre-filled with zeroes.

Note: the word _array_ used above is not related to the normal Javascript `Array`, but rather indicates a _memory array_ as in the context of lower level programming concept.

Note: _allocation_ of memory means to reserve (that segment of) memory in that is available in the computer's RAM.

ArrayBuffers are just references to a memory location, and it is **not possible to manipulate the bytes directly using ArrayBuffer** (although it is possible to _resize_ the buffer).
Furthermore, the bytes in this memory location by itself is meaningless, just a bunch of 1s and 0s.

In order to manipulate the bytes and give them meaning, we must do it through a view (using TypedArrays or DataViews)

## TypedArray

TypedArrays are an umbrella term for a bunch of different classes such as Uint8Array, Float64Array, etc.
They are 'views' into the array buffer and give _meaning_ to the bytes that exists in the ArrayBuffers.
For instance, a Uint8Array will imply that every 8 bits (or 1 byte) is an integer. And this same relationship applies for other TypedArray, i.e. Uint16Array means an integer every 16 bits (2 bytes), Float64Array means a decimal point number every 64 bits (8 bytes), etc.

```js
let buffer = new ArrayBuffer(16); // create new array buffer of length 16 BYTES
// create a view of the buffer, where every 4 bytes represent one uint32
let uint32arr = new Uint32Array(buffer);
// typedarray can be indexed
uint32arr[0] = 322;
console.log(uint32arr); // [322, 0, 0, 0]
// note the rest of the values are 0
// note that there are only 4 items because len_of_buffer / len_of_uint32 = 4

// you can reference the underlying arraybuffer
uint32arr.buffer;

// note that assigning number larger than what the type can hold will overflow
let uint8arr = new Uint8Array(3); // this will automatically create an underlying buffer
uint8arr[0] = 255;
uint8arr[1] = 256;
uint8arr[2] = 257;
console.log(uint8arr); // [255, 0, 1]
```

TypedArray has most of the regular Array methods like `map`, `slice`, `find`, `reduce` etc.

## DataView

DataViews are flexible alternatives to TypedArrays as they don't declare _upfront_ what type, but rather the type is specified during usage of the view using its `.get` and `.set` typed methods.

```js
let buff = new ArrayBuffer(5);
let dv = new DataView(buff);
dv.setInt8(0, 20); // at 0 byte offset from start of view, set value to 20
dv.setFloat32(1, Math.PI); // at 1 byte offset from start of view, set value to Math.PI
console.log(dv.getInt8(0)); // 20 // at 0 byte offset, read as Int8
console.log(dv.getFloat32(1)); // 3.141... // at 1 byte offset, read the next 4 bytes as Float32
```

From the above example, you can see DataView can be useful when the buffer contains multiple types.

# References / Further Reading

- [File](https://developer.mozilla.org/en-US/docs/Web/API/File)
- [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
- [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
