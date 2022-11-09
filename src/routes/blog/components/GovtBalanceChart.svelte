<script>
	import { fade, fly } from 'svelte/transition';
	import { scaleLinear, scaleBand } from 'd3-scale';
	import { fetch_govt_balance_data } from '$lib/datagovsg/GovtBalanceData.js';

	async function filter_data(promise) {
		let data = await promise;
		return data.filter((r) => r.item == 'Overall Balance');
	}

	let plotMargin = 100;
	let chartHeight = 600;
	let chartWidth = 800;
	let yScale = scaleLinear();
	let xScale = scaleBand();

	let rect_hover = null;

	let govt_balance_data_promise = fetch_govt_balance_data();
	let filtered_data_promise = filter_data(govt_balance_data_promise).then((data) => {
		let yDomain = data.map((r) => r.amount);
		let xDomain = data.map((r) => r.year_of_balance);
		yScale.domain([Math.min(...yDomain), Math.max(...yDomain)]).range([chartHeight, 0]);
		xScale.domain(xDomain).range([0, chartWidth]).paddingInner(0.1);
		rect_hover = yDomain.map(() => false);
		return data;
	});

	// get mouse position in svg coordinate
	let svg;
	let svg_point;
	function toSVGPoint(svg, screenX, screenY) {
		let p = new DOMPoint(); // use DOMPoint for matrixTransform method
		// set where the point is currently at
		p.x = screenX;
		p.y = screenY;
		// svg object has a method getScreenCTM() to returns a matrix that can transform from SVG coords Screen coords
		// this matrix can then be inversed to transform Screen coords to SVG coords
		return p.matrixTransform(svg.getScreenCTM().inverse());
	}
</script>

<svelte:window />
{#await filtered_data_promise}
	<svg
		viewBox="{0 - plotMargin} {0 - plotMargin} {chartWidth + 2 * plotMargin} {chartHeight +
			2 * plotMargin}"
	>
		<path
			fill="black"
			d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
		>
			<animateTransform
				attributeName="transform"
				attributeType="XML"
				type="rotate"
				dur="1s"
				from="0 50 50"
				to="360 50 50"
				repeatCount="indefinite"
			/>
		</path>
	</svg>
{:then filtered_data}
	<svg
		viewBox="{0 - plotMargin} {0 - plotMargin} {chartWidth + 2 * plotMargin} {chartHeight +
			2 * plotMargin}"
		bind:this={svg}
		on:mousemove={(e) => {
			if (svg) {
				svg_point = toSVGPoint(svg, e.clientX, e.clientY);
			}
		}}
	>
		{#each yScale.ticks() as tick}
			<g in:fly={{ x: -200, duration: 1000 }}>
				<line x2={chartWidth} y1={yScale(tick)} y2={yScale(tick)} stroke="grey" />
				<text text-anchor="end" dominant-baseline="middle" dx="-10" y={yScale(tick)}>
					{tick}
				</text>
			</g>
		{/each}
		{#each filtered_data as r, i}
			<rect
				in:fade={{ delay: i * 80 }}
				y={yScale(Math.max(0, r.amount))}
				x={xScale(r.year_of_balance)}
				width={xScale.bandwidth()}
				height={Math.abs(yScale(r.amount) - yScale(0))}
				on:mouseenter={() => {
					rect_hover[i] = true;
				}}
				on:mouseleave={() => {
					rect_hover[i] = false;
				}}
				fill={r.amount < 0 ? 'brown' : 'steelblue'}
			/>
		{/each}
		{#each filtered_data as r, i}
			{#if rect_hover[i]}
				<text
					x={Math.min(svg_point.x, chartWidth - 120)}
					y={r.amount > 0 ? svg_point.y - 10 : svg_point.y + 20}
					dominant-baseline={r.amount > 0 ? 'baseline' : 'hanging'}
				>
					Year: {r.year_of_balance}
				</text>
				<text
					x={Math.min(svg_point.x, chartWidth - 120)}
					y={r.amount > 0 ? svg_point.y - 24 : svg_point.y + 34}
					dominant-baseline={r.amount > 0 ? 'baseline' : 'hanging'}
				>
					Balance: {r.amount}
				</text>
				<text
					x={Math.min(svg_point.x, chartWidth - 120)}
					y={r.amount > 0 ? svg_point.y - 38 : svg_point.y + 48}
					dominant-baseline={r.amount > 0 ? 'baseline' : 'hanging'}
				>
					Type: {r.actual_revised_estimated}
				</text>
				<text
					x={Math.min(svg_point.x, chartWidth - 120)}
					y={r.amount > 0 ? svg_point.y - 52 : svg_point.y + 62}
					dominant-baseline={r.amount > 0 ? 'baseline' : 'hanging'}
				>
					Item: {r.item}
				</text>
			{/if}
		{/each}
		<!--{#if svg_point}
			{console.log(svg_point)}
			<circle cx={svg_point.x} cy={svg_point.y} r="50" fill="red" />
		{/if}
		-->
	</svg>
{/await}
