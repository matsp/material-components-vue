<template>
  <aside
    :class="classes"
    class="mdc-drawer"
    @MDCDrawer:closed="onClosed"
  >
    <slot name="header" />
    <slot />
  </aside>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'
import { MDCDrawer } from '@material/drawer'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcDrawer: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-drawer--dismissible': this.dismissible,
        'mdc-drawer--modal': this.modal
      }
    },
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
    modal () {
      if (!this.mdcDrawer) this.mdcDrawer = new MDCDrawer(this.$el)
    },
    dismissible () {
      if (!this.mdcDrawer) this.mdcDrawer = new MDCDrawer(this.$el)
    },
    open () {
      this.mdcDrawer.open = this.open
    }
  },
  mounted () {
    if (!this.mdcDrawer && (this.dismissible || this.modal)) { this.mdcDrawer = new MDCDrawer(this.$el) }
  },
  provide: {
    mdcDrawer: this
  },
  beforeDestroy () {
    if (this.mdcDrawer) this.mdcDrawer.destroy()
  },
  methods: {
    onClosed () {
      this.model = false
      this.$emit('closed')
    }
  }
}
</script>
