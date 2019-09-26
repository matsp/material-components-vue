<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :aria-selected="active"
    :class="classes"
    :tabindex="tabindex"
    class="mdc-tab"
    role="tab"
    @MDCTab:interacted="onInteracted"
  >
    <span class="mdc-tab__content">
      <slot name="icon" />
      <span class="mdc-tab__text-label">
        <slot />
      </span>
      <span
        v-if="spanningOnlyContent"
        :class="indicatorClasses"
        class="mdc-tab-indicator"
      >
        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
      </span>
    </span>
    <span
      v-if="!spanningOnlyContent"
      :class="indicatorClasses"
      class="mdc-tab-indicator"
    >
      <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
    </span>
    <span class="mdc-tab__ripple" />
  </component>
</template>

<script>
import { MDCTab } from '@material/tab'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'active',
    event: 'change'
  },
  props: {
    href: String,
    active: {
      type: Boolean,
      default: false
    },
    spanningOnlyContent: {
      type: Boolean,
      default: false
    },
    focusOnActivate: {
      type: Boolean,
      default: true
    },
    stacked: {
      type: Boolean,
      default: false
    },
    minWidth: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcTab: undefined,
      slotObserver: undefined,
      classObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-tab--active': this.active,
        'mdc-tab--stacked': this.stacked,
        'mdc-tab--min-width': this.minWidth
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
    model: {
      get () {
        return this.active
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  },
  watch: {
    focusOnActivate () {
      this.mdcTab.focusOnActivate = this.focusOnActivate
    }
  },
  mounted () {
    this.updateSlot()
    this.slotObserver = new MutationObserver(() => this.updateSlot())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })

    this.classObserver = new MutationObserver(() => this.updateActive())
    this.classObserver.observe(this.$el, {
      attributes: true
    })

    this.mdcTab = MDCTab.attachTo(this.$el)
    this.mdcTab.focusOnActivate = this.focusOnActivate
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    this.classObserver.disconnect()
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
    },
    updateActive () {
      if (this.$el.classList.contains('mdc-tab--active') && !this.active) {
        this.$emit('change', true)
      } else if (this.active && !this.$el.classList.contains('mdc-tab--active')) {
        this.$emit('change', false)
      }
    },
    onInteracted (e) {
      this.$emit('interacted', e.detail)
    }
  }
}
</script>
