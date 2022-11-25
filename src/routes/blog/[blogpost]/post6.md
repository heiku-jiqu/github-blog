---
title: Converting Coordinates to Different Coordinate System
date: '2022-11-11'
---

# {title}

## Motivation

Javascript DOM events lets you capture mouse position relative to top left corner of your viewport through `clientX`/`clientY` event properties.

If you are drawing SVGs and need to position SVG elements in on the mouse pointer, you will need to convert the coordinates given by `clientX`/`clientY` into the SVG's coordinates.

## Solution

You will need 3 things: - The `clientX` and `clientY` properties from the `MouseEvent` - A `DOMPoint` object created using `DOMPoint()`, or `SVGPoint` object - Reference to the `<svg>` node

```
// Create a new DOMPoint object with clientX and clientY as its x and y coordinate
let p = DOMPoint(event.clientX, event.clientY)

// Create a DOMMatrix that transforms screen coordinates to SVG coordinates
let transform_matrix = svg.getScreenCTM().inverse()

// Use the matrix in DOMPoint.matrixTransform()
let new_point = p.matrixTransform(transform_matrix)

console.log(new_point.x, new_point.y)
```

`CTM` stands for Current Transformation Matrix, and maps the local coordinate system into the viewport coordinate system. However, since we want the opposite, we have to call `.inverse()` to inverse the matrix to get the opposite effect.
