<template>
  <nav
    v-if="!scrollable"
    class="mdc-tab-bar"
    :class="classes">
    <slot />
    <span class="mdc-tab-bar__indicator"/>
  </nav>
  <div
    v-else
    class="mdc-tab-bar-scroller">
    <div class="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back">
      <a
        class="mdc-tab-bar-scroller__indicator__inner material-icons"
        href="#"
        aria-label="scroll back button">
        navigate_before
      </a>
    </div>
    <div class="mdc-tab-bar-scroller__scroll-frame">
      <nav
        class="mdc-tab-bar"
        :class="classes">
        <slot />
        <span class="mdc-tab-bar__indicator"/>
      </nav>
    </div>
    <div class="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward">
      <a
        class="mdc-tab-bar-scroller__indicator__inner material-icons"
        href="#"
        aria-label="scroll forward button">
        navigate_next
      </a>
    </div>
  </div>
</template>

<script>
import { MDCTabBar, MDCTabBarScroller } from '@material/tabs'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
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
      mdcTabBar: null,
      mdcTabBarScroller: null
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
    this.scrollable
      ? (this.mdcTabBarScroller = MDCTabBarScroller.attachTo(this.$el))
      : (this.mdcTabBar = MDCTabBar.attachTo(this.$el))
  },
  beforeDestroy () {
    this.scrollable
      ? this.mdcTabBarScroller.destroy()
      : this.mdcTabBar.destroy()
  }
}
</script>
