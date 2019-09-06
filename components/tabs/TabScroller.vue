<template>
  <div
    class="mdc-tab-scroller"
    :class="classes"
  >
    <div class="mdc-tab-scroller__scroll-area">
      <div class="mdc-tab-scroller__scroll-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { MDCTabScroller } from '@material/tab-scroller'
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    align: {
      type: String,
      default: '',
      validator: function (value) {
        return ['start', 'end', 'center', ''].indexOf(value) !== -1
      }
    }
  },
  data () {
    return {
      mdcTabScroller: undefined
    }
  },
  computed: {
    classes () {
      const result = {}
      if (this.align !== '') {
        const className = `mdc-tab-scroller--align-${this.align}`
        result[className] = true
      }
      return result
    }
  },
  mounted () {
    this.mdcTabScroller = MDCTabScroller.attachTo(this.$el)
  },
  beforeDestroy () {
    if (this.mdcTabScroller) this.mdcTabScroller.destroy()
  }
}
</script>

<style scoped>

</style>
