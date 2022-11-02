<script>
	import { loop_guard, xlink_attr } from 'svelte/internal';
	import { fade } from 'svelte/transition';

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
	let govt_balance_data_promise = fetch_govt_balance_data();
	let filtered_data_promise = filter_data(govt_balance_data_promise);
	let rect_hover = false;
</script>

<p>{rect_hover}</p>
{#await filtered_data_promise then filtered_data}
	<svg viewBox="0 0 {filtered_data.length * 50} 500">
		{#each filtered_data as r, i}
			<rect
				in:fade={{ delay: i * 50 }}
				y="0"
				x={0 + i * 50}
				width="30"
				height={Math.abs(r.amount) / 100}
				on:mouseenter={() => {
					console.log('before: ', rect_hover);
					rect_hover = true;
					console.log(rect_hover);
				}}
				on:mouseleave={() => {
					rect_hover = false;
					console.log(rect_hover);
				}}
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
				<text x={i * 50} y={Math.abs(r.amount) / 100 + 60}>
					Year: {r.year_of_balance} Balance: {r.amount} Type: {r.actual_revised_estimated} Item:
					{r.item}
				</text>
			{/if}
		{/each}
	</svg>
{/await}
