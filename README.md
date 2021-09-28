# Webpack Boilerplate

This boilerplate is a playground for us to start developing stuff using:

- TypeScript
- SCSS
- HTML

## Getting started

Install all dependencies.

```shell
npm install
```

Run development server locally. Hot reloading on changes.

```shell
npm run dev
```

Want to build for `production` and upload to Netlify, Vercel, GitHub Pages and other deployment services?

1. Change the mode in `webpack.config.js` to from `development` to `production`.

2. Run build and serve scripts below:

```shell
npm run build && npm run serve
```

## How it is processed?

- Must -D to not distribute to the users
- Compile for us by using `webpack.config.js`
- Two processes are running:
  - dev server (delivering)
  - server build
