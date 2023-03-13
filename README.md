# vitest-plugin-github-actions

[![NPM version](https://img.shields.io/npm/v/vitest-plugin-github-actions?color=dab40b&label=)](https://www.npmjs.com/package/vitest-plugin-github-actions)

> GitHub actions error and coverage reporter for vitest.

<br />

<img width="1193" src="./public/test.png">

## Install

```bash
pnpm install --save-dev vitest-plugin-github-actions
```

## Config

```ts
// vitest.config.ts || vite.config.ts
// import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import GitHubVitest from './src'

export default defineConfig({
  test: {
    reporters: process.env.GITHUB_ACTIONS
      ? ['default', new GitHubVitest()]
      : 'default',
  },
})
```

## Credits

Thanks to:

- [Vitest](https://github.com/vitest-dev/vitest)

- [@Anthony Fu](https://github.com/antfu)

- [@翠 / green/vitest-github-actions-reporter](https://github.com/sapphi-red/vitest-github-actions-reporter)

## License

[MIT](./LICENSE) License © 2023 [Elone Hoo](https://github.com/elonehoo)
