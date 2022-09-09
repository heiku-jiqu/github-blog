<script>
	import { base } from '$app/paths';
	import Header from './Header.svelte';
</script>

<Header />
<slot />

<style global>
	/* CSS HEX 
--eggshell: #f4f1deff;
--terra-cotta: #e07a5fff;
--independence: #3d405bff;
--green-sheen: #81b29aff;
--deep-champagne: #f2cc8fff;
*/
	body {
		margin: 0;
		background: #f4f1deff;
		color: #3d405bff;
		font-family: Monaco, monospace;
		text-align: center;
	}

	a:link {
		color: #3d405bff;
	}
	a:hover {
		color: #f2cc8fff;
	}
	a:visited {
		color: #81b29aff;
	}
	main {
		padding: 1rem;
		margin: 2rem auto;
		max-width: 40rem;
	}
</style>
