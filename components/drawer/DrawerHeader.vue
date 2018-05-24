<template>
  <header
    class="mdc-drawer__header"
    v-if="$slots['default']">
    <div class="mdc-drawer__header-content">
      <slot />
    </div>
  </header>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [themeClassMixin]
}
</script>
