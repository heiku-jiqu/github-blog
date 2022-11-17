<script>
	import { fetch_MAS_data } from '$lib/mas_api/FetchMASData.js';
	import { scaleLog, scaleTime } from 'd3-scale';
	import { line } from 'd3-shape';
	import { axisBottom, axisLeft } from 'd3-axis';
	import { select_multiple_value } from 'svelte/internal';
	import { select } from 'd3-selection';

	let plotWidth = 600;
	let plotHeight = 800;
	let plotMargin = 100;

	let xScale = scaleTime();
	let yScale = scaleLog();
	let xValues;
	let yValues;
	let drawn_line;

	async function parse_data() {
		let data = await fetch_MAS_data();
		xValues = data.map((x) => new Date(x.end_of_month));
		yValues = data.map((y) => y.m2);

		xScale
			.domain([Math.min(...xValues), Math.max(...xValues)])
			.range([plotMargin, plotWidth - plotMargin]);
		yScale
			.domain([Math.min(...yValues), Math.max(...yValues)])
			.range([plotHeight - plotMargin, plotMargin]);

		drawn_line = line()
			.x((d) => xScale(new Date(d.end_of_month)))
			.y((d) => yScale(d.m2));
		return data;
	}
	let data_promise = parse_data();

	let xAxis, yAxis;
	$: if (xAxis) {
		select(xAxis).call(axisBottom(xScale));
	}
	$: if (yAxis) {
		select(yAxis).call(axisLeft(yScale));
	}

	let linehover = false;
</script>

<h1>Line Chart</h1>

{#await data_promise}
	loading...
{:then value}
	<svg viewBox="0 0 {plotWidth} {plotHeight}">
		<path
			d={drawn_line(value)}
			stroke="steelblue"
			stroke-width="2"
			fill="none"
			on:mouseenter={() => (linehover = true)}
			on:mouseleave={() => (linehover = false)}
			class:linehover
		/>
		<g bind:this={xAxis} transform="translate(0, {plotHeight - plotMargin + 10})" />
		<g bind:this={yAxis} transform="translate({plotMargin - 10}, 0)" />
	</svg>
	{value.map((x) => JSON.stringify(x))}
{/await}

<style>
	.linehover {
		stroke-width: 4;
	}
</style>
