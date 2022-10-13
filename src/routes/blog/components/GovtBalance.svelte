<script>
	import { xlink_attr } from 'svelte/internal';

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
		console.log(response_json);
		return response_json.result.records;
	}

	let govt_balance_data_promise = fetch_govt_balance_data();
</script>

<div>
	{#await govt_balance_data_promise}
		<p>loading..</p>
	{:then govt_balance_data}
		{#each govt_balance_data as r}
			<section>
				Year: {r.year_of_balance} | Balance: {r.amount} | Type: {r.actual_revised_estimated} | Item:
				{r.item}
			</section>
		{/each}
	{/await}
</div>
