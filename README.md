# swc-starter-template

This is a template project to start using [swc](https://swc.rs/) with [TypeScript](https://www.typescriptlang.org/).

Includes:
- Pre-configured [Webpack](https://webpack.js.org/) config with [swc-loader](https://swc.rs/docs/usage-swc-loader) and other plugins
- Support for [Jest](https://jestjs.io/) using [swc-jest](https://swc.rs/docs/usage-swc-jest)
- A default [ESLint](https://eslint.org/) config and TypeScript config.
- Support for [TypeDoc](https://typedoc.org/).

Usage:
- `npm run dev` for local development
- `npm run build` for build
- `npm run test` for tests
- `npm run lint` for linting
- `npm run docs` for document generation

Notes:
- The ***noEmit*** rule in tsconfig.json ***must be true*** in order to use swc; TypeScript is included only for linting and enforcement purposes and is otherwise not required to use swc.
- The goal of this project is to focus on TypeScript; JavaScript support is not implemented but is explained [here](https://swc.rs/docs/configuring-swc) in the swc docs.
