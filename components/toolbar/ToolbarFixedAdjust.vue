<template>
  <div class="mdc-toolbar-fixed-adjust">
    <slot />
  </div>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin]
}
</script>
