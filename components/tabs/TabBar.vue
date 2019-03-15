<template>
  <div
          @MDCTabBar:activated="onActivated"
          class="mdc-tab-bar"
          role="tablist"
  >
      <slot/>
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
