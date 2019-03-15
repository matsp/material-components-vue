<template>
  <div class="mdc-tab-scroller">
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
  name: 'TabScroller',
  mixins: [baseComponentMixin, themeClassMixin],
  data () {
    return {
      mdcTabScroller: undefined
    }
  },
  mounted () {
    this.mdcTabScroller = MDCTabScroller.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcTabScroller.destroy()
  }
}
</script>

<style scoped>

</style>
