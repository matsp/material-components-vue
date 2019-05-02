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
import { DefaultFocusState } from '@material/menu/constants'

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
      default: null
    },
    absolutePositionY: {
      type: Number,
      default: null
    },
    hoistToBody: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    wrapFocus: {
      type: Boolean,
      default: true
    },
    defaultFocusState: {
      type: [Number, String],
      default: null
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
    focusState () {
      if (!this.defaultFocusState) return null

      const upperCaseFocusState = String(this.defaultFocusState).toUpperCase()
      if (isNaN(this.defaultFocusState) &&
        DefaultFocusState.hasOwnProperty(upperCaseFocusState)
      ) {
        return DefaultFocusState[upperCaseFocusState]
      }

      const numberFocusState = Number(this.defaultFocusState)
      if (!isNaN(this.defaultFocusState) &&
        DefaultFocusState.hasOwnProperty(numberFocusState)
      ) {
        return numberFocusState
      }

      return null
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
    hoistToBody () {
      if (this.hoistToBody) {
        this.mdcMenu.hoistMenuToBody()
      }
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
      if (this.absolutePositionX !== null) {
        this.mdcMenu.setAbsolutePosition(this.absolutePositionX, this.absolutePositionY)
      }
    },
    absolutePositionY () {
      if (this.absolutePositionY !== null) {
        this.mdcMenu.setAbsolutePosition(this.absolutePositionX, this.absolutePositionY)
      }
    },
    wrapFocus () {
      this.mdcMenu.wrapFocus = this.wrapFocus
    },
    defaultFocusState () {
      if (this.focusState !== null) {
        this.mdcMenu.setDefaultFocusState(this.focusState)
      }
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
    if (this.hoistToBody) {
      this.mdcMenu.hoistMenuToBody()
    }
    this.mdcMenu.setFixedPosition(this.fixed)
    if (this.anchorCorner !== '') {
      this.mdcMenu.setAnchorCorner(Corner[this.anchorCorner.toUpperCase()])
    }
    if (this.absolutePositionX !== null || this.absolutePositionY !== null) {
      this.mdcMenu.setAbsolutePosition(this.absolutePositionX, this.absolutePositionY)
    }
    this.mdcMenu.wrapFocus = this.wrapFocus

    if (this.focusState !== null) {
      this.mdcMenu.setDefaultFocusState(this.focusState)
    }
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
