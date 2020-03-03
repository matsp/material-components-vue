<template>
  <span class="mdc-typography--overline">
    <slot />
  </span>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin]
}
</script>
