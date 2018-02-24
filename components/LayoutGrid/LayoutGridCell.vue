<template>
  <div class="mdc-layout-grid__cell" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
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
      validator: value => ['top', 'left', 'bottom'].includes(value),
      required: false
    }
  },
  computed: {
    classes () {
      let temp = {}
      this.span
        ? (temp['mdc-layout-grid__cell--span-' + this.span] = true)
        : (temp['mdc-layout-grid__cell--span-' + this.span] = false)
      this.spanDesktop
        ? (temp['mdc-layout-grid__cell--span-' + this.spanDesktop + '-desktop'] = true)
        : (temp['mdc-layout-grid__cell--span-' + this.spanDesktop + '-desktop'] = false)
      this.spanTablet
        ? (temp['mdc-layout-grid__cell--span-' + this.spanTablet + '-tablet'] = true)
        : (temp['mdc-layout-grid__cell--span-' + this.spanTablet + '-tablet'] = false)
      this.spanPhone
        ? (temp['mdc-layout-grid__cell--span-' + this.phone + '-phone'] = true)
        : (temp['mdc-layout-grid__cell--span-' + this.phone + '-phone'] = false)
      this.align
        ? (temp['mdc-layout-grid__cell--align-' + this.align] = true)
        : (temp['mdc-layout-grid__cell--align-' + this.align] = false)
      this.order
        ? (temp['mdc-layout-grid__cell--order-' + this.order] = true)
        : (temp['mdc-layout-grid__cell--order-' + this.order] = false)
      return temp
    }
  }
}
</script>

