<template>
  <aside
    class="mdc-drawer mdc-drawer--dismissible"
    @MDCDrawer:close="model = false">
    <slot name="toolbarSpacer" />
    <slot name="header" />
    <slot />
  </aside>
</template>

<script>
import { MDCDrawer } from '@material/drawer'

import { baseComponentMixin, themeClassMixin } from '../../base'

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
    }
  },
  data () {
    return {
      mdcDismissibleDrawer: undefined
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
      this.mdcDismissibleDrawer.open = this.open
    }
  },
  mounted () {
    this.mdcDismissibleDrawer = MDCDrawer.attachTo(this.$el)
    this.mdcDismissibleDrawer.open = this.open
  },
  beforeDestroy () {
    this.mdcDismissibleDrawer.destroy()
  }
}
</script>
