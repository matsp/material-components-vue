<template>
  <header
    :class="classes"
    class="mdc-top-app-bar"
    @MDCTopAppBar:nav="onNavigation()"
  >
    <div class="mdc-top-app-bar__row">
      <section
        v-if="$slots['navigation'] || title"
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
      >
        <slot name="navigation" />
        <span
          v-if="title.length > 0"
          class="mdc-top-app-bar__title"
        >
          {{ title }}
        </span>
        <slot name="start" />
      </section>
      <slot />
      <section
        v-if="$slots['actions']"
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
        role="toolbar"
      >
        <slot name="end" />
        <slot name="actions" />
      </section>
    </div>
  </header>
</template>

<script>
import { MDCTopAppBar } from '@material/top-app-bar'

import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    short: {
      type: Boolean,
      default: false
    },
    prominent: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    scrollTarget: {
      type: Object,
      default: () => undefined,
      validator: val => val instanceof EventTarget
    }
  },
  data () {
    return {
      mdcTopAppBar: undefined,
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-top-app-bar--short': this.short && !this.collapsed,
        'mdc-top-app-bar--short-collapsed': this.collapsed && this.short,
        'mdc-top-app-bar--prominent': this.prominent && !this.short,
        'mdc-top-app-bar--dense': this.dense && !this.short,
        'mdc-top-app-bar--fixed': this.fixed && !this.short
      }
    }
  },
  watch: {
    scrollTarget (el) {
      if (this.mdcTopAppBar && el) {
        this.mdcTopAppBar.setScrollTarget(el)
      }
    }
  },
  mounted () {
    this.updateSlots()
    this.slotObserver = new MutationObserver(() => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })

    this.mdcTopAppBar = MDCTopAppBar.attachTo(this.$el)
    if (this.scrollTarget && this.scrollTarget !== window) this.mdcTopAppBar.setScrollTarget(this.scrollTarget)
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    this.mdcTopAppBar.destroy()
  },
  methods: {
    updateSlots () {
      if (this.$slots.navigation) {
        this.$slots.navigation.forEach(n => {
          if (n.elm instanceof Element) n.elm.classList.add('mdc-top-app-bar__navigation-icon')
        })
      }
      if (this.$slots.actions) {
        this.$slots.actions.forEach(n => {
          if (n.elm instanceof Element) { n.elm.classList.add('mdc-top-app-bar__action-item') }
        })
      }
    },
    onNavigation () {
      this.$emit('nav')
    }
  }
}
</script>
