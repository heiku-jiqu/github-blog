<script>
	export let data;

	import { base } from '$app/paths';
	import Header from './Header.svelte';
	import '../style.css';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-gruvbox-light.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<Header />
{#key data.currentRoute}
	<div in:fade>
		<slot />
	</div>
{/key}
