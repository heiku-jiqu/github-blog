---
title: Drawing a Line Chart
date: '2022-11-16'
---

# {title}

<script>
    import MASMoneySupplyChart from './components/MASMoneySupplyChart.svelte';
    import MASMoneySupplyChartMultiLine from './components/MASMoneySupplyChartMultiLine.svelte';
</script>

<MASMoneySupplyChart/>

### `line()` from d3-shape

`d3.line()` from d3 is a utility object that helps you draw lines. Initialise this object with _data accessors_ (`.x()` and `.y()`), and the resulting instance object will parse input _data_ and output either SVG path or Canvas path, depending on the line's context (set using `line.context()`).

Note: input data has to be sorted as the line is connects points sequentially in the order of the data points.

```js
import { line } from 'd3-shape';
import { scaleLinear } from 'd3-scale';

// data is an Array of JSON objects
data = [
    {time: 0, value = 200},
    {time: 2, value = 330},
    {time: 4, value = 565}
];

// initialise functions that map data values to graph positions
xScale = scaleTime()
    .domain([dataMinX, dataMaxY])
    .range([0, plotWidth]);
yScale = scaleLinear()
    .domain([dataMinY, dataMaxY])
    .range([plotHeight, 0])

line_drawer = line()
	.x((d) => d.time) // define x to be time attribute
	.y((d) => d.value); // define y to be value attribute

// feed data into line_drawer()
// line_drawer will use corresponding accessors to
// access the data for every JSON object in the data Array
svg_path = line_drawer(data);
```

### `axisBottom()` from d3-axis

d3 also has utility functions to help you draw axes, given the d3-scale functions that you have initialised.

```js
import { axisBottom } from 'd3-axis';

select(xAxis) // select the <g> group element inside <svg> canvas that will house your axis
	.call(axisBottom(xScale)); // draw the axis, given the xScale which you defined previously
```

<MASMoneySupplyChartMultiLine/>

### dynamic `line()` accessors

In order to draw multiple lines, we just have to change the x/y accessors for each line we want to draw.

In this case, there is a need to change the y-accessor of `line()` dynamically based on the `m1`/`m2`/`m3` attribute.
Example: `line().y((d) => yScale(d.m1))` for m1, and `line().y((d) => yScale(d.m2))` for m2, etc.
Instead of using dot notation, we can use `d[category]` to parameterise the accessor.
