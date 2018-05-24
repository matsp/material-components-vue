<template>
  <span class="mdc-list-group__subheader">
    <slot />
  </span>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin]
}
</script>
