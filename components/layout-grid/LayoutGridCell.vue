<template>
  <div
    :class="classes"
    class="mdc-layout-grid__cell">
    <slot />
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    span: {
      type: Number,
      validator: value => value >= 1 && value <= 12,
      required: false
    },
    spanDesktop: {
      type: Number,
      validator: value => value >= 1 && value <= 12,
      required: false
    },
    spanTablet: {
      type: Number,
      validator: value => value >= 1 && value <= 12,
      required: false
    },
    spanPhone: {
      type: Number,
      validator: value => value >= 1 && value <= 12,
      required: false
    },
    order: {
      type: Number,
      validator: value => value >= 1 && value <= 12,
      required: false
    },
    align: {
      type: String,
      validator: value => ['top', 'middle', 'bottom'].indexOf(value) > -1,
      required: false
    }
  },
  computed: {
    classes () {
      let temp = {}
      temp['mdc-layout-grid__cell--span-' + this.span] = typeof this.span === 'number'
      temp['mdc-layout-grid__cell--span-' + this.spanDesktop + '-desktop'] = typeof this.spanDesktop === 'number'
      temp['mdc-layout-grid__cell--span-' + this.spanTablet + '-tablet'] = typeof this.spanTablet === 'number'
      temp['mdc-layout-grid__cell--span-' + this.phone + '-phone'] = typeof this.phone === 'number'
      temp['mdc-layout-grid__cell--align-' + this.align] = typeof this.align === 'string'
      temp['mdc-layout-grid__cell--order-' + this.order] = typeof this.order === 'number'
      return temp
    }
  }
}
</script>
