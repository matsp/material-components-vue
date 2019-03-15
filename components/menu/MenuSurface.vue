<template>
    <div
            @MDCMenuSurface:closed="onClosed"
            @MDCMenuSurface:opened="onOpened"
            class="mdc-menu-surface"
    >
        <slot/>
    </div>
</template>

<script>
  import { Corner, MDCMenuSurface } from '@material/menu-surface'

  export default {
    name: 'MenuSurface',
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
      }
    },
    watch: {
      open () {
        this.mdcMenuSurface.open = this.open
      },
      quickOpen () {
        this.mdcMenuSurface.quickOpen = this.quickOpen
      },
      fixed () {
        this.mdcMenuSurface.setFixedPosition(this.fixed)
      },
      anchorCorner () {
        if (this.anchorCorner !== '') {
          this.mdcMenuSurface.setAnchorCorner(Corner[this.anchorCorner.toUpperCase()])
        } else {
          this.mdcMenuSurface.setAnchorCorner(Corner.TOP_START)
        }
      },
      absolutePositionX () {
        if (this.absolutePositionX > -1 && this.absolutePositionY > -1) {
          this.mdcMenuSurface.setAbsolutePosition(this.absolutePositionX, this.absolutePositionY)
        }
      },
      absolutePositionY () {
        if (this.absolutePositionX > -1 && this.absolutePositionY > -1) {
          this.mdcMenuSurface.setAbsolutePosition(this.absolutePositionX, this.absolutePositionY)
        }
      }
    },
    mounted () {
      this.mdcMenuSurface = MDCMenuSurface.attachTo(this.$el)
      this.mdcMenuSurface.setFixedPosition(this.fixed)
      if (this.anchorCorner !== '') {
        this.mdcMenuSurface.setAnchorCorner(Corner[this.anchorCorner.toUpperCase()])
      }
      if (this.absolutePositionX > -1 && this.absolutePositionY > -1) {
        this.mdcMenuSurface.setAbsolutePosition(this.absolutePositionX, this.absolutePositionY)
      }
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

<style scoped>

</style>
