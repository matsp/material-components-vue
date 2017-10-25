<template>
    <nav v-if="!scrollable" class="mdc-tab-bar" :class="classes">
        <slot />
        <span class="mdc-tab-bar__indicator"></span>
    </nav>
    <div v-else class="mdc-tab-bar-scroller">
        <div class="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back">
            <a class="mdc-tab-bar-scroller__indicator__inner material-icons" href="#" aria-label="scroll back button">
                navigate_before
            </a>
        </div>
        <div class="mdc-tab-bar-scroller__scroll-frame">
            <nav class="mdc-tab-bar" :class="classes">
                <slot />
                <span class="mdc-tab-bar__indicator"></span>
            </nav>
        </div>
        <div class="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward">
            <a class="mdc-tab-bar-scroller__indicator__inner material-icons" href="#" aria-label="scroll forward button">
                navigate_next
            </a>
        </div>
    </div>
</template>

<script>
import { MDCTabBar, MDCTabBarScroller } from '@material/tabs'

export default {
  props: {
    scrollable: {
      type: Boolean,
      required: false
    },
    iconTabBar: {
      type: Boolean,
      required: false
    },
    withIconAndText: {
      type: Boolean,
      required: false
    },
    accent: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      mdcTabBar: null,
      mdcTabBarScroller: null
    }
  },
  mounted () {
    if (this.$slots.default) { this.$slots.default.map(n => n.elm.classList.add('mdc-tab')) }

    if (this.$slots.default && this.withIconAndText) {
      this.$slots.default.map(n =>
        n.elm.classList.add('mdc-tab--with-icon-and-text')
      )
    }

    this.scrollable ? this.mdcTabBarScroller = MDCTabBarScroller.attachTo(this.$el) : this.mdcTabBar = MDCTabBar.attachTo(this.$el)
  },
  beforeDestroy () {
    this.scrollable ? this.mdcTabBarScroller.destroy() : this.mdcTabBar.destroy()
  },
  computed: {
    classes () {
      return {
        'mdc-tab-bar-scroller__scroll-frame__tabs': this.scrollable,
        'mdc-tab-bar--icon-tab-bar': this.iconTabBar,
        'mdc-tab-bar--icons-with-text': this.withIconAndText,
        'mdc-tab-bar--indicator-accent': this.accent
      }
    }
  }
}
</script>

<style lang="scss">
@import "@material/tabs/mdc-tabs";
</style>
