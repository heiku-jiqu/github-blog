<script>
	import { fetch_MAS_data } from '$lib/mas_api/FetchMASData.js';
	import { scaleLog, scaleTime } from 'd3-scale';
	import { line } from 'd3-shape';
	import { axisBottom, axisLeft } from 'd3-axis';
	import { select } from 'd3-selection';
	import { loop_guard } from 'svelte/internal';

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
		yScale.domain([10000, Math.max(...yValues)]).range([plotHeight - plotMargin, plotMargin]);

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

<h2>Line Chart</h2>

<svg viewBox="0 0 {plotWidth} {plotHeight}">
	<text x={plotMargin / 2} y={plotMargin - 20}>Plot of a line chart</text>
	{#await data_promise}
		<text x={(plotWidth - plotMargin) / 2} y={plotHeight / 2} font-size="60" text-anchor="middle"
			>loading...</text
		>
	{:then value}
		{#each Object.keys(value[0]).filter((d) => ['m1', 'm2', 'm3'].includes(d)) as category}
			{console.log(category)}
			<path
				d={drawn_line.y((d) => yScale(d[category]))(value)}
				stroke="steelblue"
				stroke-width="2"
				fill="none"
				on:mouseenter={() => (linehover = true)}
				on:mouseleave={() => (linehover = false)}
				class:linehover
			/>
		{/each}
		<g bind:this={xAxis} transform="translate(0, {plotHeight - plotMargin + 10})" />
		<g bind:this={yAxis} transform="translate({plotMargin - 10}, 0)" />
	{/await}
</svg>

<style>
	.linehover {
		stroke-width: 4;
	}
</style>
