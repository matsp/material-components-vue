<template>
  <div class="mdc-layout-grid__inner">
    <slot />
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [themeClassMixin]
}
</script>
