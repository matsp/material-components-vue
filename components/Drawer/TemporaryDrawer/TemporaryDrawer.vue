<template>
  <aside class="mdc-temporary-drawer" v-on="$listeners">
    <nav class="mdc-temporary-drawer__drawer">
      <div class="mdc-temporary-drawer__toolbar-spacer" :class="primaryClasses(primaryToolbarSpacer)" v-if="$slots['toolbarSpacer']">
        <slot name="toolbarSpacer" />
      </div>
      <header class="mdc-temporary-drawer__header" v-if="$slots['header']">
        <div class="mdc-temporary-drawer__header-content" :class="primaryClasses(primaryHeader)">
          <slot name="header" />
        </div>
      </header>
      <nav class="mdc-temporary-drawer__content" :class="primaryClasses(primaryContent)" v-if="$slots['default']">
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
      required: false
    },
    primaryHeader: {
      type: Boolean,
      required: false
    },
    primaryToolbarSpacer: {
      type: Boolean,
      required: false
    },
    primaryContent: {
      type: Boolean,
      required: false
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
    primaryClasses (prop) {
      return {
        'mdc-theme--primary-bg': prop,
        'mdc-theme--text-primary-on-primary': prop
      }
    },
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
