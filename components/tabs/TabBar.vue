<template>
  <div
    class="mdc-tab-bar"
    role="tablist"
    @MDCTabBar:activated="onActivated"
  >
    <slot v-if="hasScroller" />
    <div
      v-else
      class="mdc-tab-scroller"
      :class="scrollerClass"
    >
      <div class="mdc-tab-scroller__scroll-area">
        <div class="mdc-tab-scroller__scroll-content">
          <slot />
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
    focusOnActivate: {
      type: Boolean,
      default: true
    },
    useAutomaticActivation: {
      type: Boolean,
      default: true
    },
    activateTab: {
      type: Number,
      default: 0
    },
    scrollIntoView: {
      type: Number,
      default: 0
    },
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
      mdcTabBar: undefined,
      slotObserver: undefined,
      hasScroller: true
    }
  },
  computed: {
    scrollerClass () {
      const result = {}
      if (this.align !== '') {
        const className = `mdc-tab-scroller--align-${this.align}`
        result[className] = true
      }
      return result
    }
  },
  watch: {
    focusOnActivate (val) {
      this.mdcTabBar.focusOnActivate = val
    },
    useAutomaticActivation (val) {
      this.mdcTabBar.useAutomaticActivation = val
    },
    activateTab (val) {
      this.mdcTabBar.activateTab(val)
    },
    scrollIntoView (val) {
      this.mdcTabBar.scrollIntoView(val)
    },
    hasScroller () {
      this.reInstantiate()
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.updateSlot()
      this.slotObserver = new MutationObserver(() => this.updateSlot())
      this.slotObserver.observe(this.$el, {
        childList: true,
        subtree: true
      })

      this.mdcTabBar = MDCTabBar.attachTo(this.$el)
      this.mdcTabBar.focusOnActivate = this.focusOnActivate
      this.mdcTabBar.useAutomaticActivation = this.useAutomaticActivation
    })
  },
  beforeDestroy () {
    if (typeof this.mdcTabBar !== 'undefined') {
      this.mdcTabBar.destroy()
    }
  },
  methods: {
    onActivated (e) {
      this.$emit('activated', e.detail)
    },
    updateSlot () {
      let result = false
      this.$slots.default.forEach(v => {
        if (v.elm instanceof Element && v.elm.querySelector('.mdc-tab-scroller') != null) result = true
      })
      this.hasScroller = result
    },
    reInstantiate () {
      this.mdcTabBar.destroy()
      this.mdcTabBar = undefined

      this.mdcTabBar = MDCTabBar.attachTo(this.$el)
      this.mdcTabBar.focusOnActivate = this.focusOnActivate
      this.mdcTabBar.useAutomaticActivation = this.useAutomaticActivation
    }
  }
}
</script>
