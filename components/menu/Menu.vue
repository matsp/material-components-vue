<template>
  <div
    class="mdc-menu mdc-menu-surface"
    @MDCMenu:selected="onSelect"
    @_init="onParentInit"
  >
    <slot />
  </div>
</template>

<script>
import { Corner, MDCMenu } from '@material/menu'
import { DefaultFocusState } from '@material/menu/constants'

import { baseComponentMixin, themeClassMixin } from '../base'
import { MDCComponent } from '@material/base/component'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  inject: {
    getMenu: {
      default: null
    }
  },
  provide () {
    return {
      getList: this.getList
    }
  },
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
      default: Number.POSITIVE_INFINITY
    },
    absolutePositionY: {
      type: Number,
      default: Number.POSITIVE_INFINITY
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
    open (val) {
      if (this.mdcMenu.open !== val) this.mdcMenu.open = val
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
      if (this.absolutePositionX !== Number.POSITIVE_INFINITY) {
        this.mdcMenu.setAbsolutePosition(this.absolutePositionX, this.absolutePositionY)
      }
    },
    absolutePositionY () {
      if (this.absolutePositionY !== Number.POSITIVE_INFINITY) {
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
    'mdcMenu.open' (val) {
      this.$emit('change', val)
    },
    selectedIndex () {
      if (this.selectedIndex >= 0) this.mdcMenu.setSelectedIndex(this.selectedIndex)
    }
  },
  mounted () {
    this.updateSlot()
    this.slotObserver = new MutationObserver(() => this.updateSlot())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    if (!(this.getMenu instanceof Function)) { // can not be init by parent
      this.instantiate()
    }
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    if (this.mdcMenu instanceof MDCMenu) {
      this.mdcMenu.destroy()
    }
  },
  methods: {
    instantiate () {
      this.mdcMenu = MDCMenu.attachTo(this.$el)
      this.propsSetting()
      this.$nextTick(() => { // wait for the DOM change
        // tell all the children that the parent is initialized
        if (this.mdcMenu.list_ instanceof MDCComponent) {
          this.mdcMenu.list_.emit('_init')
        }
      })
    },
    updateSlot () {
      if (this.$slots.default) {
        this.$slots.default.map(n => {
          if (n.elm instanceof HTMLElement) {
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
    },
    onParentInit () {
      const menu = this.getMenu()
      if (menu instanceof MDCMenu) {
        if (this.mdcMenu instanceof MDCMenu) this.mdcMenu.destroy()
        this.mdcMenu = menu
        this.propsSetting()
      }
    },
    propsSetting () {
      if (this.mdcMenu instanceof MDCMenu) {
        if (this.hoistToBody) {
          this.mdcMenu.hoistMenuToBody()
        }
        this.mdcMenu.setFixedPosition(this.fixed)
        if (this._anchorCorner) {
          this.mdcMenu.setAnchorCorner(this._anchorCorner)
        }
        if (this.absolutePositionX !== Number.POSITIVE_INFINITY && this.absolutePositionY !== Number.POSITIVE_INFINITY) {
          this.mdcMenu.setAbsolutePosition(this.absolutePositionX, this.absolutePositionY)
        }
        this.mdcMenu.wrapFocus = this.wrapFocus

        if (this.focusState !== null) {
          this.mdcMenu.setDefaultFocusState(this.focusState)
        }
        this.mdcMenu.setIsHoisted(this.isHoisted)

        if (this.selectedIndex >= 0) this.mdcMenu.setSelectedIndex(this.selectedIndex)
      }
    },
    getList () {
      return this.mdcMenu.list_
    }
  }
}
</script>
