<template>
  <aside
    class="mdc-drawer mdc-drawer--persistent"
    @MDCPersistentDrawer:close="closeDrawer()">
    <nav class="mdc-drawer__drawer">
      <slot name="toolbarSpacer" />
      <slot name="header" />
      <slot />
    </nav>
  </aside>
</template>

<script>
import { MDCPersistentDrawer } from '@material/drawer'

import themeClassMixin from '../../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    open: {
      type: Boolean,
      default: true
    }
  },
  model: {
    prop: 'open',
    event: 'change'
  },
  data () {
    return {
      mdcPersistentDrawer: null
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
  mounted () {
    this.mdcPersistentDrawer = MDCPersistentDrawer.attachTo(this.$el)
    this.mdcPersistentDrawer.open = this.open
  },
  beforeDestroy () {
    this.mdcPersistentDrawer.destroy()
  },
  methods: {
    closeDrawer () {
      this.model = false
    }
  },
  watch: {
    open () {
      this.mdcPersistentDrawer.open = this.open
    }
  }
}
</script>
