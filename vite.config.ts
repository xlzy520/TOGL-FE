import path, { resolve } from 'path';
import type { ConfigEnv, UserConfigExport } from 'vite';
import { loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteSvgIcons from 'vite-plugin-svg-icons';
import VueJSX from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { ElementProResolver } from 'element-pro-components';

const customImports = {
	'element-pro-components': [
		'defineFormColumns',
		'defineFormMenuColumns',
		'defineFormSubmit',
		'defineTableColumns',
		'defineTableMenuColumns',
		'defineTableSelectionColumns',
		'defineTableIndexColumns',
		'defineTableExpandColumns',
		'defineCrudColumns',
		'defineCrudMenuColumns',
		'defineCrudBeforeOpen',
		'defineCrudBeforeClose',
		'defineCrudSearch',
		'defineCrudSubmit',
		'defineComponentProps',
		'defineDescriptionsColumns',
	],
};
const setAlias = (alias: [string, string][]) =>
	alias.map((v) => {
		return { find: v[0], replacement: path.resolve(__dirname, v[1]) };
	});
const proxy = (list: [string, string][]) => {
	const obj: IObject<any> = {};
	list.forEach((v) => {
		obj[v[0]] = {
			target: v[1],
			changeOrigin: true,
			rewrite: (path: any) => path.replace(new RegExp(`^${v[0]}`), ''),
			...(/^https:\/\//.test(v[1]) ? { secure: false } : {}),
		};
	});
	return obj;
};

export const r = (...args: any[]) => path.resolve(__dirname, '.', ...args);

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
	const root = process.cwd();
	const env = loadEnv(mode, root) as unknown as ImportMetaEnv;

	return {
		resolve: {
			alias: {
				...setAlias([
					['@/', 'src'],
					['/mock', 'mock'],
					['/server', 'server'],
				]),
				'@/': `${resolve(__dirname, 'src')}/`,
				'~/': `${resolve(__dirname, 'src')}/`,
			},
		},
		server: {
			proxy: env.VITE_PROXY ? proxy(JSON.parse(env.VITE_PROXY)) : {},
			port: env.VITE_PORT,
		},
		build: {
			// sourcemap: true,
			manifest: true,
			rollupOptions: {
				output: {
					manualChunks: {
						'element-plus': ['element-plus'],
						// echarts: ['echarts'],
						// pinyin: ['pinyin'],
					},
				},
			},
			chunkSizeWarningLimit: 600,
		},
		plugins: [
			vue(),
			viteSvgIcons({
				// 指定需要缓存的图标文件夹
				iconDirs: [path.resolve(process.cwd(), 'src/icons')],
				// 指定symbolId格式
				symbolId: 'icon-[dir]-[name]',
			}),
			VueJSX(),
			AutoImport({
				imports: ['vue', 'vue-router', '@vueuse/core', customImports],
				dirs: ['./src/components', './src/composables', './src/utils'],
				resolvers: [ElementPlusResolver(), ElementProResolver()],
			}),
			Components({
				resolvers: [ElementPlusResolver(), ElementProResolver()],
			}),
		],
		css: {
			postcss: {
				plugins: [
					require('autoprefixer'),
					require('tailwindcss/nesting'),
					require('tailwindcss'),
					require('postcss-simple-vars'),
					require('postcss-import'),
				],
			},
		},
	};
};
