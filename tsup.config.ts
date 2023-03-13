import {defineConfig} from 'tsup';

export default defineConfig([
	{
		entry: ['src/index.ts'],
		format: ['cjs', 'esm'],
		dts: true,
		sourcemap: true,
		clean: true,
	},
	{
		entry: ['src/action.ts'],
		format: ['esm', 'cjs'],
		dts: true,
		sourcemap: true,
		clean: true,
	},
]);
