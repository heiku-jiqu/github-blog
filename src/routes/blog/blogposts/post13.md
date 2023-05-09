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

# References / Further Reading

- [File](https://developer.mozilla.org/en-US/docs/Web/API/File)
- [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
- [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
