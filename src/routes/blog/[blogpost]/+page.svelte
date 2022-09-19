<script>
	export let data;
	//console.log(data);
</script>

{#if data.metadata.no_format}
	<svelte:component this={data.content} />
{:else}
	<div class="grid-container">
		<div class="sides" />
		<div class="article">
			<svelte:component this={data.content} />
		</div>
		<div class="sides" />
	</div>
{/if}

<style>
	.grid-container {
		display: grid;
		grid-template-columns: 1fr min(100%, 90ch) 1fr;
	}
	.article {
		padding: 2rem;
		text-align: justify;
	}
</style>
