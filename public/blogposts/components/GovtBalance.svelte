<script>
	import { xlink_attr } from 'svelte/internal';
	import { fade } from 'svelte/transition';
	import { fetch_govt_balance_data } from '$lib/datagovsg/GovtBalanceData.js';

	let govt_balance_data_promise = fetch_govt_balance_data();
</script>

<div>
	{#await govt_balance_data_promise}
		<p>loading..</p>
	{:then govt_balance_data}
		{#each govt_balance_data as r, i}
			<section in:fade={{ delay: i * 50 }}>
				Year: {r.year_of_balance} | Balance: {r.amount} | Type: {r.actual_revised_estimated} | Item:
				{r.item}
			</section>
		{/each}
	{/await}
</div>
