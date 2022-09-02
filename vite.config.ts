import type { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'./runtimeConfig': './runtimeConfig.browser'
		}
	}
};

export default config;
