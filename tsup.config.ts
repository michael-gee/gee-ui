import { defineConfig } from 'tsup';

export default defineConfig({
	// The file we created above that will be the entrypoint to the library.
	entry: ['src/index.ts'],
	// Format of the generated bundle.
	format: ['cjs', 'esm'],
	// Enable TypeScript type definitions to be generated in the output.
	// This provides type-definitions to consumers.
	dts: true,
	// Clean the `dist` directory before building.
	// This is useful to ensure the output is only the latest.
	clean: true,
	// Split the output into multiple files based on the imports.
	splitting: true,
	// Sourcemaps for easier debugging.
	sourcemap: true
});
