<template>
    <div class="mdc-layout-grid__cell" :class="classes" :id="id">
        <slot />
    </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      require: false
    },
    span: {
      type: Number,
      required: false
    },
    spanDesktop: {
      type: Number,
      required: false
    },
    spanTablet: {
      type: Number,
      required: false
    },
    spanPhone: {
      type: Number,
      required: false
    },
    order: {
      type: Number,
      required: false
    },
    align: {
      type: String,
      required: false
    }
  },
  computed: {
    classes () {
      let temp = {}
      this.span ? temp['mdc-layout-grid__cell--span-' + this.span] = true : null
      this.spanDesktop ? temp['mdc-layout-grid__cell--span-' + this.spanDesktop + '-desktop'] = true : null
      this.spanTablet ? temp['mdc-layout-grid__cell--span-' + this.spanTablet + '-tablet'] = true : null
      this.spanPhone ? temp['mdc-layout-grid__cell--span-' + this.phone + '-phone'] = true : null
      this.align ? temp['mdc-layout-grid__cell--align-' + this.align] = true : null
      this.order ? temp['mdc-layout-grid__cell--order-' + this.order] = true : null
      return temp
    }
  }
}
</script>

<style lang="scss">
@import "@material/layout-grid/mdc-layout-grid";
</style>
