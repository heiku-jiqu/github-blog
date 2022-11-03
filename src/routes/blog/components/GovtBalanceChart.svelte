<script>
	import { loop_guard, xlink_attr } from 'svelte/internal';
	import { fade } from 'svelte/transition';
	import { scaleLinear } from 'd3-scale';

	async function fetch_govt_balance_data() {
		const data_gov_url = 'https://data.gov.sg/api/action/datastore_search';
		const resource_id = '98856a60-33cd-482a-9dc4-1ed52e562d5d';
		const params_obj = {
			resource_id,
			q: 'balance'
		};
		let url_search_params = new URLSearchParams(params_obj);

		const response = await fetch(`${data_gov_url}?${url_search_params}`);
		const response_json = await response.json();
		// console.log(response_json);
		return response_json.result.records;
	}
	async function filter_data(promise) {
		let data = await promise;
		return data.filter((r) => r.item == 'Overall Balance');
	}

	let plotMargin = 100;
	let chartHeight = 600;
	let yScale = scaleLinear();

	let rect_hover = null;

	let govt_balance_data_promise = fetch_govt_balance_data();
	let filtered_data_promise = filter_data(govt_balance_data_promise).then((data) => {
		let yDomain = data.map((r) => r.amount);
		yScale.domain([Math.min(...yDomain), Math.max(...yDomain)]).range([chartHeight, 0]);
		rect_hover = yDomain.map(() => false);
		console.log(Math.max(...yDomain));
		console.log(data.map((r) => yScale(r.amount)));
		return data;
	});
</script>

<p>{rect_hover}</p>
{#await filtered_data_promise then filtered_data}
	<svg
		viewBox="{0 - plotMargin} {0 - plotMargin} {filtered_data.length * 50 +
			2 * plotMargin} {chartHeight + 2 * plotMargin}"
	>
		{#each filtered_data as r, i}
			<rect
				in:fade={{ delay: i * 50 }}
				y={yScale(Math.max(0, r.amount))}
				x={i * 50}
				width="30"
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
					x={i * 50}
					y={r.amount > 0 ? yScale(r.amount) - 10 : yScale(r.amount) + 10}
					dominant-baseline={r.amount > 0 ? 'baseline' : 'hanging'}
				>
					Year: {r.year_of_balance}
				</text>
				<text
					x={i * 50}
					y={r.amount > 0 ? yScale(r.amount) - 24 : yScale(r.amount) + 24}
					dominant-baseline={r.amount > 0 ? 'baseline' : 'hanging'}
				>
					Balance: {r.amount}
				</text>
				<text
					x={i * 50}
					y={r.amount > 0 ? yScale(r.amount) - 38 : yScale(r.amount) + 38}
					dominant-baseline={r.amount > 0 ? 'baseline' : 'hanging'}
				>
					Type: {r.actual_revised_estimated}
				</text>
				<text
					x={i * 50}
					y={r.amount > 0 ? yScale(r.amount) - 52 : yScale(r.amount) + 52}
					dominant-baseline={r.amount > 0 ? 'baseline' : 'hanging'}
				>
					Item: {r.item}
				</text>
			{/if}
		{/each}
	</svg>
{/await}
