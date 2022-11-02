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

	let yScale = scaleLinear();

	let govt_balance_data_promise = fetch_govt_balance_data();
	let filtered_data_promise = filter_data(govt_balance_data_promise).then((data) => {
		let yDomain = data.map((r) => r.amount);
		yScale.domain([Math.min(...yDomain), Math.max(...yDomain)]).range([500, 0]);
		console.log(Math.max(...yDomain));
		console.log(data.map((r) => yScale(r.amount)));
		return data;
	});
	let rect_hover = false;
</script>

<p>{rect_hover}</p>
{#await filtered_data_promise then filtered_data}
	<svg viewBox="0 0 {filtered_data.length * 50} 500">
		{#each filtered_data as r, i}
			<rect
				in:fade={{ delay: i * 50 }}
				y={yScale(Math.max(0, r.amount))}
				x={0 + i * 50}
				width="30"
				height={Math.abs(yScale(r.amount) - yScale(0))}
				on:mouseenter={() => {
					rect_hover = true;
				}}
				on:mouseleave={() => {
					rect_hover = false;
				}}
				fill={r.amount < 0 ? 'brown' : 'steelblue'}
			/>
			{#if rect_hover}
				<text x={i * 50} y={Math.abs(r.amount) / 100 + 20}>
					Year: {r.year_of_balance}
				</text>
				<text x={i * 50} y={Math.abs(r.amount) / 100 + 30}>
					Balance: {r.amount}
				</text>
				<text x={i * 50} y={Math.abs(r.amount) / 100 + 40}>
					Type: {r.actual_revised_estimated}
				</text>
				<text x={i * 50} y={Math.abs(r.amount) / 100 + 50}>
					Item: {r.item}
				</text>
			{/if}
		{/each}
	</svg>
{/await}
