<script>
	export let data;

	import { base } from '$app/paths';
	import Header from './Header.svelte';
	import '../style.css';

	import { fade } from 'svelte/transition';
</script>

<Header />
{#key data.currentRoute}
	<div in:fade>
		<slot />
	</div>
{/key}
