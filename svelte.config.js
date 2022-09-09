import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
// https://stackoverflow.com/questions/72730192/how-to-host-a-sveltekit-adapter-static-project-on-github-pages

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/github-blog'
		}
	},
	extensions: ['.svelte', '.svx'],
	preprocess: [sveltePreprocess(), mdsvex()]
};
export default config;
