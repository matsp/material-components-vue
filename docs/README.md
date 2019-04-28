---
home: true
heroImage: /assets/images/mcv-hero.png
actionText: Get Started →
actionLink: /guide/
features:
- title: Material Design Specs
  details: This library wraps the official Google mdc-web components which implement the Material Design specs.
- title: Easy API
  details: Simple and small as possible component APIs, without reinventing HTML.
- title: Decoupled Components
  details: Any component can be imported and used on it's own.
footer: MIT Licensed | Copyright © 2017-present Mats Pfeiffer
---

## Quick Start

```bash
npm install --save material-components-vue

# or with yarn
yarn add material-components-vue
```

```vue
<template>
  <m-button>Hello</m-button>
</template>

<script>
  import Button from 'material-components-vue/dist/button'
</script>

<style>
  @import "material-components-vue/dist/button/button.min.css";
</style>
```

For components like Drawer to work, include the theme, typography and layout grid globally in your App.vue file.
```
import Vue from 'vue';
import Typography from 'material-components-vue/dist/typography';
import LayoutGrid from 'material-components-vue/dist/layout-grid'

Vue.use(Typography)
Vue.use(LayoutGrid)
```

