<template>
  <div
    v-if="$slots['default'] || title || subTitle"
    class="mdc-drawer__header"
  >
    <h3
      v-if="title"
      class="mdc-drawer__title"
    >
      {{ title }}
    </h3>
    <h6
      v-if="subTitle"
      class="mdc-drawer__subtitle"
    >
      {{ subTitle }}
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
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>
