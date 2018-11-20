<template>
  <button
    :class="classes"
    :aria-selected="active"
    :tabindex="tabindex"
    class="mdc-tab"
    role="tab">
    <span class="mdc-tab__content">
      <span
        v-if="hasIcon"
        class="mdc-tab__icon material-icons"
        aria-hidden="true">
        <slot name="icon"/>
      </span>
      <span class="mdc-tab__text-label">
        <slot/>
      </span>
    </span>
    <span
      :class="indicatorClasses"
      class="mdc-tab-indicator">
      <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"/>
    </span>
    <span class="mdc-tab__ripple"/>
  </button>
</template>

<script>
import { MDCTab } from '@material/tab'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcTab: undefined,
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-tab--active': this.active
      }
    },
    indicatorClasses () {
      return {
        'mdc-tab-indicator--active': this.active
      }
    },
    tabindex () {
      return (this.active) ? '0' : '-1'
    },
    hasIcon () {
      return this.$slots.icon
    }
  },
  mounted () {
    this.updateSlot()
    this.slotObserver = new MutationObserver(() => this.updateSlot())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })

    this.mdcTab = MDCTab.attachTo(this.$el)
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    this.mdcTab.destroy()
  },
  methods: {
    updateSlot () {
      if (this.$slots.icon) {
        this.$slots.icon.map(n => {
          n.elm.classList.add('mdc-tab__icon')
          this.label ? n.elm.setAttribute('aria-label', true) : n.elm.setAttribute('aria-hidden', true)
        })
      }
    }
  }
}
</script>
