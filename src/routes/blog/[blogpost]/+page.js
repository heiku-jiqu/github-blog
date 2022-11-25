export async function load({ params }) {
	const blogpost = await import(`../blogposts/${params.blogpost}.md`);
	const metadata = blogpost.metadata;
	const content = blogpost.default;
	return {
		params,
		metadata,
		content
	};
}
