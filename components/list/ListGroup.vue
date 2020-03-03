<template>
  <div class="mdc-list-group">
    <h3
      v-if="subheader.length > 0"
      class="mdc-list-group__subheader"
    >
      {{ subheader }}
    </h3>
    <slot />
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    subheader: {
      type: String,
      default: ''
    }
  }
}
</script>
