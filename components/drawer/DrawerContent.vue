<template>
  <nav
    class="mdc-drawer__content"
    v-if="$slots['default']">
    <slot />
  </nav>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin]
}
</script>
