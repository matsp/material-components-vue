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

import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  provide () {
    return {
      getTabScroller: this.getTabScroller,
      getTabInstance: this.getTabInstance,
      replaceTabInstance: this.replaceTabInstance
    }
  },
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
      default: 0,
      validator: function (value) {
        return value >= 0
      }
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
      hasScroller: this.$slots.default[0].componentOptions.tag === 'm-tab-scroller' // todo: error prone here. If no default slots provided, user will see a error in console which is hard to understand. And it disallows user to user a <div class='mdc-tab-scroller'> in default slot.
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
    this.updateSlot()
    this.mdcTabBar = MDCTabBar.attachTo(this.$el)

    this.slotObserver = new MutationObserver(() => this.updateSlot())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
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
      this.hasScroller = this.$slots.default.some(v => {
        return v.elm instanceof Element && v.elm.classList.contains('mdc-tab-scroller')
      })
    },
    reInstantiate () {
      if (this.mdcTabBar != null) {
        this.mdcTabBar.destroy()
        this.mdcTabBar = undefined
      }

      // use nextTick to wait for the scroller being created and mounted in the DOM tree
      this.$nextTick(() => {
        this.mdcTabBar = MDCTabBar.attachTo(this.$el)
        this.mdcTabBar.focusOnActivate = this.focusOnActivate
        this.mdcTabBar.useAutomaticActivation = this.useAutomaticActivation
      })
    },
    /**
     * get corresponding mdc-tab instance
     * @param el the tab element
     * @returns {*[MDCTab, number]} the corresponding mdc-tab and its index in the tab list
     */
    getTabInstance (el) {
      for (let i = 0; i < this.mdcTabBar.tabList_.length; i++) {
        const currentTabInstance = this.mdcTabBar.tabList_[i]
        if (currentTabInstance.root_ === el) return [currentTabInstance, i]
      }
    },
    getTabScroller () {
      return this.mdcTabBar.tabScroller_
    },
    /**
     * replace the specific tab instance in the tab list with a new instance
     * @param instance the new instance to replace
     * @param index the index of the instance to be replaced in the tab list
     */
    replaceTabInstance (instance, index) {
      this.mdcTabBar.tabList_[index] = instance
    }
  }
}
</script>
