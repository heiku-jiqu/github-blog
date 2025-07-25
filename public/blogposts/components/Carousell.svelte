<script>
	let numbers = [1, 2, 3, 4, 5, 6, 7];
</script>

<div class="container">
	{#each numbers as number}
		<section class="item">{number}</section>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 27%;

		overflow-x: auto;

		gap: 2em;

		scroll-snap-type: x mandatory;
	}
	.container > * {
		background-color: var(--terra-cotta);
		border: 2px solid black;
		height: 3em;
		text-align: center;

		scroll-snap-align: start;
	}
</style>
