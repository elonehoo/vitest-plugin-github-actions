import { defineConfig } from 'vitest/config'
import GitHubVitest from './src'

export default defineConfig({
  test: {
    reporters: process.env.GITHUB_ACTIONS
      ? ['default', new GitHubVitest()]
      : 'default',
  },
})
