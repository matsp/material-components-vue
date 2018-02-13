<template>
  <aside
    class="mdc-drawer mdc-drawer--temporary"
    v-on="$listeners">
    <nav class="mdc-drawer__drawer">
      <slot name="toolbarSpacer"/>
      <slot name="header"/>
      <slot />
    </nav>
  </aside>
</template>

<script>
import { MDCTemporaryDrawer } from '@material/drawer'

export default {
  props: {
    initialOpen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      open: null,
      mdcTemporaryDrawer: null
    }
  },
  mounted () {
    this.mdcTemporaryDrawer = MDCTemporaryDrawer.attachTo(this.$el)
    this.open = this.initialOpen
    this.mdcTemporaryDrawer.open = this.open
  },
  beforeDestroy () {
    this.mdcTemporaryDrawer.destroy()
  },
  methods: {
    toggle () {
      this.open ? this.mdcTemporaryDrawer.open = false : this.mdcTemporaryDrawer.open = true
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss">
@import "@material/drawer/mdc-drawer";
</style>
