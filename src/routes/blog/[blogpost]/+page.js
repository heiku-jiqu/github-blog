export async function load({ params }) {
	const blogpost = await import(`../${params.blogpost}.svelte`);
	const metadata = blogpost.metadata;
	const content = blogpost.default;
	return {
		blogpost,
		content
	};
}
