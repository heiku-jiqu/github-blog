import { json } from '@sveltejs/kit';
const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/blogposts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(0, -3).replace('/blogposts', '').replace('/src/routes', '');

			return {
				meta: metadata,
				path: postPath
			};
		})
	);
	return allPosts;
};

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	return json(allPosts);
};
