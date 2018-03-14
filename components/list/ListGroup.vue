<template>
  <div class="mdc-list-group">
    <slot />
  </div>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin]
}
</script>
