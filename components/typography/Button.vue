<template>
  <span class="mdc-typography--button">
    <slot />
  </span>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin]
}
</script>
