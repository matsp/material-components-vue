# material-components-vue | mdc-web &#9829; vuejs

[![Build Status](https://travis-ci.org/matsp/material-components-vue.svg?branch=master)](https://travis-ci.org/matsp/material-components-web) 
[![npm version](https://badge.fury.io/js/material-components-vue.svg)](https://badge.fury.io/js/material-components-vue)

Ready to use vue components with the styling and behavior of material design.

WORK IN PROGRESS...


## component architecture principles

* container components e.g. 'Card' have named slots to fill in other components
* sub-components e.g. 'List' for optional content in other components
* state is outside of components and will be passed in as props
* components react on state changes with actions