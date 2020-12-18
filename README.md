# React, Webpack, TypeScript, TailwindCSS Boilerplate
> Minimal boilerplate with hot module replacement (HMR) for rapid development.

* **[React](https://facebook.github.io/react/)** (17.x)
* **[Webpack](https://webpack.js.org/)** (5.x)
* **[Babel](https://babeljs.io/)** (7.x)
* **[TypeScript](https://www.typescriptlang.org/)** (4.1.x)
* **[Tailwind CSS](https://tailwindcss.com/)** (2.x)
* [Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/) ([React Hot Loader](https://github.com/gaearon/react-hot-loader))
* Production build script (Webpack)
* Image loading/minification ([Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader))
* [SASS](https://sass-lang.com/) support
* TypeScript linting ([ESLint](https://github.com/eslint/eslint)) and formatting ([Prettier](https://github.com/prettier/prettier))
* CSS/Sass linting ([StyleLint](https://github.com/stylelint/stylelint))

## Installation
I strongly recommend the use of Yarn. If you do not have yarn, install it using `npm install yarn --global`
1. Clone/download repo
2. `yarn install`

## Usage

**Development**

`yarn start`

* Build app continuously (HMR enabled)
* App served @ `http://localhost:8080`

**Production**

`yarn build`

* Build app once (HMR disabled) to `/dist/`

---

**All commands**

Command | Description
--- | ---
`yarn start` | Build app continuously (HMR enabled) and serve @ `http://localhost:8080`
`yarn build` | Build app to `/dist/`
`yarn lint` | Run linter
`yarn lint --fix` | Run linter and fix issues
