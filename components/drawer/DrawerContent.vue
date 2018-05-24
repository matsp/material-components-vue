<template>
  <nav
    class="mdc-drawer__content"
    v-if="$slots['default']">
    <slot />
  </nav>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [themeClassMixin]
}
</script>
