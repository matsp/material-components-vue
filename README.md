# material-components-vue | mdc-web &#9829; vuejs

[![Build Status](https://travis-ci.org/matsp/material-components-vue.svg?branch=master)](https://travis-ci.org/matsp/material-components-web) 
[![npm version](https://badge.fury.io/js/material-components-vue.svg)](https://badge.fury.io/js/material-components-vue)

Ready to use vue components with the styling and behavior of material design - including material-icons.
No deep foundation implementation, the components just use the CSS classes and minimal initialization code.
Instead of fully implement the mdc adapters I try to realize as much as possible with vue features and keep the
components compact if possible. There are only sub-components when they are needed because of optional other content.

## component architecture principles

* container components e.g. 'Card' have named slots to fill in other components
* sub-components for components with optional content e.g. 'List'
* state is outside of components and will be passed in as props - maybe modeled
* components react on state changes with actions
* components CSS classes can be modified by props e.g. 'isPrimary'

## component detail design
* optional id on every component
* just one type as prop e.g. Boolean instead of [Boolean, String]
* v-if on tags inside components if needed e.g. v-if="text" 
* v-bind="$attrs" to inherit parent non prop attributes in sub components & v-on="$listeners" to inherit their listeners


## TODO

### Common
* [x] Refactor components
* [x] Import as vuejs plugin
* [x] Extra repository for example
* [x] Export each component as plugin (and then as complete collection)
* [ ] Implement changes from mdc > 0.20.0
* [ ] Usage description
* [ ] Implement all missing components
* [ ] Adding testframework to project
* [ ] Use 'ref' inside components instead of IDs?
* [ ] Documentation of components and their usage (props, events, ...)

## Components

### Ready to use components
* Button
* Checkbox
* Dialog
* Card
* Fab
* FormField
* Icon
* IconToggle
* Drawer --> TemporaryDrawer
* Toolbar --> Fixed & Waterfall
* LayoutGrid
* List
* Textfield

### Missing components
* Drawer
* Toolbar
* GridList
* Snackbar
* RadioButton
* SelectMenu
* Slider
* Switch
* Progress
* Menus
* Tabs
* Typography
