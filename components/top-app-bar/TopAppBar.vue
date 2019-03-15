<template>
  <header
          :class="classes"
          @MDCTopAppBar:nav="onNavigation()"
          class="mdc-top-app-bar"
  >
    <div class="mdc-top-app-bar__row">
      <section
              class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
              v-if="$slots['navigation'] || title"
      >
          <slot name="navigation"/>
          <span
                  class="mdc-top-app-bar__title"
                  v-if="title"
          >
          {{ title }}
        </span>
      </section>
        <slot/>
      <section
              class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
              role="toolbar"
              v-if="$slots['actions']"
      >
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
    },
    title: {
      type: String,
      default: ''
    },
    scrollTarget: {
      type: String,
      default: ''
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
    watch: {
      scrollTarget () {
        if (this.mdcTopAppBar && this.scrollTarget) {
          this.mdcTopAppBar.setScrollTarget(document.getElementById(this.scrollTarget))
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
    if (this.scrollTarget) this.mdcTopAppBar.setScrollTarget(document.getElementById(this.scrollTarget))
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
        this.$slots.actions.forEach(n => {
          if (n.tag) { n.elm.classList.add('mdc-top-app-bar__action-item') }
        })
      }
    },
    onNavigation () {
      this.$emit('nav')
    }
  }
}
</script>
