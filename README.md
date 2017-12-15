# material-components-vue
[![npm](https://img.shields.io/npm/l/material-components-vue.svg)]()
[![npm](https://img.shields.io/npm/dt/material-components-vue.svg)](https://www.npmjs.com/package/material-components-vue)


[![npm version](https://badge.fury.io/js/material-components-vue.svg)](https://badge.fury.io/js/material-components-vue)
[![Build Status](https://travis-ci.org/matsp/material-components-vue.svg?branch=master)](https://travis-ci.org/matsp/material-components-vue) 
[![Greenkeeper badge](https://badges.greenkeeper.io/matsp/material-components-vue.svg)](https://greenkeeper.io/)



Material-components-vue integrates the mdc-web vanilla components following the [simple approach](https://github.com/material-components/material-components-web/blob/master/docs/integrating-into-frameworks.md#the-simple-approach-wrapping-mdc-web-vanilla-components).

## main goals

* decoupled components - can be cherry picked!
* implementing just the specs not more or less
* keep the components as simple as possible (KISS, DRY)
* keep in sync with changes in the mdc-web repository

## quick start

### links

* [Changelog](https://github.com/matsp/material-components-vue/blob/master/CHANGELOG.md)
* [Code of Conduct](https://github.com/matsp/material-components-vue/blob/master/CODE_OF_CONDUCT.md)
* [Demos](https://matsp.github.io/material-components-vue)

### installation

```shell
npm install --save material-components-vue

yarn add material-components-vue
```

### usage

You have to set up your own build workflow with webpack (see demo) or something else
to compile the components.

#### import all components
```javascript
import MaterialComponentsVue from 'material-components-vue'

Vue.use(MaterialComponentsVue)
```

#### cherry pick components
```javascript
import Button from 'material-components-vue/components/button'
import Card from 'material-components-vue/components/card'

Vue.use(Button)
Vue.use(Card)
```

#### customize/import theme & material-icons & roboto font
```scss
$mdc-theme-primary: #2196f3;
$mdc-theme-accent: #ff1744;
$mdc-theme-background: #f5f5f5;
@import '~material-components-vue/components/Theme/theme.scss';
@import url('https://cdnjs.com/libraries/normalize');
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
```
