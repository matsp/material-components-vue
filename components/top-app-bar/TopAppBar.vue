<template>
  <header
    :class="classes"
    class="mdc-top-app-bar"
    @MDCTopAppBar:nav="onNavigation()"
  >
    <div class="mdc-top-app-bar__row">
      <section
        v-show="hasStartSection"
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
        v-show="hasEndSection"
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
import { MDCComponent } from '@material/base/component'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  provide () {
    return { getRipple: this.getRipple }
  },
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
      slotObserver: undefined,
      hasStartSection: this.title.length > 0,
      hasEndSection: true
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
      if (this.mdcTopAppBar instanceof MDCComponent && el) {
        this.mdcTopAppBar.setScrollTarget(el)
      }
    },
    short () {
      this.$nextTick(() => {
        this.reInstantiate()
      })
    },
    fixed () {
      this.$nextTick(() => {
        this.reInstantiate()
      })
    },
    collapsed () {
      this.$nextTick(() => {
        this.reInstantiate()
      })
    }
  },
  mounted () {
    this.updateSlots()
    this.slotObserver = new MutationObserver(() => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    this.instantiate()
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    this.mdcTopAppBar.destroy()
  },
  methods: {
    updateSlots () {
      this.hasStartSection = this.$slots.navigation == null || this.$slots.start == null || this.title.length === 0
      this.hasEndSection = this.$slots.end || this.$slots.actions
      if (this.$slots.navigation) {
        this.$slots.navigation.forEach(n => {
          if (n.elm instanceof Element) { n.elm.classList.add('mdc-top-app-bar__navigation-icon') }
        })
      }
      if (this.$slots.actions) {
        this.$slots.actions.forEach(n => {
          if (n.elm instanceof Element) {
            n.elm.classList.add('mdc-top-app-bar__action-item')
          }
        })
      }
      this.$nextTick(() => {
        this.reInstantiate()
      })
    },
    onNavigation () {
      this.$emit('nav')
    },
    instantiate () {
      this.mdcTopAppBar = MDCTopAppBar.attachTo(this.$el)
      if (this.scrollTarget && this.scrollTarget !== window) { this.mdcTopAppBar.setScrollTarget(this.scrollTarget) }
      this.$nextTick(() => {
        if (this.mdcTopAppBar.iconRipples_ instanceof Array) {
          this.mdcTopAppBar.iconRipples_.filter(ripple => ripple instanceof MDCComponent).forEach(ripple => {
            ripple.emit('_init')
          })
        }
      })
    },
    reInstantiate () {
      if (this.mdcTopAppBar instanceof MDCComponent) {
        this.mdcTopAppBar.destroy()
      }
      this.instantiate()
    },
    getRipple (el) {
      if (this.mdcTopAppBar instanceof MDCTopAppBar && this.mdcDialog.iconRipples_ instanceof Array) {
        for (const ripple of this.mdcTopAppBar.iconRipples_) {
          if (ripple instanceof MDCComponent && ripple.root_ === el) return ripple
        }
      }
    }
  }
}
</script>
