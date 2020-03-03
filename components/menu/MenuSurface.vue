<template>
  <div
    class="mdc-menu-surface"
    @MDCMenuSurface:closed="onClosed"
    @MDCMenuSurface:opened="onOpened"
  >
    <slot />
  </div>
</template>

<script>
import { Corner, MDCMenuSurface } from '@material/menu-surface'

export default {
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    fixed: {
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
    isHoisted: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcMenuSurface: undefined
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
      this.open ? this.mdcMenuSurface.getDefaultFoundation().open() : this.mdcMenuSurface.getDefaultFoundation().close()
    },
    quickOpen () {
      this.mdcMenuSurface.quickOpen = this.quickOpen
    },
    hoistToBody () {
      if (this.hoistToBody) {
        this.mdcMenuSurface.hoistMenuToBody()
      }
    },
    isHoisted () {
      this.mdcMenuSurface.setIsHoisted(this.isHoisted)
    },
    fixed () {
      this.mdcMenuSurface.setFixedPosition(this.fixed)
    },
    anchorCorner () {
      if (this._anchorCorner !== null) {
        this.mdcMenuSurface.setAnchorCorner(this.anchorCorner)
      }
    },
    absolutePositionX () {
      if (this.absolutePositionX !== null) {
        this.mdcMenuSurface.setAbsolutePosition(this.absolutePositionX, this.absolutePositionY)
      }
    },
    absolutePositionY () {
      if (this.absolutePositionY !== null) {
        this.mdcMenuSurface.setAbsolutePosition(this.absolutePositionX, this.absolutePositionY)
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.mdcMenuSurface = MDCMenuSurface.attachTo(this.$el)
      this.mdcMenuSurface.setFixedPosition(this.fixed)
      if (this._anchorCorner) {
        this.mdcMenuSurface.setAnchorCorner(this._anchorCorner)
      }
      if (this.absolutePositionX !== null || this.absolutePositionY !== null) {
        this.mdcMenuSurface.setAbsolutePosition(this.absolutePositionX, this.absolutePositionY)
      }
      if (this.hoistToBody) {
        this.mdcMenuSurface.hoistMenuToBody()
      }
      this.mdcMenuSurface.setIsHoisted(this.isHoisted)

      this.open ? this.mdcMenuSurface.getDefaultFoundation().open() : this.mdcMenuSurface.getDefaultFoundation().close()
    })
  },
  beforeDestroy () {
    this.mdcMenuSurface.destroy()
  },
  methods: {
    onClosed () {
      this.model = false
      this.$emit('closed')
    },
    onOpened () {
      this.model = true
      this.$emit('opened')
    }
  }
}
</script>
