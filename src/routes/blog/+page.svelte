<script>
	export let data;
	import { base } from '$app/paths';

	let posts_earliest_first = data.posts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});
</script>

<h1>blogposts</h1>

<ul>
	{#each posts_earliest_first as post}
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
	}
	li {
		margin: 1rem;
	}
	h2 {
		margin: 0;
	}
</style>
