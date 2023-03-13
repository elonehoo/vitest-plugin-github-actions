import { defineConfig } from 'vitest/config'
import GitHubVitest from './src'
// Import { GithubReporter } from './dist/index.mjs';

export default defineConfig({
  test: {
    reporters: process.env.GITHUB_ACTIONS
      ? ['default', new GitHubVitest()]
      : 'default',
  },
})
