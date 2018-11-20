<template>
  <aside
    class="mdc-drawer mdc-drawer--modal"
    @MDCPersistentDrawer:close="model = false">
    <slot name="toolbarSpacer" />
    <slot name="header" />
    <slot />
  </aside>
</template>

<script>
import { MDCPersistentDrawer } from '@material/drawer'

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
      default: true
    }
  },
  data () {
    return {
      mdcModalDrawer: undefined
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
      this.mdcModalDrawer.open = this.open
    }
  },
  mounted () {
    this.mdcModalDrawer = MDCPersistentDrawer.attachTo(this.$el)
    this.mdcModalDrawer.open = this.open
  },
  beforeDestroy () {
    this.mdcModalDrawer.destroy()
  }
}
</script>
