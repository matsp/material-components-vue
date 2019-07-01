<template>
  <div
    class="mdc-tab-bar"
    role="tablist"
    @MDCTabBar:activated="onActivated"
  >
    <slot v-if="$slots.default[0].tag.includes('m-tab-scroller')" />
    <!-- todo: it doesn't work with <div class='mdc-tab-scroller'> but only work with our own m-tab-scroller component. This need to be enhanced. -->
    <div
      v-else
      class="mdc-tab-scroller"
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
    }
  },
  data () {
    return {
      mdcTabBar: undefined
    }
  },
  watch: {
    focusOnActivate () {
      this.mdcTabBar.focusOnActivate = this.focusOnActivate
    },
    useAutomaticActivation () {
      this.mdcTabBar.useAutomaticActivation = this.useAutomaticActivation
    },
    activateTab () {
      this.mdcTabBar.activateTab(this.activateTab)
    },
    scrollIntoView () {
      this.mdcTabBar.scrollIntoView(this.scrollIntoView)
    }
  },
  mounted () {
    console.log(this.$slots.default[0].tag)
    this.mdcTabBar = MDCTabBar.attachTo(this.$el)
    this.mdcTabBar.focusOnActivate = this.focusOnActivate
    this.mdcTabBar.useAutomaticActivation = this.useAutomaticActivation
  },
  beforeDestroy () {
    if (typeof this.mdcTabBar !== 'undefined') {
      this.mdcTabBar.destroy()
    }
  },
  methods: {
    onActivated (e) {
      this.$emit('activated', e.detail)
    }
  }
}
</script>
