<script>
	import { base } from '$app/paths';
</script>

<header>
	<a href="{base}/">Home</a>

	<nav>
		<ul>
			<li><a href="{base}/blog">Blog</a></li>
			<li><a href="{base}/about">About</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}
	a {
		text-decoration: none;
		color: #81b29a;
		font-size: 20pt;
	}
</style>
