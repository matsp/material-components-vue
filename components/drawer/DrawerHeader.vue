<template>
  <header
    v-if="$slots['default']"
    class="mdc-drawer__header">
    <div class="mdc-drawer__header-content">
      <slot />
    </div>
  </header>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin]
}
</script>
