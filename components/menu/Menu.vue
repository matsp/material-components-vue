<template>
  <div
    class="mdc-menu"
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
    prop: 'open',
    event: 'change'
  },
  props: {
    open: {
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
      mdcMenu: null,
      slotObserver: null
    }
  },
  computed: {
    model: {
      get () {
        return this.open
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  },
  watch: {
    open () {
      this.mdcMenu.open = this.open
    },
    quickOpen () {
      this.mdcMenu.quickOpen = this.quickOpen
    }
  },
  mounted () {
    this.updateSlot()
    this.slotObserver = new MutationObserver( () => this.updateSlot())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    this.mdcMenu = MDCMenu.attachTo(this.$el)
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    this.mdcMenu.destroy()
  },
  methods: {
    updateSlot () {
      if (this.$slots.default) {
        this.$slots.default.map(n => {
          n.elm.classList.add('mdc-menu__items')
        })
        this.$slots.default[0].elm.setAttribute('role', 'menu')

        this.$slots.default[0].componentOptions.children
          .filter(n => n.elm.className.indexOf('mdc-list-item') > -1)
          .map(n => {
            n.elm.setAttribute('tabindex', '0')
            n.elm.setAttribute('role', 'menuitem')
          })
      }
    },
    onSelect (event) {
      this.model = false
      this.$emit('select', event.detail)
    },
    onCancel () {
      this.model = false
      this.$emit('cancel')
    }
  }
}
</script>
