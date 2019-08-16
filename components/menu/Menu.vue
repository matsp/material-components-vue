<template>
  <div
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
      type: [Number, String],
      default: 0
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
      default: 1
    },
    selectedIndex: {
      type: Number,
      default: -1
    },
    isHoisted: {
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
    },
    focusState () {
      if (!this.defaultFocusState) return null

      const upperCaseFocusState = String(this.defaultFocusState).toUpperCase()
      if (isNaN(this.defaultFocusState)) {
        return DefaultFocusState[upperCaseFocusState]
      }

      const numberFocusState = Number(this.defaultFocusState)
      if (!isNaN(this.defaultFocusState)) {
        return numberFocusState
      }

      return null
    },
    _anchorCorner () {
      if (!this.anchorCorner) return null

      const upperCaseFocusState = String(this.anchorCorner).toUpperCase()
      if (isNaN(this.anchorCorner)) {
        return Corner[upperCaseFocusState]
      }

      const numberFocusState = Number(this.anchorCorner)
      if (!isNaN(this.anchorCorner)) {
        return numberFocusState
      }

      return null
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
    isHoisted () {
      this.mdcMenu.setIsHoisted(this.isHoisted)
    },
    fixed () {
      this.mdcMenu.setFixedPosition(this.fixed)
    },
    anchorCorner () {
      if (this._anchorCorner !== null) {
        this.mdcMenu.setAnchorCorner(this.anchorCorner)
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
    },
    selectedIndex () {
      if (this.selectedIndex >= 0) this.mdcMenu.setSelectedIndex(this.selectedIndex)
    }
  },
  mounted () {
    this.$nextTick(() => {
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
      if (this._anchorCorner) {
        this.mdcMenu.setAnchorCorner(this._anchorCorner)
      }
      if (this.absolutePositionX !== null || this.absolutePositionY !== null) {
        this.mdcMenu.setAbsolutePosition(this.absolutePositionX, this.absolutePositionY)
      }
      this.mdcMenu.wrapFocus = this.wrapFocus

      if (this.focusState !== null) {
        this.mdcMenu.setDefaultFocusState(this.focusState)
      }
      this.mdcMenu.setIsHoisted(this.isHoisted)

      if (this.selectedIndex >= 0) this.mdcMenu.setSelectedIndex(this.selectedIndex)
    })
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    this.mdcMenu.destroy()
  },
  methods: {
    updateSlot () {
      if (this.$slots.default) {
        this.$slots.default.map(n => {
          if (n.elm) {
            n.elm.setAttribute('role', 'menu')
            n.elm.setAttribute('aria-hidden', 'true')
            n.elm.setAttribute('aria-orientation', 'vertical')
            n.elm.querySelectorAll('.mdc-list-item').forEach(i => {
              i.setAttribute('role', 'menuitem')
            })
          }
        })
      }
    },
    onSelect (event) {
      this.model = false
      this.$emit('selected', event.detail)
    }
  }
}
</script>
