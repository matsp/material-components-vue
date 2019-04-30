<template>
  <div
    :tabindex="tabIndex"
    class="mdc-menu mdc-menu-surface"
    @MDCMenu:selected="onSelect"
  >
    <slot />
  </div>
</template>

<script>
import { Corner, MDCMenu } from '@material/menu'

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
    },
    anchorCorner: {
      type: String,
      default: ''
    },
    absolutePositionX: {
      type: Number,
      default: -1
    },
    absolutePositionY: {
      type: Number,
      default: -1
    },
    fixed: {
      type: Boolean,
      default: false
    },
    wrapFocus: {
      type: Boolean,
      default: true
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
    },
    tabIndex () {
      if (this.$slots.default[0].componentOptions.tag.toLowerCase() === 'm-list') {
        return -1
      }

      return this.mdcMenu ? (this.mdcMenu.open ? 0 : -1) : (this.open ? 0 : -1)
    }
  },
  watch: {
    open () {
      this.mdcMenu.open = this.open
    },
    quickOpen () {
      this.mdcMenu.quickOpen = this.quickOpen
    },
    fixed () {
      this.mdcMenu.setFixedPosition(this.fixed)
    },
    anchorCorner () {
      if (this.anchorCorner !== '') {
        this.mdcMenu.setAnchorCorner(Corner[this.anchorCorner.toUpperCase()])
      } else {
        this.mdcMenu.setAnchorCorner(Corner.TOP_START)
      }
    },
    absolutePositionX () {
      if (this.absolutePositionX > -1 && this.absolutePositionY > -1) {
        this.mdcMenu.setAbsolutePosition(this.absolutePositionX, this.absolutePositionY)
      }
    },
    absolutePositionY () {
      if (this.absolutePositionX > -1 && this.absolutePositionY > -1) {
        this.mdcMenu.setAbsolutePosition(this.absolutePositionX, this.absolutePositionY)
      }
    },
    wrapFocus () {
      this.mdcMenu.wrapFocus = this.wrapFocus
    },
    'mdcMenu.open' () {
      this.model = this.mdcMenu.open
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
    this.mdcMenu.setFixedPosition(this.fixed)
    if (this.anchorCorner !== '') {
      this.mdcMenu.setAnchorCorner(Corner[this.anchorCorner.toUpperCase()])
    }
    if (this.absolutePositionX > -1 && this.absolutePositionY > -1) {
      this.mdcMenu.setAbsolutePosition(this.absolutePositionX, this.absolutePositionY)
    }
    this.mdcMenu.wrapFocus = this.wrapFocus
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    this.mdcMenu.destroy()
  },
  methods: {
    updateSlot () {
      if (this.$slots.default) {
        this.$slots.default.map(n => {
          n.componentInstance.$el.setAttribute('role', 'menu')
          n.componentInstance.$el.setAttribute('aria-hidden', 'true')
          n.componentInstance.$el.setAttribute('aria-orientation', 'vertical')
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
