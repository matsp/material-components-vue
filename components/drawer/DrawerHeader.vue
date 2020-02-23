<template>
  <div
    v-if="$slots.default || title || subtitle"
    class="mdc-drawer__header"
  >
    <h3
      v-if="title"
      class="mdc-drawer__title"
    >
      {{ title }}
    </h3>
    <h6
      v-if="subtitle"
      class="mdc-drawer__subtitle"
    >
      {{ subtitle }}
    </h6>
    <slot />
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>
