<template>
  <span class="mdc-typography--caption">
    <slot />
  </span>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [themeClassMixin]
}
</script>
