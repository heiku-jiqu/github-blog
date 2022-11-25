---
title: Drawing a Bar Chart
date: '2022-10-19'
---

<script>
    import GovtBalanceChart from './components/GovtBalanceChart.svelte';
</script>

# {title}

## SVG fundamentals

SVG provides elements that describe shapes / curves, similar to how HTML provides elements that describe headers, paragraphs.

SVG document starts with `<svg>` root element, and within it you can put various shape elements, and group those together using `<g>` element.

SVG is actually an XML language, and therefore:

    - elements and attributes are case sensitive
    - attribute values must be inside quotes even if they are numbers.

### SVG coordinate system

The origin(0,0) starts at the **top left**

The horizontal axis runs from left to right

The vertical axis runs from **top to bottom**

### SVG viewbox

The unit of measurement in the SVG coordinates is by default 1unit = 1px of the device's screen.
However, since SVG is scalable, we can change the _viewbox_ attribute of `<svg>` to (automatically) map SVG's 1 unit to however big the screen size is.

For example, defining a SVG canvas: `<svg viewBox="0 0 200 200">`. This translates to setting canvas top left corner to (0,0) and the canvas width and height to be 200. Say the canvas is displayed in a 1000px by 1000px screen, then 1 unit in SVG = 5 px on screen.

This is useful because you can fix the coordinates of the viewBox, allowing the SVG element sizes to be _relative_ to the viewBox you defined, letting it scale to any screen size.

### mapping data values to SVG unit values

Now we need a way to map the values in our data to the SVG's coordinate system.
For example, say our data consists of numbers from 0 to 10, and our SVG's coordinate system is defined as 0 to 200 pixels. We will need to map the 0 in our data to 0 pixel in SVG, and 5 in our data to 100 pixel in SVG, etc.

To do this, `d3-scale` library has a lot of helper functions that can help us generate this mapping function. Specifically, `scaleLinear` helps returns a linearly interpolating function that maps values between our data and the SVG coordinate.

```js
const interpolateFunction = scaleLinear() // returns a interpolating function
	.domain([0, 10]) // provide the min and max of our data
	.range([0, 200]); // provide the min and max of our SVG coords

interpolateFunction(0); // returns 0
interpolateFunction(5); // returns 100
interpolateFunction(10); // returns 200
```

### vertical axis: inverted

Above works fine for horizontal axis, but vertical axis is inverted in SVG.
In other words, the **larger** the y value, the **lower** the point will be shown inside the SVG.
This is not how normal charts work.
Luckily there is an easy trick to solve this using `scaleLinear()`: reverse arguments in `.range()` method!

```js
const reverseInterpolate = scaleLinear().domain([0, 10]).range([200, 0]); // Note: elements in array has been swapped!

reverseInterpolate(0); // returns 200
reverseInterpolate(5); // returns 100
reverseInterpolate(10); // returns 0
```

By just swapping the elements in the `.range()` method, the returned `reverseInerpolate` function now maps **larger** y value to a **higher** point inside the SVG.

### horizontal axis: cateogories

Horizontal axis for bar charts are usually categorical variables. This means using `scaleLinear()` does not make sense.
`d3-scale` provides another helper function, `scaleBand()` that will help us interpolate the horizontal positions of the bars.
The returned function will give us the horizontal position of the _left_ side of the bar (i.e. the start of the bar)

```js
const categoricalInterpolate = scaleBand()
	.domain(['a', 'b', 'c']) // provide array of your categories
	.range([0, 200]); // provide min and max of your SVG coords
    // optionally set the gaps between bars
    // as a proportion of width of bar, 0 to 1
    .paddingInner(0)
	// optionally set the gaps to the left and right of the first and last bar
	// as a proportion of width of bar, 0 to 1
	.paddingOuter(0.5);

categoricalInterpolate('a'); // returns position of left side of the 'a' bar
categoricalInterpolate.step(); // returns the length between start of 2 consecutive bars
categoricalInterpoalte.bandwidth(); // returns the width of the bar
```

### drawing bars

We can draw bars with `<rect>` svg element.
This element requires us to specify the rectangle's top left position `x` and `y`, the `height` (how far down), and the `width` (how far right).

We can determine the 4 properties for each data point `(xData, yData)` with the two `d3-scale` interpolating functions we have created:

    - `x` = `categoricalInterpolate(xData)`
    - `width` = `categoricalInterpolate.bandwidth()`
    - `y` = `reverseInterpolate(yData)`
        - to handle negative `yData`, use `reverseInterpolate(Math.max(0, yData))` to get the yData position if its positive, or the x-axis position if yData is negative
    - `height` = `reverseInterpolate(yData) - reverseInterpolate(0)`
        - to handle negative `yData`, use `Math.abs(reverseInterpolate(yData) - reverseInterpolate(0))` to get distance between tip of bar and x-axis

<GovtBalanceChart/>
