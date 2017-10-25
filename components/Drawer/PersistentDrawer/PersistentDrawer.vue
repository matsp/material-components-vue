<template>
    <aside class="mdc-persistent-drawer" v-on="$listeners">
        <nav class="mdc-persistent-drawer__drawer">
            <div class="mdc-temporary-drawer__toolbar-spacer" :class="primaryClasses(primaryToolbarSpacer)" v-if="$slots['toolbarSpacer']">
                <slot name="toolbarSpacer" />
            </div>
            <header class="mdc-persistent-drawer__header" :class="primaryClasses(primaryHeader)" v-if="$slots['header']">
                <div class="mdc-persistent-drawer__header-content">
                    <slot name="header" />
                </div>
            </header>
            <nav class="mdc-persistent-drawer__content mdc-list" :class="primaryClasses(primaryContent)" v-if="$slots['default']">
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
      required: false
    },
    primaryHeader: {
      type: Boolean,
      required: false
    },
    primaryContent: {
      type: Boolean,
      required: false
    },
    primaryToolbarSpacer: {
      type: Boolean,
      required: false
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
    primaryClasses (prop) {
      return {
        'mdc-theme--primary-bg': prop,
        'mdc-theme--text-primary-on-primary': prop
      }
    },
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
