<template>
  <aside
    class="mdc-drawer mdc-drawer--temporary"
    @MDCTemporaryDrawer:close="closeDrawer()">
    <nav class="mdc-drawer__drawer">
      <slot name="toolbarSpacer"/>
      <slot name="header"/>
      <slot />
    </nav>
  </aside>
</template>

<script>
import { MDCTemporaryDrawer } from '@material/drawer'

import themeClassMixin from '../../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'open',
    event: 'change'
  },
  data () {
    return {
      mdcTemporaryDrawer: null
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
    this.mdcTemporaryDrawer = MDCTemporaryDrawer.attachTo(this.$el)
    this.mdcTemporaryDrawer.open = this.open
  },
  beforeDestroy () {
    this.mdcTemporaryDrawer.destroy()
  },
  methods: {
    closeDrawer () {
      this.model = false
    }
  },
  watch: {
    open () {
      this.mdcTemporaryDrawer.open = this.open
    }
  }
}
</script>
