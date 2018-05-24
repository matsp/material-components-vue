<template>
  <header
    :class="classes"
    class="mdc-top-app-bar"
    @MDCTopAppBar:nav="onNavigation()">
    <div class="mdc-top-app-bar__row">
      <section
        v-if="$slots['navigation'] || $slots['default']"
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <slot name="navigation"/>
        <div
          v-if="$slots['default']"
          class="mdc-top-app-bar__title">
          <slot/>
        </div>
      </section>
      <section
        v-if="$slots['actions']"
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
        role="toolbar">
        <slot name="actions"/>
      </section>
    </div>
  </header>
</template>

<script>
import { MDCTopAppBar } from '@material/top-app-bar'

import { baseComponentMixin, themeClassMixin } from '../base'

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
        'mdc-top-app-bar--short': this.short,
        'mdc-top-app-bar--short-collapsed': this.collapsed && this.short,
        'mdc-top-app-bar--prominent': this.prominent && !this.short,
        'mdc-top-app-bar--dense': this.dense && !this.short,
        'mdc-top-app-bar--fixed': this.fixed && !this.short
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
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    this.mdcTopAppBar.destroy()
  },
  methods: {
    updateSlots () {
      if (this.$slots.navigation) {
        this.$slots.navigation.map(n => {
          n.elm.classList.add('mdc-top-app-bar__navigation-icon')
        })
      }
      if (this.$slots.actions) {
        this.$slots.actions.map(n => {
          n.elm.classList.add('mdc-top-app-bar__action-item')
        })
      }
    },
    onNavigation () {
      this.$emit('onNavigation')
    }
  }
}
</script>
