<template>
  <nav
    v-if="!scrollable"
    :class="classes"
    class="mdc-tab-bar">
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
        :class="classes"
        class="mdc-tab-bar">
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
      mdcTabBar: undefined,
      mdcTabBarScroller: undefined
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
    if (typeof this.mdcTabBarScroller !== 'undefined') {
      this.mdcTabBarScroller.destroy()
    }
    if (typeof this.mdcTabBar !== 'undefined') {
      this.mdcTabBar.destroy()
    }
  }
}
</script>
