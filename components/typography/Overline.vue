<template>
  <span class="mdc-typography--overline">
    <slot />
  </span>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin]
}
</script>
