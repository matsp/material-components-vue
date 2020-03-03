<template>
  <div class="mdc-shape-container">
    <slot />
    <div
      v-if="topLeft"
      class="mdc-shape-container__corner mdc-shape-container__corner--top-left"
    />
    <div
      v-if="topRight"
      class="mdc-shape-container__corner mdc-shape-container__corner--top-right"
    />
    <div
      v-if="bottomRight"
      class="mdc-shape-container__corner mdc-shape-container__corner--bottom-right"
    />
    <div
      v-if="bottomLeft"
      class="mdc-shape-container__corner mdc-shape-container__corner--bottom-left"
    />
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    topLeft: {
      type: Boolean,
      default: false
    },
    topRight: {
      type: Boolean,
      default: false
    },
    bottomRight: {
      type: Boolean,
      default: false
    },
    bottomLeft: {
      type: Boolean,
      default: false
    }
  }
}
</script>
