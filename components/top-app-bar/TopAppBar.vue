<template>
  <header
    class="mdc-top-app-bar"
    :class="classes"
    @MDCTopAppBar:nav="onNavigation()">
    <div class="mdc-top-app-bar__row">
      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
        v-if="$slots['navigation'] || $slots['default']">
        <slot name="navigation"/>
        <div
          v-if="$slots['default']"
          class="mdc-top-app-bar__title">
          <slot/>
        </div>
      </section>
      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
        role="toolbar"
        v-if="$slots['actions']">
        <slot name="actions"/>
      </section>
    </div>
  </header>
</template>

<script>
import { MDCTopAppBar } from '@material/top-app-bar'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
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
    }
  },
  data () {
    return {
      mdcTopAppBar: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-top-app-bar--short': this.short,
        'mdc-top-app-bar--short-collapsed': this.collapsed && this.short,
        'mdc-top-app-bar--prominent': this.prominent && !this.short,
        'mdc-top-app-bar--dense': this.dense && !this.short
      }
    }
  },
  mounted () {
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

    this.mdcTopAppBar = MDCTopAppBar.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcTopAppBar.destroy()
  },
  methods: {
    onNavigation () {
      this.$emit('onNavigation')
    }
  }
}
</script>
