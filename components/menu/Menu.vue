<template>
  <div
    class="mdc-menu"
    :class="classes"
    tabindex="-1"
    @MDCMenu:selected="onSelect"
    @MDCMenu:cancel="onCancel">
    <slot />
  </div>
</template>

<script>
import { MDCMenu } from '@material/menu'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    startOpen: {
      type: Boolean,
      default: false
    },
    quickOpen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcMenu: null
    }
  },
  computed: {
    classes () {
      return {
        'mdc-menu--open': this.startOpen
      }
    }
  },
  mounted () {
    if (this.$slots.default) {
      this.$slots.default.map(n => {
        n.elm.classList.add('mdc-menu__items')
      })
      this.$slots.default[0].elm.setAttribute('role', 'menu')

      this.$slots.default[0].componentOptions.children
        .filter(n => n.elm.className.indexOf('mdc-list-item') > -1)
        .map(n => n.elm.setAttribute('tabindex', '0'))
    }

    this.mdcMenu = MDCMenu.attachTo(this.$el)
    this.mdcMenu.open = this.open
    this.mdcMenu.quickOpen = this.quickOpen
  },
  beforeDestroy () {
    this.mdcMenu.destroy()
  },
  methods: {
    show () {
      this.mdcMenu.show()
    },
    hide () {
      this.mdcMenu.hide()
    },
    onSelect (event) {
      this.$emit('change', event.detail.index)
    },
    onCancel (event) {
      this.$emit('canceled')
    }
  }
}
</script>
