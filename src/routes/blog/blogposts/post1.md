---
title: CSS Responsive Grid Layout
date: '2022-09-14'
---

# {title}

There are two main ways to customise the layout of HTML elements / components:
`display: grid` and `display: flex`.

This post describes how to achieve a responsive layout that will automatically populate components into a parent component such that the number of columns is dynamic. For example, when viewed on larger screens, there will be 5 columns, but when viewed on narrower screens, it will shrink to one column.

TL;DR:

```css
.grid-container {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
}
```

## display: grid

By setting the _parent_ component's CSS property to `display: grid`, we are able to control how the _child_ components are arranged. This property itself does not do anything, you will need to specify _how_ the components should be arranged.

## `grid-template-columns`

`grid-template-columns` is one of the CSS property that helps you specify how child components are arranged. The simplest way is to give values corresponding to the size of each column.

For example: `grid-template-columns: 1fr 1fr 1fr` will arrange the child components into 3 columns taking equal widths, and if there are more than 3 child components it will flow to the next row.
_Notice that the number of values you pass in will determine the number of columns in the grid_

## repeat()

Instead of statically passing in the number of values, there is another equivalent syntax using the repeat() function: `grid-template-columns: repeat(3, 1fr)`

`repeat()` takes in 2 parameters, the number of times to repeat and the size to repeat.

### `repeat()`: special #1

Instead of having the number of times as the first parameter, `repeat()` can also take in either of these two keywords: `autofit` and `autofill`, as its first parameter.

Both keywords work similarly in that they will populate the maximum number of columns until no more child components can fit, then move on to the next row.

Example: `grid-template-columns: repeat(autofill, 200px)`

### `repeat()`: special #2

Above example will populate a _fixed width_ child component. In order to make the child components response, repeat()'s second parameter accepts a `minmax()` function.

Example: `grid-template-columns: repeat(autofill, minmax(200px, 1fr))`

We can specify that the child components has a _minimum width_ of 200px.

When narrowing the view, the child component gets smaller than 200px, the grid will reduce the number of columns.

When widening the view, the child components will widen until another 200px column can fit, at which point another column will be added.

We now have a grid layout with responsive number of columns.
