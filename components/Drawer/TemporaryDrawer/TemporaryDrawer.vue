<template>
  <aside
    class="mdc-drawer mdc-drawer--temporary"
    v-on="$listeners">
    <nav class="mdc-drawer__drawer">
      <div
        class="mdc-drawer__toolbar-spacer"
        v-if="$slots['toolbarSpacer']">
        <slot name="toolbarSpacer" />
      </div>
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
import { MDCTemporaryDrawer } from '@material/drawer'

export default {
  props: {
    initialOpen: {
      type: Boolean,
      required: false,
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
