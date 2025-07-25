import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  compilerOptions: {
    warningFilter: (warning) =>
      !warning.filename?.includes('node_modules') && !warning.code.startsWith('a11y'),
  },
};
