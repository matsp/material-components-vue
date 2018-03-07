<template>
  <header
    class="mdc-top-app-bar"
    @MDCTopAppBar:nav="onNavigation()">
    <div class="mdc-top-app-bar__row">
      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
        v-if="$slots['navigation'] || $slots['default']">
        <slot name="navigation"/>
        <slot/>
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

export default {
  props: {
    collapsed: {
      type: Boolean,
      validator: value => value === this.short ? value : false,
      default: false
    },
    short: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcTopAppBar: null
    }
  },
  computed: {
    classes () {
      return {
        'mdc-top-app-bar--short': this.short,
        'mdc-top-app-bar--short-collapsed': this.collapsed
      }
    }
  },
  mounted () {
    if (this.$slots.default) {
      this.$slots.default.map(n => {
        n.elm.classList.add('mdc-top-app-bar__title')
      })
    }

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
      this.$emit('navigation')
    }
  }
}
</script>
