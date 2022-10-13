<script>
	import { onMount } from 'svelte';
	import Carousell from './Carousell.svelte';

	console.log('hello');
	const data_gov_url = 'https://data.gov.sg/api/action/datastore_search';
	const resource_id = '98856a60-33cd-482a-9dc4-1ed52e562d5d';
	const params_obj = {
		resource_id: resource_id,
		q: 'balance'
	};

	let url_search_params = new URLSearchParams(params_obj);
	let govt_balance_data;
	onMount(async () => {
		await fetch(data_gov_url + '?' + url_search_params)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				govt_balance_data = data.result.records;
				console.log(govt_balance_data);
			});
	});
</script>

<div>
	{#if govt_balance_data}
		{#each govt_balance_data as row}
			<section>{row.amount}</section>
		{/each}
	{:else}
		<p>loading..</p>
	{/if}
</div>
