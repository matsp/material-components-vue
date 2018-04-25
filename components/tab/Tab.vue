<template>
  <button
    class="mdc-tab"
    :class="classes"
    role="tab"
    aria-selected="false">
    <div class="mdc-tab__content">
      <slot name="icon"/>
      <span
        class="mdc-tab__text-label"
        v-if="$slots['default']">
        <slot/>
      </span>
    </div>
  </button>
</template>

<script>
import { MDCTab } from '@material/tab'
import { MDCRipple } from '@material/ripple'
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  model: {
    prop: 'active',
    event: 'change'
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    interactive: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcTab: undefined,
      mdcRipple: undefined,
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-tab--active': this.active
      }
    }
  },
  mounted () {
    this.updateSlot()
    this.slotObserver = new MutationObserver( () => this.updateSlot())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    this.mdcTab = MDCTab.attachTo(this.$el)
    if (this.interactive) { this.mdcRipple = MDCRipple.attachTo(this.$el) }
  },
  beforeDestroy () {
    if (typeof this.mdcRipple !== 'undefined') this.mdcRipple.destroy()
    this.mdcTab.destroy()
  },
  methods: {
    updateSlot () {
      if (this.$slots.icon) {
        this.$slots.icon.map(n => {
          n.elm.classList.add('mdc-tab__icon')
        })
      }
    }
  }
}
</script>
