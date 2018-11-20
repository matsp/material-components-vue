<template>
  <div
    role="tablist"
    class="mdc-tab-bar" >
    <div class="mdc-tab-scroller">
      <div class="mdc-tab-scroller__scroll-area">
        <div class="mdc-tab-scroller__scroll-content">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MDCTabBar } from '@material/tab-bar'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    scrollable: {
      type: Boolean,
      default: false
    },
    iconTabBar: {
      type: Boolean,
      default: false
    },
    withIconAndText: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcTabBar: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-tab-bar-scroller__scroll-frame__tabs': this.scrollable,
        'mdc-tab-bar--icon-tab-bar': this.iconTabBar,
        'mdc-tab-bar--icons-with-text': this.withIconAndText
      }
    }
  },
  mounted () {
    this.mdcTabBar = MDCTabBar.attachTo(this.$el)
  },
  beforeDestroy () {
    if (typeof this.mdcTabBar !== 'undefined') {
      this.mdcTabBar.destroy()
    }
  }
}
</script>
