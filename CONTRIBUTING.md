# Contributing to material-components-vue

## Contribution workflow

The changes should be developed in your own fork and based on branches.
When you have finished your work you create a PR (pull request) on Github.

## Setup project

Fork the project on Github and clone your own repository to your machine.
This project uses yarn as default packagemanager - so be sure to install yarn first. After that install all dependencies with:

```shell
$ yarn
```

### Build all components (dev)
```shell
$ yarn build
```

### Build all components (dev) in watch-mode
```shell
$ yarn watch:dev
```

### Build all components (prod)
```shell
$ yarn build:min
```

### Serve docs (dev)
```shell
$ yarn docs:dev
```

### Build docs (prod)
```shell
$ yarn docs:prod
```

### Run tests
```shell
$ yarn test
```

### Run tests in watch-mode
```shell
$ yarn test:watch
```

### Run tests and update snapshots
```shell
$ yarn test:updateSnapshot
```

### Lint all files (js/vue)
```shell
$ yarn lint
```
