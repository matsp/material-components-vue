<template>
  <aside
    class="mdc-drawer mdc-drawer--persistent"
    v-on="$listeners">
    <nav class="mdc-drawer__drawer">
      <slot name="toolbarSpacer" />
      <slot name="header" />
      <slot />
    </nav>
  </aside>
</template>

<script>
import { MDCPersistentDrawer } from '@material/drawer'

export default {
  props: {
    initialOpen: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      open: null,
      mdcPersistentDrawer: null
    }
  },
  mounted () {
    this.mdcPersistentDrawer = MDCPersistentDrawer.attachTo(this.$el)
    this.open = this.initialOpen
    this.mdcPersistentDrawer.open = this.open
  },
  beforeDestroy () {
    this.mdcPersistentDrawer.destroy()
  },
  methods: {
    toggle () {
      this.open ? this.mdcPersistentDrawer.open = false : this.mdcPersistentDrawer.open = true
      this.open = !this.open
    }
  }
}
</script>
