# material-components-vue

[![Build Status](https://travis-ci.org/matsp/material-components-vue.svg?branch=master)](https://travis-ci.org/matsp/material-components-vue) 
[![npm version](https://badge.fury.io/js/material-components-vue.svg)](https://badge.fury.io/js/material-components-vue)
[![Greenkeeper badge](https://badges.greenkeeper.io/matsp/material-components-vue.svg)](https://greenkeeper.io/)

material-components-vue is a simple approach implementation of the material-components-web package by google.

## installation

```shell
npm install --save material-components-vue

yarn add material-components-vue
```


## usage

### register plugin
```javascript
import MaterialComponentsVue from 'material-components-vue'

Vue.use(MaterialComponentsVue)
```

### customize/import theme & material-icons & roboto font
```scss
$mdc-theme-primary: #2196f3;
$mdc-theme-accent: #ff1744;
$mdc-theme-background: #f5f5f5;
@import '~material-components-vue/components/styles.scss';
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
```

## TODO

### Common
* [ ] A better theming integration
* [ ] Slots for components with text / labels
* [ ] Better implementation for css class binding in slot e.g. ListItem?
* [ ] Adding testframework to project
* [ ] Documentation of components and their usage (props, events, ...)

## Components

* Button
* Card
* Checkbox
* Dialog
* Fab
* FormField
* Icon
* IconToggle
* LayoutGrid
* LinearProgress
* List
* Menu
* Radio
* Select
* Slider
* Snackbar
* Switch
* Textfield
* Typography

### Missing components
* Drawer
* Elevation
* Toolbar
* GridList
* Ripple
* Tabs
* Theme

