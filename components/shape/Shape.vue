<template>
  <div class="mdc-shape-container">
    <slot/>
    <div
      v-if="topLeft"
      class="mdc-shape-container__corner mdc-shape-container__corner--top-left"/>
    <div
      v-if="topRight"
      class="mdc-shape-container__corner mdc-shape-container__corner--top-right"/>
    <div
      v-if="bottomRight"
      class="mdc-shape-container__corner mdc-shape-container__corner--bottom-right"/>
    <div
      v-if="bottomleft"
      class="mdc-shape-container__corner mdc-shape-container__corner--bottom-left"/>
  </div>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
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
