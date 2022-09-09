<script>
	export let data;
	import { base } from '$app/paths';
</script>

<h1>blogposts</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={base + post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>

<style>
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		gap: 1rem;
	}
</style>
