import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: {
			plugins: [tailwind, autoprefixer]
		}
	}),
	resolve: {
		alias: {
			'./runtimeConfig': './runtimeConfig.browser'
		}
	},
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		
	}
};

export default config;
