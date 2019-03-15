<template>
  <div
    v-if="$slots['default']"
    class="mdc-drawer__content"
  >
    <slot />
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin]
}
</script>
