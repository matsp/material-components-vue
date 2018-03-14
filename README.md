# Material design styled components for Vue.js
[![npm](https://img.shields.io/npm/l/material-components-vue.svg)](https://github.com/matsp/material-components-vue/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/material-components-vue.svg)](https://www.npmjs.com/package/material-components-vue)


[![npm version](https://img.shields.io/npm/v/material-components-vue.svg)](https://www.npmjs.com/package/material-components-vue)
[![mdc-web](https://img.shields.io/badge/mdc--web-0.32.0-orange.svg)](https://www.npmjs.com/package/material-components-web)
[![Build Status](https://travis-ci.org/matsp/material-components-vue.svg?branch=master)](https://travis-ci.org/matsp/material-components-vue) 
[![Greenkeeper badge](https://badges.greenkeeper.io/matsp/material-components-vue.svg)](https://greenkeeper.io/)

Material-components-vue integrates the [mdc-web](https://github.com/material-components/material-components-web) (by google) vanilla components following the [simple approach](https://github.com/material-components/material-components-web/blob/master/docs/integrating-into-frameworks.md#the-simple-approach-wrapping-mdc-web-vanilla-components).

## TL;DR

* decoupled components
* implementing just the specs not more or less
* keep the components as simple as possible
* keep in sync with changes in the mdc-web repository
* user friendly component api

### JavaScript distributions

| Name | ECMA | Minimized |
|------|------|-----------|
| dist/[component]/index.js | 5 | no |
| dist/[component]/[component].min.js | 5 | yes |

All versions are provided as UMD modules.

### CSS / SASS distributions

| Name | Description |
|------|-----------|
| dist/[component]/[component].min.css | Minified component CSS |
| dist/[component]/styles.scss | Raw SASS styles (prefered for customization) |

## quick start

### links

* [Changelog](https://github.com/matsp/material-components-vue/blob/master/CHANGELOG.md)
* [Codepen CDN Example](https://codepen.io/matsp/pen/baxLOx)
* [Code of Conduct](https://github.com/matsp/material-components-vue/blob/master/CODE_OF_CONDUCT.md)
* [Demos (work in progress)](https://matsp.github.io/material-components-vue)

### installation

```shell
npm install --save material-components-vue

yarn add material-components-vue
```

## usage

### bundler

#### import components

```javascript
import Button from 'material-components-vue/dist/button'
import Card from 'material-components-vue/dist/card'
// ...

Vue.use(Button)
Vue.use(Card)
// ...
```

### [CDN](https://codepen.io/matsp/pen/baxLOx)

```html
<html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.com/libraries/normalize">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" type="text/css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://unpkg.com/material-components-vue/dist/typography/typography.min.css">
    <link rel="stylesheet" href="https://unpkg.com/material-components-vue/dist/button/button.min.css">
  </head>
  <body>
    <div id="app">
      <m-typography>
        <m-button interactive>Example</m-button>
        <m-button interactive raised>Example</m-button>
        <m-button interactive stroked>Example</m-button>
      </m-typography>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/material-components-vue/dist/typography/typography.min.js"></script>
    <script src="https://unpkg.com/material-components-vue/dist/button/button.min.js"></script>
    <script>
      const app = new Vue({
        el: '#app'
      })
    </script>
  </body>
 </html>
```

## theming

### MDC classes

For simple color modifications of components e.g. changing the background color from primary to secondary color it is
possible to use the `theming` prop on each component to set one of the mdc-theme CSS classes.
You don't need to set the full name of the css class just the last part (see example). For a complete list of available 
CSS classes have a look [here](https://github.com/material-components/material-components-web/tree/master/packages/mdc-theme#css-classes).

```html
<m-button theming="secondary-bg">
  Secondary-Button
</m-button>
```

```html
<style lang="scss">
  @import "material-components-vue/dist/theme/styles";
</style>
```

### SASS

Import all SASS files for the imported components and override with SASS variables:

```html
<style lang="scss">
  $mdc-theme-primary: #2196f3;
  $mdc-theme-secondary: #ff1744;
  $mdc-theme-background: #f5f5f5;
  @import "material-components-vue/dist/theme/styles";
  @import "material-components-vue/dist/button/styles";
  @import "material-components-vue/dist/card/styles";
  @import url('https://cdnjs.com/libraries/normalize');
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>
```

Don't forget to include the `@material` directory of your `node_modules` in your sass-loader options.
Otherwise the components won't compile sucessfully.

### CSS custom properties

Integrate a theme component in your template and pass in an object with CSS custom properties, but keep browser compatibilty in mind.

```html
<m-theme :customStyle="material">
  themed content
</m-theme>
```

```javascript
data() {
    return {
        material: {
            '--mdc-theme-primary-light': '#9162e4',
            '--mdc-theme-primary':  '#5e35b1',
            '--mdc-theme-primary-dark': '#280680',
            '--mdc-theme-secondary': '#ff5722',
            '--mdc-theme-secondary-light': '#ff8a50',
            '--mdc-theme-secondary-dark': '#c41c00',
            '--mdc-theme-background': '#ffffff',
            '--mdc-theme-text-primary-on-primary': '#ffffff',
            '--mdc-theme-text-secondary-on-secondary': '#000000'
        }
    }
}
```

```html
<style lang="css">
  @import "~material-components-vue/dist/theme/styles";
  @import url('https://cdnjs.com/libraries/normalize');
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>
```
