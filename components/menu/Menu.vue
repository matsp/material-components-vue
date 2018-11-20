<template>
  <div
    class="mdc-menu mdc-menu-surface"
    tabindex="-1"
    @MDCMenu:selected="onSelect">
    <slot />
  </div>
</template>

<script>
import { MDCMenu } from '@material/menu'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
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
      mdcMenu: undefined,
      slotObserver: undefined
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
    },
    'mdcMenu.open' () {
      if (!this.mdcMenu.open) {
        this.$emit('cancel', true)
      }
    }
  },
  mounted () {
    this.updateSlot()
    this.slotObserver = new MutationObserver(() => this.updateSlot())
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
          n.componentInstance.$el.classList.add('mdc-menu__items')
          n.componentInstance.$el.setAttribute('role', 'menu')
          n.componentInstance.$el.setAttribute('aria-hidden', 'true')
          n.componentInstance.$children
            .filter(n => n.$el.classList.contains('mdc-list-item'))
            .map(n => {
              n.$el.setAttribute('tabindex', '0')
              n.$el.setAttribute('role', 'menuitem')
              // TODO: temporary fix to pass events
              n.$children.map(nc => {
                nc.$el.setAttribute('style', 'pointer-events: none')
              })
            })
        })
      }
    },
    onSelect (event) {
      this.model = false
      this.$emit('select', event.detail)
    }
  }
}
</script>
