<template>
  <div
    :class="classes"
    class="mdc-layout-grid__cell"
  >
    <slot />
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    span: {
      type: Number,
      validator: value => value >= 0 && value <= 12,
      default: 0
    },
    spanDesktop: {
      type: Number,
      validator: value => value >= 0 && value <= 12,
      default: 0
    },
    spanTablet: {
      type: Number,
      validator: value => value >= 0 && value <= 12,
      default: 0
    },
    spanPhone: {
      type: Number,
      validator: value => value >= 0 && value <= 12,
      default: 0
    },
    order: {
      type: Number,
      validator: value => value >= 0 && value <= 12,
      default: 0
    },
    align: {
      type: String,
      validator: value => ['top', 'middle', 'bottom', ''].indexOf(value) > -1,
      default: ''
    }
  },
  computed: {
    classes () {
      return {
        [`mdc-layout-grid__cell--span-${this.span}`]: this.span > 0,
        [`mdc-layout-grid__cell--span-${this.spanDesktop}-desktop`]: this.spanDesktop > 0,
        [`mdc-layout-grid__cell--span-${this.spanTablet}-tablet`]: this.spanTablet > 0,
        [`mdc-layout-grid__cell--span-${this.spanPhone}-phone`]: this.spanPhone > 0,
        [`mdc-layout-grid__cell--align-${this.align}`]: this.align !== '',
        [`mdc-layout-grid__cell--order-${this.order}`]: this.order > 0
      }
    }
  }
}
</script>
