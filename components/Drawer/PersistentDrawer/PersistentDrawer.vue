<template>
  <aside
    class="mdc-drawer mdc-drawer--persistent"
    v-on="$listeners">
    <nav class="mdc-drawer__drawer">
      <header
        class="mdc-drawer__header"
        v-if="$slots['header']">
        <div class="mdc-drawer__header-content">
          <slot name="header" />
        </div>
      </header>
      <nav
        class="mdc-drawer__content"
        v-if="$slots['default']">
        <slot />
      </nav>
    </nav>
  </aside>
</template>

<script>
import { MDCPersistentDrawer } from '@material/drawer'

export default {
  props: {
    initialOpen: {
      type: Boolean,
      required: false,
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

<style lang="scss">
@import "@material/drawer/mdc-drawer";
</style>
