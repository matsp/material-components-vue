<template>
  <div class="mdc-layout-grid__inner">
    <slot />
  </div>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin]
}
</script>
