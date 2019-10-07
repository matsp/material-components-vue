<p align="center">
  <a href="https://matsp.github.io/material-components-vue" target="_blank">
    <img width="280" src="https://raw.githubusercontent.com/matsp/material-components-vue/master/docs/.vuepress/public/assets/images/mcv-hero.png" alt="logo">
  </a>
</p>

<p align="center">
  <a href="https://circleci.com/gh/matsp/material-components-vue"><img src="https://circleci.com/gh/matsp/material-components-vue.svg?style=svg"></a>
  <a href="https://www.npmjs.com/package/material-components-vue"><img src="https://img.shields.io/npm/v/material-components-vue.svg"></a>
  <a href="https://www.npmjs.com/package/material-components-web"><img src="https://img.shields.io/badge/mdc--web-3.2.0-green.svg"></a>
  <a href="https://github.com/matsp/material-components-vue/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/material-components-vue.svg"></a>
  <a href="https://www.npmjs.com/package/material-components-vue"><img src="https://img.shields.io/npm/dt/material-components-vue.svg"></a>
  <a href="https://www.npmjs.com/package/material-components-vue"><img src="https://img.shields.io/npm/dw/material-components-vue.svg"></a>
</p>

# Material Components Vue

> Material Design styled components for Vue.js

Material-components-vue integrates the [mdc-web](https://github.com/material-components/material-components-web) (by google) vanilla components following the [simple approach](https://github.com/material-components/material-components-web/blob/master/docs/integrating-into-frameworks.md#the-simple-approach-wrapping-mdc-web-vanilla-components).

https://matsp.github.io/material-components-vue

## Development

This project is under active developement but I need any help you can provide. Due to a huge workload in my daily job I'am struggling with upgrading to the newest versions
of the upstream project: mdc-web.

## Links

* [Changelog](https://github.com/matsp/material-components-vue/blob/master/CHANGELOG.md)
* [Codepen CDN Example](https://codepen.io/matsp/pen/baxLOx)
* [Code of Conduct](https://github.com/matsp/material-components-vue/blob/master/CODE_OF_CONDUCT.md)
* [Contributing Guideline](https://github.com/matsp/material-components-vue/blob/master/CONTRIBUTING.md)
* [Docs](https://matsp.github.io/material-components-vue)

## Support

If you want to help feel free to submit issues or pull requests. Every information that help to stabilize and improve the library is welcome!

When you want to support me you can buy me a :coffee: here :+1:

<a href="https://www.buymeacoffee.com/udJy54VOU" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 30px !important;width: auto !important;"></a>

## Features

* decoupled components
* implementing just the specs not more or less
* keep the components as simple as possible
* keep in sync with changes in the mdc-web repository
* user friendly component api
* SSR (Server Side Rendering) support

## Documentation

You will find a API documentation for each component in their corresponding component directory:

*components/[component]/README.md*

## Distributions

| Name | ECMA | Minimized |
|------|-----:|----------:|
| dist/[component]/index.js | 5 | no |
| dist/[component]/[component].min.js | 5 | yes |

All versions are provided as UMD modules.

| Name | Description |
|------|-----------|
| dist/[component]/[component].min.css | Minified component CSS |
| dist/[component]/styles.scss | Raw SASS styles of mdc-web |
