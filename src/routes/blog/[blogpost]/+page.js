export async function load({ params }) {
	const blogpost = await import(`../${params.blogpost}.md`);
	const metadata = blogpost.metadata;
	const content = blogpost.default;
	return {
		params,
		metadata,
		content
	};
}
