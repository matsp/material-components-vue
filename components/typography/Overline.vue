<template>
  <span class="mdc-typography--overline">
    <slot />
  </span>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [themeClassMixin]
}
</script>
