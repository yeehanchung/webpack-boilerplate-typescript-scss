# Webpack Boilerplate

This boilerplate is a playground for us to start developing stuff using:

- TypeScript
- SCSS
- HTML

## Get started

Install all dependencies.

```shell
npm install
```

Run development server locally. Can see any changes everything code changes.

```shell
npm run dev
```

Want to upload to a server? Build everything and upload it.

```shell
npm run build && npm run serve
```

How it is processed?

- Must -D to not distribute to the users
- Compile for us by using webpack.config.js
- Two processes are running:
  - dev server (delivering)
  - server build

